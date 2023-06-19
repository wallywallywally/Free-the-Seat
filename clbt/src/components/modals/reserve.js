import '../styles.css'
import {useState} from "react"

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
// timetable + timings don't line up - add another and hide visibility or smth
function ReserveModal(props) {
    const {
        onClose, open, 
        seatDet, 
        ttCol,
        setResDet, resDet, 
        slot, tobeOcc, 
        full,
        resToDel, delMod, setDelMod,
        userID,
    } = props
    // expressions
    const res = resDet.length !== 0

    const ourReservations = []
    for (var reservation of resDet) {
        ourReservations.push(reservation[0])
    }
    const resISseat = ourReservations.includes(Number(seatDet[2]))
    
    const alrOcc = tobeOcc.includes(Number(seatDet[2]))
    const noslotSelected = slot[1].length === 0

    // on close
    const handleClose = () => {
        // reset
        setDelMod(false)
        onClose()
    }

    // timetable displays selected slot during reservation
    if (!alrOcc && !resISseat) {
        for (var key of slot[1]) {
            ttCol[key] = 'tt-res'
        }
    }
    
    // [DB int]
    // after creation/deletion in DB, we probably need to process Main's resDet again
    // so [FRONTEND] stuff will be modified
    // useState for a DB CRUD - affects Main's useEffect

    // CREATE reservation
    const handleSubmitCreate = async () => {
        // this entry is to be pushed to DB
        // for frontend testing purposes
        const fakeID = Math.floor(Math.random() * 10)
        const resToPush = [Number(seatDet[2]), slot[0].slice(0,4), slot[0].slice(7,11), userID] //seat id, start time, end time, user id
        // [FRONTEND] pushes it to resDet
        // pushed with no reservation id tho
        // const { data, error } = await supabase
        // .from('reservations')
        // .insert({seat_id: seatDet[2], user_id: user.id, start_time: slot[0].slice(0,4), end_time: slot[0].slice(7,11)})
        // .select()
        // const newRD = [...resDet, data]
        // setResDet(newRD)

        handleClose()
    }

    console.log(resToDel)
    // DELETE reservation
    const handleSubmitDelete = async () => {
        // resToDel has id - this entry is to be removed from DB
        // console.log(resToDel)

        // [FRONTEND] removes it from resDet
        const {error} = await supabase
        .from('reservations')
        .delete()
        .eq('id', resToDel[0])

        const resToKeep = resDet.filter((res) => res[3] !== resToDel[0])
        setResDet(resToKeep)

        setDelMod(false)
        handleClose()
    }


    // what's displayed
    return (
        <Dialog fullWidth={true} maxWidth='lg' onClose={handleClose} open={open} keepMounted>
            <DialogTitle>
            <span
            style={{
                visibility: (noslotSelected && !resISseat) || full || (alrOcc && !resISseat) ? 'collapse' : 'revert'
            }}>
                {resISseat === true ? 'You have reserved:' :'You are now reserving:'}
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

            {full && !delMod && <Typography variant='h6' sx={{textAlign:'center'}}>Fully booked for today!</Typography>}
            {!full && alrOcc && !resISseat &&
            <Typography variant='h6' sx={{textAlign:'center'}}>
                Booked for the selected time slot:<br/>{slot[0]}
            </Typography>}

            {/* {resISseat &&
            <Typography variant='h6' sx={{textAlign:'center'}}>
                Time slot:<br/>{slot[0]}
            </Typography>} */}

            {/* delete info */}
            {delMod &&
            <Typography variant='h6' sx={{textAlign:'center'}}>
                Cancel time slot:<br/>{resToDel[1]} - {resToDel[2]}
            </Typography>
            }

            {/* button */}
            <Button
            onClick={delMod ? handleSubmitDelete : handleSubmitCreate}
            variant='contained'
            disableElevation
            sx={{
                visibility: (noslotSelected && !resISseat) || (full && !delMod) || alrOcc || (resISseat && !delMod) ? 'hidden' : 'revert',
                marginTop: 5,
                borderRadius: 0,
                backgroundColor: delMod ? '#fb7979' : 'rgba(189, 0 ,255, 0.6)',
                color: '#000',
                '&:hover': {
                    backgroundColor: delMod ? 'rgba(251, 121, 121, 0.75)' : 'rgba(189, 0 ,255, 0.3)'
                },
                '&:active': {
                    backgroundColor: delMod ? '#fb7979' : 'rgba(189, 0 ,255, 0.6)'
                },
            }}>
                {delMod ? 'Cancel' : 'Reserve'}
            </Button>

        </Dialog>
    )
}

ReserveModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

// main
export default function Reserve({open, onClose, 
    seatDet, 
    ttCol, 
    setResDet, resDet, 
    slot, tobeOcc, 
    full, 
    resToDel, delMod, setDelMod,
    userID}) 
    {
        const handleClose = () => () => onClose()

        return (
            <>
            <ReserveModal
            open={open} onClose={handleClose()}
            seatDet={seatDet}
            ttCol={ttCol}
            setResDet={setResDet} resDet={resDet}
            slot={slot} tobeOcc={tobeOcc}
            full={full}
            resToDel={resToDel} delMod={delMod} setDelMod={setDelMod}
            userID={userID}
            />
            </>
        );
}