import '../styles.css'
import { useState, useEffect } from 'react'

// mui
import PropTypes from 'prop-types'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { supabase } from '../../supabase'



// staff alert tray modal
function SAModal(props) {
    const { onClose, open, seatsToClear, checkSTC } = props;

    // on close
    const handleClose = () => {
        onClose()
    }
    // console.log(seatsToClear)
    // ! TO FIX
    // processing details of seatsToClear
    const [STCtoshow, setSTCtoshow] = useState([])
    console.log(seatsToClear)
    useEffect(() => {
        const STClist = []
        if (seatsToClear.length !== 0) {
            for (var stc of seatsToClear) {
                // const element = document.getElementById(String(stc.seat_id))
                // const lvl = element.closest('.lvl').id
                // const seat = element.value
                const hogTime = stc.created_at.slice(11,13) + stc.created_at.slice(14,16)
                // STClist.push([stc.id, lvl, seat, stc.seat_id, hogTime])
            }
        }
        // sort by time
        const STClistSorted = STClist.sort(function(a,b) {
            return Number(a[3]) - Number(b[3])
        })
        setSTCtoshow(STClist)
    }, [seatsToClear])

    // DB CRUD
    // DELETE seatToClear
    const handleCleared = async () => {
        const STCid = Number(document.getElementById('delSTC').value)
        const {error} = await supabase
            .from('seats_to_clear')
            .delete()
            .eq('id', STCid)

        // query DB
        checkSTC[1](!checkSTC[0])
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
                    Seats to clear
                </DialogTitle>
            </div>

            {/* list of seats to clear */}
            <Box className='center' sx={{marginTop:3}}>
            <Box className='flex-col' gap='1rem' marginBottom='2rem'>
                {seatsToClear.length === 0 ?
                    <Typography variant='h6'>
                        Nothing to clear!
                    </Typography>
                :
                    STCtoshow.map((stc, i) => {
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
                                <Typography variant='h5'>Level {stc[1]}</Typography>
                                <Typography variant='h4'>{stc[2]}</Typography>
                            </div>
                            <Typography variant='body1'>
                                Hogged from {stc[4]}
                            </Typography>
                            <Button
                            id='delSTC'
                            value={stc[0]}
                            onClick={handleCleared}
                            variant='contained'
                            disableElevation
                            sx={{
                                height: '60%',
                                borderRadius: 0,
                                backgroundColor: '#ff8e3c',
                                color: '#000',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 142, 60, 0.7)'
                                },
                                '&:active': {
                                    backgroundColor: '#ff8e3c'
                                }
                            }}>
                            
                                Cleared
                            </Button>
                        </Box>
                        )
                    })
                }
            </Box>
            </Box>

        </Dialog>
    )
}

SAModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default function StaffAlertTray({open, onClose, seatsToClear, checkSTC}) {
    const handleClose = () => () => onClose()

    return (
        <>
        <SAModal
        open={open}
        onClose={handleClose()}
        seatsToClear={seatsToClear}
        checkSTC={checkSTC}
        />
        </>
  );
}