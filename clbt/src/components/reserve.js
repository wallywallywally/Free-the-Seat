import { useState } from 'react'
import './styles.css'

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


// simple dialog modal for reservations
// ! to fix
// timetable + timings don't line up responsively
function ReserveModal(props) {
    // custom props
    const { onClose, selectedValue, open } = props;

    // modal functions
    const handleClose = () => {
        onClose(selectedValue);
    }

    // time slot select
    // 1. duration
    const [dur, setDur] = useState()
    const handleChangeDur = (event) => {
        setDur(event.target.value)
    }
    // 2. time slot
    const [slot, setSlot] = useState()
    const handleChangeSlot = (event) => {
        setSlot(event.target.value)
    } 

    // this is what is displayed in the modal
    return (
        <Dialog fullWidth={true} maxWidth='lg' onClose={handleClose} open={open}>
            <DialogTitle>You are now reserving:</DialogTitle>

            <div
            id='seat-num'
            style={{
                width: '7rem',
                border: '1px solid #000',
                textAlign: 'center',
                margin: '0 auto'
            }}>
                <Typography variant='h5'>Level 3</Typography>
                <Typography variant='h4'>21</Typography>
            </div>

            {/* timetable */}
            <Box
            sx={{
                display: 'flex',
                flex: '1 1 auto',
                justifyContent: 'center',
                margin: '0 auto'
            }}
            className='tt'>
                <p id='91' className='tt-emp'></p>
                <p id='92' className='tt-emp'></p>
                <p id='101' className='tt-occ'></p>
                <p id='102' className='tt-occ'></p>
                <p id='111' className='tt-emp'></p>
                <p id='112' className='tt-emp'></p>
                <p id='121' className='tt-occ'></p>
                <p id='122' className='tt-occ'></p>
                <p id='131' className='tt-emp'></p>
                <p id='132' className='tt-emp'></p>
                <p id='141' className='tt-occ'></p>
                <p id='142' className='tt-occ'></p>
                <p id='151' className='tt-occ'></p>
                <p id='152' className='tt-occ'></p>
                <p id='161' className='tt-emp'></p>
                <p id='162' className='tt-emp'></p>
                <p id='171' className='tt-occ'></p>
                <p id='172' className='tt-occ'></p>
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
                <FormControl sx={{width: 170}}>
                    <InputLabel id="time-dur-label">Duration</InputLabel>
                    <Select
                        labelId="time-dur-label"
                        id="time-dur"
                        value={dur}
                        label="Duration"
                        onChange={handleChangeDur}
                    >
                        <MenuItem value={1}>30 min</MenuItem>
                        <MenuItem value={2}>1 hour</MenuItem>
                    </Select>
                </FormControl>

                {/* guess i can do different forms/values ? */}
                <FormControl sx={{width: 170}}>
                    <InputLabel id="time-slot-label">Time</InputLabel>
                    <Select
                        labelId="time-slot-label"
                        id="time-slot"
                        value={slot}
                        label="Time"
                        onChange={handleChangeSlot}
                    >
                        {/* 30 min slots */}
                        <MenuItem value={91}>0900 - 0930</MenuItem>
                        <MenuItem value={92}>0930 - 1000</MenuItem>
                        <MenuItem value={101}>1000 - 1030</MenuItem>
                        <MenuItem value={102}>1030 - 1100</MenuItem>
                        <MenuItem value={111}>1100 - 1130</MenuItem>
                        <MenuItem value={112}>1130 - 1200</MenuItem>
                        <MenuItem value={121}>1200 - 1230</MenuItem>
                        <MenuItem value={122}>1230 - 1300</MenuItem>
                        <MenuItem value={131}>1300 - 1330</MenuItem>
                        <MenuItem value={132}>1330 - 1400</MenuItem>
                        <MenuItem value={141}>1400 - 1430</MenuItem>
                        <MenuItem value={142}>1430 - 1500</MenuItem>
                        <MenuItem value={151}>1500 - 1530</MenuItem>
                        <MenuItem value={152}>1530 - 1600</MenuItem>
                        <MenuItem value={161}>1600 - 1630</MenuItem>
                        <MenuItem value={162}>1630 - 1700</MenuItem>
                        <MenuItem value={171}>1700 - 1730</MenuItem>
                        <MenuItem value={172}>1730 - 1800</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* reserve button */}
            <Button variant='contained'
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
  selectedValue: PropTypes.string.isRequired,
}

// main
export default function Reserve({open, onClose, selectedValue}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <ReserveModal
            selectedValue={selectedValue}   // exported value from modal
            open={open}
            onClose={handleClose()}
        />
        </>
  );
}