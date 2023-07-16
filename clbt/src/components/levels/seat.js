// mui
import {createTheme, styled} from '@mui/material/styles'
import Button from '@mui/material/Button'

// theme
const seatClr = createTheme({
    emp: '#86e084',
    occ: '#fb7979',
    ourres: '#bd00ff',
    checkin: 'rgba(0, 133, 255, 0.8)',
    stafftoclear: '#ff8e3c'
})

// Seat
const seatSide = 45
const SeatBtn = styled(Button)(({status}) => ({
    minWidth: seatSide,
    height: seatSide,
    padding: 0,

    backgroundColor: seatClr[status[0]],

    borderRadius: 3,
    border: status[1] === 'res' ? '3px solid #bd00ff' 
        : (status[1] === 'stc' ? '3px solid red'
        : '1px solid rgba(0,0,0,0.25)'),

    '&:hover':{
        backgroundColor: status[0] === 'emp' ? 'rgba(134, 224, 132, 0.7)' 
            : (status[0] === 'occ' ? 'rgba(251, 121, 121, 0.75)'
            : (status[0] === 'ourres' ? 'rgba(189, 0 ,255, 0.6)' 
            : (status[0] === 'checkin' ? 'rgba(0, 133, 255, 0.7)' 
            : 'rgba(255, 142, 60, 0.7)')))
    },
    '&:active':{
        backgroundColor: seatClr[status]
    }
}))
    
export default function Seat({value, id, status, reserve}) {
    const handleReserve = () => (event) => reserve(event)

    return (
        <>
        <SeatBtn value={value} id={id} variant='contained' status={status} disableElevation onClick={handleReserve()} />
        </>
    );
}