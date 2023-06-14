// mui
import {createTheme, styled} from '@mui/material/styles'
import Button from '@mui/material/Button'

// theme
const seatClr = createTheme({
    emp: '#86e084',
    res: '#fff72c',
    occ: '#fb7979',
    ourres: '#bd00ff',
    chkin: '#0085ff'
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
        backgroundColor: status === 'emp' ? 'rgba(134, 224, 132, 0.7)' 
            : (status === 'res' ? 'rgba(255, 247, 44, 0.4)' 
            : (status === 'occ' ? 'rgba(251, 121, 121, 0.75)'
            : (status === 'ourres' ? 'rgba(189, 0 ,255, 0.6)' 
            : 'rgba(0, 133, 255, 0.7)')))
    },
    '&:active':{
        backgroundColor: seatClr[status]
    }
}))

export default function Seat({status, reserve, id}) {
    const handleReserve = () => (event) => reserve(event)

    return (
        <>
        <SeatBtn id={id} variant='contained' status={status} disableElevation onClick={handleReserve()} />
        </>
    );
}