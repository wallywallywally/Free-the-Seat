import { useState } from 'react'
import '../styles.css'

// mui
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// info for timetable
const timetable = [91, 92, 101, 102, 111, 112, 121, 122, 131, 132, 141, 142, 151, 152, 161, 162, 171, 172]
const timeslots30 = {
    91: '0900 - 0930', 
    92: '0930 - 1000', 
    101: '1000 - 1030', 
    102: '1030 - 1100', 
    111: '1100 - 1130', 
    112: '1130 - 1200', 
    121: '1200 - 1230', 
    122: '1230 - 1300', 
    131: '1300 - 1330', 
    132: '1330 - 1400', 
    141: '1400 - 1430', 
    142: '1430 - 1500', 
    151: '1500 - 1530', 
    152: '1530 - 1600', 
    161: '1600 - 1630', 
    162: '1630 - 1700',
    171: '1700 - 1730', 
    172: '1730 - 1800', 
}
const timeslots60 = {
    91: '0900 - 1000', 
    92: '0930 - 1030', 
    101: '1000 - 1100', 
    102: '1030 - 1130', 
    111: '1100 - 1200', 
    112: '1130 - 1230', 
    121: '1200 - 1300', 
    122: '1230 - 1330', 
    131: '1300 - 1400', 
    132: '1330 - 1430', 
    141: '1400 - 1500', 
    142: '1430 - 1530', 
    151: '1500 - 1600', 
    152: '1530 - 1630', 
    161: '1600 - 1700', 
    162: '1630 - 1730', 
    171: '1700 - 1800', 
}

