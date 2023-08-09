import { useState, useEffect } from 'react'

// mui
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


export default function Timer ({startTimer, endTT, setTimerEnd, setOnBreak}) {
    const timeLeft = (countDown) => {
        const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000)
        const CD15min = 15 * 60 * 1000
        const prog = 100*countDown/CD15min
        return [minutes, seconds, prog];
    }

    const useCountdown = (timerMin) => {
        const [countDown, setCountDown] = useState(timerMin*60*1000)

        useEffect(() => {
            if (startTimer) {
                const interval = setInterval(() => {
                    setCountDown(countDown - 1000)
                }, 1000)
                return () => clearInterval(interval)
            }
        }, [countDown, startTimer,      // eslint-disable-line react-hooks/exhaustive-deps
        ])

        return timeLeft(countDown);
    }
    
    const [minutes, seconds, progress] = useCountdown(15)
    console.log(minutes, seconds)

    useEffect(() => {
        if (minutes + seconds > 0) {
            setTimerEnd(false)
        } else {
            // break done
            setTimerEnd(true)
            setOnBreak(false)
        }
    }, [minutes, seconds, setOnBreak, setTimerEnd])

    return (
        <>
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
                <Box 
                display='flex'
                gap='1rem'
                >
                    <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'>
                        <Typography variant='h3'>{minutes}</Typography>
                        <Typography variant='h6'>minutes</Typography>
                    </Box>
                    <Typography variant='h3'>:</Typography>
                    <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='center'>
                        <Typography variant='h3'>{seconds}</Typography>
                        <Typography variant='h6'>seconds</Typography>
                    </Box>
                </Box>
            </div>
        </div>
        </>
    )
}