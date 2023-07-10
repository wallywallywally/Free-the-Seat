import '../styles.css'

// mui
import PropTypes from 'prop-types'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


// break system modal
function IntModal(props) {
    const {onClose, open} = props;

    // on close
    const handleClose = () => {
        onClose()
    }


    // what's displayed
    return (
        <Dialog fullWidth={true} maxWidth='sm' onClose={handleClose} open={open} keepMounted>
            <div
            id='seat-num'
            style={{
                border: '1px solid #000',
                textAlign: 'center',
                margin: '0 auto',
                marginTop: '1.5rem',
            }}>
                <DialogTitle sx={{fontSize:'1.4rem'}}>
                    How it works
                </DialogTitle>
            </div>

            <Typography textAlign='center' variant='h5' marginTop='1.5rem'>
                Welcome to the Central Library Tracker!
            </Typography>

            <Box className='center' marginTop='1.5rem' marginBottom='1rem'>
            <Box className='flex-col'>
                {/* reserving */}
                <Typography textAlign='center' variant='h6' marginBottom='-0.7rem'>
                    To reserve seats:
                </Typography>
                <ol>
                    <li>
                        Select a duration and time slot
                    </li>
                    <li>
                        Select a seat
                        <ul>
                            <li><span style={{color:'rgb(80, 224, 132)'}}>Green</span> are available</li>
                            <li><span style={{color:'#fb7979'}}>Red</span> are reserved by others</li>
                        </ul>
                    </li>
                    <li>
                        Reserve the selected seat
                    </li>
                    <li>
                        Multiple reservations are allowed
                        <ul>
                            <li>For the same seat, or different seats</li>
                            <li>Cannot have more than 1 reservation<br/> for each time slot</li>
                        </ul>
                    </li>
                </ol>
                {/* deleting */}
                <Typography textAlign='center' variant='h6' marginBottom='-0.7rem' marginTop='1rem'>
                    To view/delete reservations:
                </Typography>
                <ol>
                    <li>
                        On the map, reserved seats are outlined in purple
                    </li>
                    <li>
                        Click on the purple button above  to view <br/> all reservations
                    </li>
                    <li>
                        Select reservation to delete
                    </li>
                    <li>
                        Delete the reservation
                    </li>
                </ol>
            </Box>
            </Box>           

        </Dialog>
    )
}

IntModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default function Instructions({open, onClose}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <IntModal
        open={open}
        onClose={handleClose()}
        />
        </>
  );
}