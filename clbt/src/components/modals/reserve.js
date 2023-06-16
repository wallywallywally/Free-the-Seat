import '../styles.css'

// mui
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


// reservation system modal
// ! to fix styling
// timetable + timings don't line up - add another and hide visibility or smth
function ReserveModal(props) {
    const {
        onClose, open, 
        seatDet, 
        ttCol,
        setResDet, resDet, 
        slot, tobeOcc, 
        full 
    } = props

    // expressions
    const res = resDet.length !== 0
    const resISseat = resDet[0] === Number(seatDet[2])
    const alrOcc = tobeOcc.includes(Number(seatDet[2]))
    const noslotSelected = slot[1].length === 0

    // on close
    const handleClose = () => {
        // reset
        onClose()
    }

    // timetable displays selected slot
    if (!alrOcc && !res) {
        for (var key of slot[1]) {
            ttCol[key] = 'tt-res'
        }
    }
    
    // buttons
    // [DB int] CREATE reservation
    const handleSubmitCreate = () => {
        const resDet = [Number(seatDet[2]), slot[0].slice(0,4), slot[0].slice(7,12)]
        setResDet(resDet)
        // this entry is pushed to DB
        handleClose()
    }
    // [DB int] DELETE reservation
    const handleSubmitDelete = () => {
        setResDet([])
        // this entry is removed from DB
        handleClose()
    }


    // what's displayed
    return (
        <Dialog fullWidth={true} maxWidth='lg' onClose={handleClose} open={open} keepMounted>
            <DialogTitle>
            <span
            style={{
                visibility: (res && !resISseat) || full || alrOcc || (noslotSelected && !res) ? 'collapse' : 'revert'
            }}>
                {res === true ? 'You have reserved:' :'You are now reserving:'}
            </span>
            </DialogTitle>

            <div
            id='seat-num'
            style={{
                width: '7rem',
                border: '1px solid #000',
                textAlign: 'center',
                margin: '0 auto'
            }}>
                <Typography variant='h5'>Level {seatDet[0]}</Typography>
                <Typography variant='h4'>{seatDet[1]}</Typography>
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

            {full && <Typography variant='h6' sx={{textAlign:'center'}}>Fully booked for today!</Typography>}
            {!res && noslotSelected && <Typography variant='h6' sx={{textAlign:'center'}}>Select a duration and time to start reserving</Typography>}
            {!full && alrOcc && <Typography variant='h6' sx={{textAlign:'center'}}>Booked for the selected time slot</Typography>}

            {/* delete info */}
            {res && resISseat ?
            <>
            <Typography variant='h6' sx={{textAlign:'center'}}>Time slot:</Typography>
            <Box
            display='flex'
            justifyContent='center'
            >
                <Typography 
                variant='h6' 
                sx={{
                    textAlign:'center', 
                    border:'1px solid black',
                    width: '12rem',
                }}>
                    {resDet[1]} - {resDet[2]}
                </Typography>
            </Box>
            </>
            : <></>
            }

            {/* button */}
            {/* no reservation - CREATE / yes reservation + correct seat - DELETE */}
            <Button
            onClick={res ? handleSubmitDelete : handleSubmitCreate}
            variant='contained'
            disableElevation
            sx={{
                visibility: (res && !resISseat) || full || alrOcc || (noslotSelected && !res) ? 'hidden' : 'revert',
                marginTop: 5,
                borderRadius: 0,
                backgroundColor: res ? '#fb7979' : 'rgba(189, 0 ,255, 0.6)',
                color: '#000',
                '&:hover': {
                    backgroundColor: res ? 'rgba(251, 121, 121, 0.75)' : 'rgba(189, 0 ,255, 0.3)'
                },
                '&:active': {
                    backgroundColor: res ? '#fb7979' : 'rgba(189, 0 ,255, 0.6)'
                },
            }}>
                {res ? 'Cancel' : 'Reserve'}
            </Button>

        </Dialog>
    )
}

ReserveModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

// main
export default function Reserve({open, onClose, seatDet, ttCol, setResDet, resDet, slot, tobeOcc, full}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <ReserveModal
        open={open}
        onClose={handleClose()}
        seatDet={seatDet}
        ttCol={ttCol}
        setResDet={setResDet}
        resDet={resDet}
        slot={slot}
        tobeOcc={tobeOcc}
        full={full}
        />
        </>
  );
}