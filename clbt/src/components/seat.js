// mui
import {createTheme, styled} from '@mui/material/styles'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

// theme
const seatClr = createTheme({
    emp: '#86e084',
    res: '#fff72c',
    occ: '#fb7979',
})

// Seat
const seatSide = 35
const SeatBtn = styled(Button)(({status}) => ({
    minWidth: seatSide,
    height: seatSide,
    padding: 0,

    backgroundColor: seatClr[status],

    borderRadius: 3,
    border: '1px solid rgba(0,0,0,0.25)',

    '&:hover':{
        backgroundColor: status === 'emp' ? 'rgba(134, 224, 132, 0.7)' : (status === 'res' ? 'rgba(255, 247, 44, 0.4)' : 'rgba(251, 121, 121, 0.7)')
    },
    '&:active':{
        backgroundColor: seatClr[status]
    }
}))

export default function Seat({status}) {
    return (
        <>
        <SeatBtn variant='contained' status={status} disableElevation />
        </>
    );
}