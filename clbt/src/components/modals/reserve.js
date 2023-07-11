import '../styles.css'
import { timeToID } from '../main'

// mui
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import { supabase } from '../../supabase'



// reservation system modal
// ! to fix styling
// timetable + timings don't line up when window is minimised - add another and hide visibility or smth
function ReserveModal(props) {
    const {
        onClose, open, 
        seatDet,
        ttCol,
        checkRes, ourResIDs, resDet, 
        slot, resetSelect, tobeOcc, 
        full,
        resToDel, delMod, setDelMod,
        userResSlotBool,
        userID,
    } = props

    // expressions
    const ourReservationsSeats = []
    for (var reservationD of resDet) {
        ourReservationsSeats.push(reservationD[0])
    }
    const resISseat = ourReservationsSeats.includes(Number(seatDet[2]))
    
    const alrOcc = tobeOcc.includes(Number(seatDet[2]))
    const noslotSelected = slot[1].length === 0

    // check that slot is the same time as our reservations for that seat
    const res4seat = resDet.filter((res) => res[0] === Number(seatDet[2]))
    const res4seatSlots = []
    for (var reservation of res4seat) {
        const ourResSlots = []
        timeToID(reservation[1], reservation[2], ourResSlots)
        res4seatSlots.push(...ourResSlots)
    }
    let slotISseatres = false
    for (var thisSlot of slot[1]) {
        slotISseatres = res4seatSlots.includes(thisSlot)
        if (slotISseatres) break
    }

    // expressions for DOM elements
    const headerExp = !delMod && 
        (noslotSelected || full || userResSlotBool || alrOcc)
        ? 'collapse' : 'revert'
    const buttonExp = !delMod && 
        (noslotSelected || full || slotISseatres || userResSlotBool || alrOcc)
        ? 'hidden' : 'revert'

    // on close
    const handleClose = () => {
        // reset
        setDelMod(false)
        onClose()
    }

    // timetable displays selected slot during reservation
    // black border to differentiate from existing reservations
    if (!alrOcc && !userResSlotBool && !delMod) {
        if (slot[1].length === 1) {
            ttCol[slot[1][0]] = 'tt-res tt-resB'
        } else {
            ttCol[slot[1][0]] = 'tt-res tt-resB-L'
            ttCol[slot[1][1]] = 'tt-res tt-resB-R'
        }
    }
    // same for cancelling
    if (delMod) {
        const delID = []
        timeToID(resToDel[1], resToDel[2], delID)
        if (delID.length === 1) {
            ttCol[delID[0]] = 'tt-res tt-resB'
        } else {
            ttCol[delID[0]] = 'tt-res tt-resB-L'
            ttCol[delID[1]] = 'tt-res tt-resB-R'
        }
    }
    
    // DB CRUD
    // CREATE reservation
    const handleSubmitCreate = async () => {
        const { data, error } = await supabase 
            .from('reservations')
            .insert({seat_id: seatDet[2], user_id: userID, start_time: slot[0].slice(0,4), end_time: slot[0].slice(7,11)})
            .select()
    
        handleClose()
        resetSelect[0]('')
        resetSelect[1]('')
        resetSelect[2](true)
        // query DB
        checkRes[1](!checkRes[0])
    }
    // DELETE reservation
    const handleSubmitDelete = async () => {
        const {error} = await supabase
            .from('reservations')
            .delete()
            .eq('id', resToDel[0])

        ourResIDs[1](ourResIDs[0].filter((id) => id !== resToDel[0]))

        setDelMod(false)
        handleClose()
        // query DB
        checkRes[1](!checkRes[0])
    }



    // what's displayed
    return (
        <Dialog fullWidth={true} maxWidth='lg' onClose={handleClose} open={open} keepMounted>
            <DialogTitle>
            <span
            style={{
                visibility: headerExp
            }}>
                {delMod ? 'You have reserved:' :'You are now reserving:'}
            </span>
            </DialogTitle>

            <div
            id='seat-num'
            style={{
                width: '7rem',
                border: '1px solid #000',
                textAlign: 'center',
                margin: '0 auto',
                padding: '4px 0'
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

            {/* full */}
            {!delMod && full && <Typography variant='h6' sx={{textAlign:'center'}}>Fully reserved for today!</Typography>}

            {/* occupied */}
            {!delMod && !full && alrOcc && 
            <Typography variant='h6' sx={{textAlign:'center'}}>
                Reserved for the selected slot:<br/>{slot[0]}
            </Typography>}

            {/* reserve current slot */}
            {!delMod && !full && !alrOcc && !noslotSelected && !userResSlotBool &&
            <Typography variant='h6' sx={{textAlign:'center'}}>
                Time slot:<br/>{slot[0]}
            </Typography>}

            {/* reserved slots */}
            {!delMod && resISseat && noslotSelected && 
            <>
                <Typography variant='h6' sx={{textAlign:'center'}} marginTop={full ? 2.5 : 0} marginBottom={0.5}>
                    You have reserved this seat for the following slots:<br/>{slot[0]}
                </Typography>
                {res4seat.map((res, i) => (
                    <Typography key={i} variant='h6' sx={{textAlign:'center'}}>
                        {res[1]} - {res[2]}
                    </Typography>
                ))}
            </>
            }

            {/* delete info */}
            {delMod &&
            <Typography variant='h6' sx={{textAlign:'center'}}>
                Cancel slot:<br/>{resToDel[1]} - {resToDel[2]}
            </Typography>
            }

            {/* button */}
            <Button
            onClick={delMod ? handleSubmitDelete : handleSubmitCreate}
            variant='contained'
            disableElevation
            sx={{
                visibility: buttonExp,
                marginTop: 5,
                borderRadius: 0,
                backgroundColor: delMod ? '#fb7979' : 'rgba(189, 0 ,255, 0.55)',
                color: '#000',
                '&:hover': {
                    backgroundColor: delMod ? 'rgba(251, 121, 121, 0.75)' : 'rgba(189, 0 ,255, 0.3)'
                },
                '&:active': {
                    backgroundColor: delMod ? '#fb7979' : 'rgba(189, 0 ,255, 0.55)'
                },
            }}>
                {delMod ? 'Delete reservation' : 'Reserve slot'}
            </Button>

        </Dialog>
    )
}

ReserveModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default function Reserve({
    open, onClose, 
    seatDet, 
    ttCol, 
    checkRes, ourResIDs, resDet, 
    slot, resetSelect, tobeOcc, 
    full, 
    resToDel, delMod, setDelMod,
    userResSlotBool, userID})  
    {
        const handleClose = () => () => onClose()

        return (
            <>
            <ReserveModal
            open={open} onClose={handleClose()}
            seatDet={seatDet}
            ttCol={ttCol}
            checkRes={checkRes} ourResIDs={ourResIDs} resDet={resDet}
            slot={slot} resetSelect={resetSelect} tobeOcc={tobeOcc}
            full={full}
            resToDel={resToDel} delMod={delMod} setDelMod={setDelMod}
            userResSlotBool={userResSlotBool}
            userID={userID}
            />
            </>
        );
}