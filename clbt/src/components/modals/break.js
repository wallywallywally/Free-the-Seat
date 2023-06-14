import '../styles.css'
import { useState } from 'react'

// mui
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


// break system modal
function BreakModal(props) {
    const { onClose, open, seatDet } = props;

    // on close
    const handleClose = () => {
        onClose()
    }

    // buttons
    // start
    const handleSubmitStart = () => {
        console.log('go !')
    }

    // use state to constantly re-render circle for visual feedback




    // what's displayed
    return (
        <Dialog fullWidth={true} maxWidth='lg' onClose={handleClose} open={open} keepMounted>
            <div
            id='seat-num'
            style={{
                width: '7rem',
                border: '1px solid #000',
                textAlign: 'center',
                margin: '0 auto',
                marginTop: '1.5rem'
            }}>
                <Typography variant='h5'>Level {seatDet[0]}</Typography>
                <Typography variant='h4'>{seatDet[1]}</Typography>
            </div>

            <DialogTitle sx={{textAlign:'center'}}>
                Breaks last for <span style={{fontWeight:'bold'}}>15</span> minutes
            </DialogTitle>

            {/* timer */}
            <Box
            display='flex'
            justifyContent='center'
            >
                <p>test hehe</p>
            </Box>

            {/* button */}
            <Button
            onClick={handleSubmitStart}
            variant='contained'
            disableElevation
            sx={{
                marginTop: 5,
                borderRadius: 0,
                backgroundColor: '#e7be95',
                color: '#000',
                '&:hover': {backgroundColor: 'rgba(231, 190, 149, 0.7)'},
                '&:active': {backgroundColor: '#e7be95'},
            }}>
                Start break timer
            </Button>

        </Dialog>
    )
}

BreakModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

// main
export default function Break({open, onClose, seatDet}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <BreakModal
        open={open}
        onClose={handleClose()}
        seatDet={seatDet}
        />
        </>
  );
}