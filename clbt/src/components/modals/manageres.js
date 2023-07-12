import '../styles.css'
import { useEffect, useState } from 'react'
import { timeToID } from '../main'

// mui
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'


// break system modal
function ManageModal(props) {
    const {onClose, open, resDet, handleResOpen, setDelMod} = props;

    // on close
    const handleClose = () => {
        onClose()
    }

    // processing details of resDet
    const [resToShow, setResToShow] = useState([])
    useEffect(() => {
        const reservations = []
        for (var res of resDet) {
            const element = document.getElementById(String(res[0]))
            const lvl = element.closest('.lvl').id
            const seat = element.value
            const resSlotSort = []
            timeToID(res[1], res[2], resSlotSort)
            reservations.push([lvl, seat, ...res, resSlotSort[0]])
        }
        // sort by time
        const reservationsSorted = reservations.sort(function(a,b) {
            return a[6] - b[6]
        })
        setResToShow(reservationsSorted)
    }, [resDet])

    // click to cancel selected res
    const handleCancel = (event) => {
        setDelMod(true)
        handleClose()
        handleResOpen(event)
    }


    // what's displayed
    return (
        <Dialog fullWidth={true} maxWidth='md' onClose={handleClose} open={open} keepMounted>
            <div
            id='seat-num'
            style={{
                border: '1px solid #000',
                textAlign: 'center',
                margin: '0 auto',
                marginTop: '1.5rem',
            }}>
                <DialogTitle sx={{fontSize:'1.4rem'}}>
                    Reservations
                </DialogTitle>
            </div>

            {/* list of reservations */}
            <Box className='center' sx={{marginTop:3}}>
            <Box className='flex-col' gap='1rem' marginBottom='2rem'>
                {resToShow.map((res, i) => {
                return(
                    <Box key={(i)}
                    display='flex'
                    alignItems='center'
                    gap='2rem'
                    sx={{
                        border: '1px solid #000',
                        padding: '1rem'    
                    }}
                    >
                        <div
                        id='seat-num'
                        style={{
                            width: '7rem',
                            border: '1px solid #000',
                            textAlign: 'center',
                            margin: '0 auto',
                            padding: '4px 0'
                        }}>
                            <Typography variant='h5'>Level {res[0]}</Typography>
                            <Typography variant='h4'>{res[1]}</Typography>
                        </div>
                        <Typography variant='body1'>
                            Reserved from {res[3]} - {res[4]}
                        </Typography>
                        <Button
                        id='delRes'
                        value={res}
                        onClick={handleCancel}
                        variant='contained'
                        disableElevation
                        sx={{
                            height: '60%',
                            borderRadius: 0,
                            backgroundColor: '#fb7979',
                            color: '#000',
                            '&:hover': {
                                backgroundColor: 'rgba(251, 121, 121, 0.75)'
                            },
                            '&:active': {
                                backgroundColor: '#fb7979'
                            }
                        }}>
                        
                            Delete
                        </Button>
                    </Box>
                    )
                })}
            </Box>
            </Box>
            

        </Dialog>
    )
}

ManageModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default function Manage({open, onClose, resDet, handleResOpen, setDelMod}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <ManageModal
        open={open}
        onClose={handleClose()}
        resDet={resDet}
        handleResOpen={handleResOpen}
        setDelMod={setDelMod}
        />
        </>
  );
}