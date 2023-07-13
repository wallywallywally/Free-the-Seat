import { useState, useEffect } from 'react'

// mui
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'

export default function Timer ({targetDate, startTimer, setTimerEnd, setOnBreak}) {
    const timeLeft = (countDown) => {
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
        const CD15min = 15 * 60 * 1000
        // const prog = 100*countDown/CD15min
        const prog = 100*countDown/3000
        return [minutes, seconds, prog];
    }
    const useCountdown = (targetDate, startTimer) => {
        const countDownDate = new Date(targetDate).getTime()
        const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

        useEffect(() => {
            if (startTimer) {
                const interval = setInterval(() => {
                    setCountDown(countDownDate - new Date().getTime());
                }, 1000);
                return () => clearInterval(interval)
            }
        }, [countDownDate])

        return timeLeft(countDown);
    }

    const [minutes, seconds, progress] = useCountdown(targetDate, startTimer)

    // wack fix for constant timer running - i get a warning
    // wrap in useEffect to remove warning ?
    if (minutes + seconds > 0) {
        setTimerEnd(false)
    } else {
        // ! done
        // indicate that it can be cleared
        setTimerEnd(true)
        setOnBreak(false)
    }

    return (
        <>
        <div
        style={{
            position: 'relative',
            borderRadius: '50%',
            width: '20rem',
            height: '20rem',
            background: `radial-gradient(closest-side, white 90.2%, transparent 91% 100%), conic-gradient(rgb(0, 133, 255) ${startTimer ? progress : 100}%, rgba(0, 133, 255, 0.5) 0)`
        }}>
            <div
            style={{
                position: 'absolute',
                transform: 'translate(31%, 130%)',
            }}>
                <Box 
                display='flex'
                gap='1rem'
                >
                    <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'>
                        <Typography variant='h3'>{startTimer ? minutes : 15}</Typography>
                        <Typography variant='h6'>minutes</Typography>
                    </Box>
                    <Typography variant='h3'>:</Typography>
                    <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'>
                        <Typography variant='h3'>{startTimer ? seconds : 0}</Typography>
                        <Typography variant='h6'>seconds</Typography>
                    </Box>
                </Box>
            </div>
        </div>
        </>
    )
}