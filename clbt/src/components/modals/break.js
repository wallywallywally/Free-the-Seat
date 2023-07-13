import '../styles.css'
import { useState, useEffect } from 'react'

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
    const { onClose, open, checkInRes, checkedIn, onBreak } = props;

    // on close
    const handleClose = () => {
        // stay on modal once break starts + not checked back in
        if (checkedIn[0]) {
            setStartTimer(false)
            onClose()
        }
    }
    
    // checkInRes = [seatID, resID, start, end]

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
        // check out + onBreak
        onBreak[1](true)
        checkedIn[1](false)
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
                Your seat is now empty and open for others
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
                    Please return to your seat by the end of your break
                    <br/> or your seat will be marked as empty and open for others
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
                Scan the QR code to check back in to your seat
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

export default function Break({open, onClose, checkInRes, checkedIn, onBreak}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <BreakModal
        open={open}
        onClose={handleClose()}
        checkInRes={checkInRes}
        checkedIn={checkedIn}
        onBreak={onBreak}
        />
        </>
  );
}