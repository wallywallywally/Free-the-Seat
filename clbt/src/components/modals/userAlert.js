import '../styles.css'
import { useState, useEffect } from 'react'

// mui
import PropTypes from 'prop-types'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'


// user alert modal
// 1. reservation is done (after check in)
// 2. reservation is deleted (no check in)
function UAModal(props) {
    const { onClose, open, UAseat } = props;

    // on close
    const handleClose = () => {
        onClose()
    }

    // get seat info
    const [seatDet, setSeatDet] = useState([])
    useEffect(() => {
        if (UAseat !== undefined) {
            const element = document.getElementById(String(UAseat))
            if (element !== null) {
                const lvl = element.closest('.lvl').id
                const seat = element.value
                setSeatDet([lvl, seat])
            }
        }
    }, [UAseat])
    
    // what's displayed
    return (
        <Dialog fullWidth={true} maxWidth='sm' onClose={handleClose} open={open} keepMounted>
            <div
            id='seat-num'
            style={{
                width: '7rem',
                border: '1px solid #000',
                textAlign: 'center',
                margin: '0 auto',
                padding: '4px 0',
                marginTop: '1.5rem',
            }}>
                <Typography variant='h5'>Level {seatDet[0]}</Typography>
                <Typography variant='h4'>{seatDet[1]}</Typography>
            </div>
            <DialogTitle sx={{textAlign:'center', marginBottom:'1rem'}}>
                Your reservation has ended
            </DialogTitle>
        </Dialog>
    )
}

UAModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default function UserAlert({open, onClose, UAseat}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <UAModal
        open={open}
        onClose={handleClose()}
        UAseat={UAseat}
        />
        </>
  );
}