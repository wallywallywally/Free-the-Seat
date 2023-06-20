import '../styles.css'
import { useState, useEffect } from 'react'

// mui
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


// timer
// custom countdown hook
// const useCountdown = (targetDate) => {
//     const countDownDate = new Date(targetDate).getTime()
//     const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCountDown(countDownDate - new Date().getTime());
//         }, 1000);
//         return () => clearInterval(interval);
//     }, [countDownDate])

//     return timeLeft(countDown);
// }
// const timeLeft = (countDown) => {
//     const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
//     return [minutes, seconds];
// }
// const CountdownTimer = ({ targetDate, startTimer }) => {
//     const [minutes, seconds] = useCountdown(targetDate);

//     if (minutes + seconds <= 0) {
//         // timer ends
//         return (
//             <p>ended</p>
//         )
//     } else {
//         // timer
//         return (
//             <Box 
//             display='flex'
//             gap='1rem'
//             >
//                 <Box
//                 display='flex'
//                 flexDirection='column'
//                 alignItems='center'>
//                     <Typography variant='h3'>{startTimer ? minutes : 15}</Typography>
//                     <Typography variant='h6'>minutes</Typography>
//                 </Box>
//                 <Typography variant='h3'>:</Typography>
//                 <Box
//                 display='flex'
//                 flexDirection='column'
//                 alignItems='center'>
//                     <Typography variant='h3'>{startTimer ? seconds : 0}</Typography>
//                     <Typography variant='h6'>seconds</Typography>
//                 </Box>
//             </Box>
//         )
//     }
// }



// break system modal
function BreakModal(props) {
    const { onClose, open, chkinSeat } = props;

    // on close
    const handleClose = () => {
        setStartTimer(false)
        setProgress(100)
        onClose()
    }

    // get seat info
    const [seatDet, setSeatDet] = useState([])
    useEffect(() => {
        const element = document.getElementById(String(chkinSeat.seat_id))
        const lvl = element.closest('.lvl').id
        const seat = element.value
        setSeatDet([lvl, seat])
    }, [chkinSeat])

    // timer
    const val15minms = 15 * 60 * 1000 + 2000
    const currentTime = new Date().getTime()
    const timer15 = currentTime + val15minms
    // start timer
    const [startTimer, setStartTimer] = useState(false)
    const handleSubmitStart = () => {
        setStartTimer(true)
    }
    // progress bar
    const [progress, setProgress] = useState(100)
    // updates every second
    const update = () => {
        const later = new Date(timer15).getTime()
        const now = new Date().getTime()
        const countdown = later - now
        const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
        return [minutes, seconds, countdown/val15minms*100]
    }
    const [timer, setTimer] = useState([])
    let intTimer
    useEffect(() => {
        if (setStartTimer) {
            // intTimer = setInterval(() => {
            //     setTimer([update()[0], update()[1]])
            //     setProgress(update()[2])
            // }, 1000)
        }
        return () => clearInterval(intTimer)
    }, [])
    // issue of overlapping timers



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
                marginTop: '1.5rem',
            }}>
                <Typography variant='h5'>Level {seatDet[0]}</Typography>
                <Typography variant='h4'>{seatDet[1]}</Typography>
            </div>

            <DialogTitle sx={{textAlign:'center'}}>
                Breaks last for <span style={{fontWeight:'bold'}}>15</span> minutes
            </DialogTitle>


            {/* timer */}
            <Box
            id='timer'
            display='flex'
            flexDirection='column'
            alignItems='center'
            marginTop='1rem'
            >
                <div
                style={{
                    position: 'relative',
                    borderRadius: '50%',
                    width: '20rem',
                    height: '20rem',
                    background: `radial-gradient(closest-side, white 90.2%, transparent 91% 100%), conic-gradient(rgb(0, 133, 255) ${progress}%, rgba(0, 133, 255, 0.5) 0)`
                }}>
                    <div
                    style={{
                        position: 'absolute',
                        transform: 'translate(31%, 130%)',
                    }}>
                        {/* <CountdownTimer targetDate={timer15} startTimer={startTimer} /> */}
                        <Box 
                        display='flex'
                        gap='1rem'
                        >
                            <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'>
                                <Typography variant='h3'>{startTimer ? timer[0] : 15}</Typography>
                                <Typography variant='h6'>minutes</Typography>
                            </Box>
                            <Typography variant='h3'>:</Typography>
                            <Box
                            display='flex'
                            flexDirection='column'
                            alignItems='center'>
                                <Typography variant='h3'>{startTimer ? timer[1] : 0}</Typography>
                                <Typography variant='h6'>seconds</Typography>
                            </Box>
                        </Box>
                    </div>
                </div>
            </Box>


            {/* button */}
            <Button
            onClick={handleSubmitStart}
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

        </Dialog>
    )
}

BreakModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default function Break({open, onClose, chkinSeat}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <BreakModal
        open={open}
        onClose={handleClose()}
        chkinSeat={chkinSeat}
        />
        </>
  );
}