// reservation system modal
// ! to fix
// timetable + timings don't line up - add another and hide visibility or smth
function ReserveModal(props) {
    const { onClose, open, seatInfo, ttCol, ttColpre, setResDet, res } = props;

    // on close
    const handleClose = () => {
        // reset
        setDur('')
        setSlot('')
        setSlotDis(true)
        setAvaslots([])
        onClose()
    }

    // selects
    // 1. duration
    const [dur, setDur] = useState('')
    const [avaslots, setAvaslots] = useState([])
    const [slotDis, setSlotDis] = useState(true)
    const handleChangeDur = (event) => {
        setDur(event.target.value)

        // reset
        setSlot('')
        setSlotDis(false)
        Object.assign(ttCol, ttColpre)

        // get available time slots
        setAvaslots(Object.keys(ttCol).filter(key => ttCol[key] !== 'tt-occ'))
    }
    // process avaslots for rendering time slots
    const avaslotsfin = []
    if (dur === 60) {
        // 1 hr
        // each checks if the next one exists in the list
        for (var element60 of avaslots) {
            const index = timetable.indexOf(Number(element60))
            if (avaslots.includes(String(timetable[index+1]))) avaslotsfin.push(timeslots60[element60])
        }
    } else {
        // 30 min
        for (var element30 of avaslots) avaslotsfin.push(timeslots30[element30])
    }

    // 2. time slot
    const [slot, setSlot] = useState('')
    const handleChangeSlot = (event) => {
        setSlot(event.target.value)

        // update timetable based on selected timeslot
        // reset
        Object.assign(ttCol, ttColpre)

        // update
        if (dur === 60) {
            // 1 hr
            const key1 = Number(Object.keys(timeslots60).filter(key => timeslots60[key] === event.target.value)[0])
            const index = timetable.indexOf(key1)
            const key2 = timetable[index+1]
            ttCol[key1] = 'tt-res'
            ttCol[key2] = 'tt-res'
        } else {
            // 30 min
            const key = Number(Object.keys(timeslots30).filter(key => timeslots30[key] === event.target.value)[0])
            ttCol[key] = 'tt-res'
        }
    }

    // buttons
    // [DB int] CREATE reservation
    const handleSubmitCreate = (event) => {
        const resDet = [Number(seatInfo[2]), slot.slice(0, 4), slot.slice(7, 12)]
        setResDet(resDet)
        
        handleClose()
    }

    // [DB int] DELETE reservation
    // for delete modal window
    // setResDet([])

    // ! for delete and seat info we conditionally render


    // what's displayed
    return (
        <Dialog fullWidth={true} maxWidth='lg' onClose={handleClose} open={open} keepMounted>
            <DialogTitle>You are now reserving:</DialogTitle>

            <div
            id='seat-num'
            style={{
                width: '7rem',
                border: '1px solid #000',
                textAlign: 'center',
                margin: '0 auto'
            }}>
                <Typography variant='h5'>Level {seatInfo[0]}</Typography>
                <Typography variant='h4'>{seatInfo[1]}</Typography>
            </div>

            {/* timetable */}
            <Box
            sx={{
                display: 'flex',
                flex: '1 1 auto',
                justifyContent: 'center',
                margin: '0 auto'
            }}
            className='tt'
            >
                <p id='91' className={ttCol[91]}></p>
                <p id='92' className={ttCol[92]}></p>
                <p id='101' className={ttCol[101]}></p>
                <p id='102' className={ttCol[102]}></p>
                <p id='111' className={ttCol[111]}></p>
                <p id='112' className={ttCol[112]}></p>
                <p id='121' className={ttCol[121]}></p>
                <p id='122' className={ttCol[122]}></p>
                <p id='131' className={ttCol[131]}></p>
                <p id='132' className={ttCol[132]}></p>
                <p id='141' className={ttCol[141]}></p>
                <p id='142' className={ttCol[142]}></p>
                <p id='151' className={ttCol[151]}></p>
                <p id='152' className={ttCol[152]}></p>
                <p id='161' className={ttCol[161]}></p>
                <p id='162' className={ttCol[162]}></p>
                <p id='171' className={ttCol[171]}></p>
                <p id='172' className={ttCol[172]}></p>
            </Box>
            <Box
            sx={{
                display: 'flex',
                flex: '1 1 auto',
                justifyContent: 'center',
                gap: '50px',
                margin: '-30px auto 0',
                // minWidth: '500px'
            }}>
                <p>0900</p>
                <p>1000</p>
                <p>1100</p>
                <p>1200</p>
                <p>1300</p>
                <p>1400</p>
                <p>1500</p>
                <p>1600</p>
                <p>1700</p>
                <p>1800</p>
            </Box>

            {/* time slot select */}
            <Typography variant='h6' sx={{textAlign:'center'}}>Time slot:</Typography>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                marginTop: 2,
            }}
            >
                <FormControl sx={{width: 170}} required>
                    <InputLabel id="time-dur-label">Duration</InputLabel>
                    <Select
                        labelId="time-dur-label"
                        id="time-dur"
                        value={dur}
                        label="Duration"
                        onChange={handleChangeDur}
                    >
                        <MenuItem value={30}>30 min</MenuItem>
                        <MenuItem value={60}>1 hour</MenuItem>
                    </Select>
                </FormControl>           

                <FormControl sx={{width: 170}} disabled={slotDis}>
                    <InputLabel id="time-slot-label">Time</InputLabel>
                    <Select
                        labelId="time-slot-label"
                        id="time-slot"
                        value={slot}
                        label="Time"
                        onChange={handleChangeSlot}
                    >
                        {avaslotsfin.map((ele) => (
                            <MenuItem key={avaslotsfin.indexOf(ele)} value={ele}>{ele}</MenuItem>
                        ))}

                    </Select>
                </FormControl>
            </Box>

            {/* reserve button */}
            <Button 
            onClick={handleSubmitCreate}
            variant='contained'
            disableElevation
            sx={{
                marginTop: 5,
                borderRadius: 0,
                backgroundColor: '#e7be95',
                color: '#000',
                '&:hover': {
                    backgroundColor: 'rgba(231, 190, 149, 0.75)'
                },
                '&:active': {
                    backgroundColor: '#e7be95'
                },
            }}>
                Reserve
            </Button>

        </Dialog>
    )
}

ReserveModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

// main
export default function Reserve({open, onClose, seatInfo, ttCol, ttColpre, setResDet, res}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <ReserveModal
        open={open}
        onClose={handleClose()}
        seatInfo={seatInfo}
        ttCol={ttCol}
        ttColpre={ttColpre}
        setResDet={setResDet}
        res={res}
        />
        </>
  );
}