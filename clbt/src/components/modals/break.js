import '../styles.css'
import { useState, useEffect } from 'react'
import { getNow } from '../main'

// mui
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

// timer component
import Timer from './breakTimer.js'


// break system modal
function BreakModal(props) {
    const { onClose, open, checkInRes, setCheckInRes, checkedIn, onBreak } = props;
    
    // get seat info
    const [seatDet, setSeatDet] = useState([])
    useEffect(() => {
        if (checkInRes !== undefined) {
            const element = document.getElementById(String(checkInRes[0]))
            if (element !== null) {
                const lvl = element.closest('.lvl').id
                const seat = element.value
                setSeatDet([lvl, seat])
            }
        }
    }, [checkInRes])

    // timer
    const val15minms = 15 * 60 * 1000
    const currentTime = new Date().getTime()
    const timer15 = currentTime + val15minms
    const timer3s = currentTime + 3000
    // start
    const [startTimer, setStartTimer] = useState(false)
    const [timerEnd, setTimerEnd] = useState(false)
    const handleBreakStart = () => {
        setStartTimer(true)
        // onBreak + check out
        onBreak[1](true)

        // [DB int] UPDATE user checked_in status - false
        checkedIn[1](false)
    }

    // break end
    // not checked in after break === to clear
    const toClear = !onBreak[0] && !checkedIn[0] && timerEnd
    if (toClear) {
        // get current time
        const now = getNow()

        // NEW LOGIC
        // if break timer ends, they have to reserve + check in again
        // [DB int] DELETE checkInRes
        // TAKEN FROM OTHER CODE AND EDITED - TO IMPLEMENT PROPERLY
        // const {error} = await supabase
        //     .from('reservations')
        //     .delete()
        //     .eq('id', checkInRes[3])
        
        // [DB int - staff alert] CREATE entry of seat to clear
        // TAKEN FROM OTHER CODE AND EDITED - TO IMPLEMENT PROPERLY
        // [seatid, time it was considered empty]
        // const { data, error } = await supabase 
        //     .from('toClear')
        //     .insert({seat_id: seatDet[2], time: now})
        //     .select()

        // reset
        setCheckInRes([])
    }

    // on close
    const handleClose = () => {
        // stay on modal once break starts (not checked in)
        // can only exit once break has ended
        if (checkedIn[0] || toClear) {
            setStartTimer(false)
            if (toClear) setTimerEnd(false)
            onClose()
        }
    }

    // what's displayed
    return (
        <Dialog fullWidth={true} maxWidth='md' onClose={handleClose} open={open} keepMounted>
            <div
            id='seat-num'
            style={{
                width: '7rem',
                border: '1px solid #000',
                textAlign: 'center',
                margin: '0 auto',
                padding: '4px 0',
                marginTop: '1.5rem',
            }}>
                <Typography variant='h5'>Level {seatDet[0]}</Typography>
                <Typography variant='h4'>{seatDet[1]}</Typography>
            </div>

            {timerEnd ? 
            <DialogTitle sx={{textAlign:'center'}}>
                Your seat is now empty and will be cleared for others
            </DialogTitle>
            :
            <>
                <DialogTitle sx={{textAlign:'center'}}>
                    Breaks last for <span style={{fontWeight:'bold'}}>15</span> minutes
                </DialogTitle>
                <Typography 
                variant='body1' 
                sx={{
                    textAlign: 'center',
                    marginBottom: '2rem'
                }}>
                    Please return to your seat before the end of your break
                    <br/> or your seat will be marked as empty and cleared for others
                </Typography>
                {/* timer */}
                <Box
                display='flex'
                justifyContent='center'
                marginBottom='2rem'
                >
                    <Timer targetDate={timer3s} startTimer={startTimer} 
                    setTimerEnd={setTimerEnd} setOnBreak={onBreak[1]}
                    />
                </Box>
            </>
            }

            {startTimer &&
            <Typography 
            variant='body1' 
            textAlign='center' 
            marginBottom='2rem'
            >
                {timerEnd ? 'To continue using this seat, reserve and check in again' : 'Scan the QR code to check back in to your seat'}
            </Typography>
            }

            {/* button */}
            {!startTimer &&
            <Button
            onClick={handleBreakStart}
            variant='contained'
            disableElevation
            sx={{
                marginTop: 5,
                borderRadius: 0,
                backgroundColor: '#e7be95',
                color: '#000',
                '&:hover': {backgroundColor: 'rgba(231, 190, 149, 0.7)'},
                '&:active': {backgroundColor: '#e7be95'},
            }}>
                Start break timer
            </Button>
            }
        </Dialog>
    )
}

BreakModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default function Break({open, onClose, checkInRes, setCheckInRes, checkedIn, onBreak}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <BreakModal
        open={open}
        onClose={handleClose()}
        checkInRes={checkInRes} setCheckInRes={setCheckInRes}
        checkedIn={checkedIn}
        onBreak={onBreak}
        />
        </>
  );
}