import '../styles.css'

// components
import Seat from './seat.js'

// mui
import {createTheme, styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { ThemeProvider } from '@emotion/react'
import { Box } from '@mui/material'


// components for styling
const Table = styled(Paper)(() => ({
    padding: 18,
    backgroundColor: '#d3c4a2',
    borderRadius: 3,
    border: '1px solid rgba(0,0,0,0.25)',
    textAlign: 'center'
}))

const FillerTop = styled(Paper)(() => ({
    padding: '5rem 24.7rem',
    backgroundColor: '#ddd',
    borderRadius: 3,
    textAlign: 'center',
}))

const FillerBot = styled(Paper)(() => ({
    padding: '31.8rem 0',
    backgroundColor: '#ddd',
    borderRadius: 3,
    textAlign: 'center',
}))

const FillerWtv = styled(Paper)(() => ({
    padding: '20.5rem 0',
    backgroundColor: '#ddd',
    borderRadius: 3,
    textAlign: 'center',
}))

const Table4 = styled(Grid)(() => ({
    width: '110px',
    height: '45px'
}))

const Table2 = styled(Grid)(() => ({
    width: '70px',
    height: '45px'
}))

const table = createTheme({
    components: {
        MuiGrid: {
            defaultProps: {
                justifyContent: 'space-between',
                rowSpacing: 0.8
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            }
        }
    }
})


// main
export default function Lvl3({reserveModal, seatInfo}) {
    // reserve modal
    const handleReserve = () => (event) => reserveModal(event)

    // seat format:
    // <Seat id='101' status={seatInfo[101]} reserve={handleReserve()}/>

    // use css grid to prevent responsiveness

    // main
    return (
        <>
        <ThemeProvider theme={table}>

        {/* collab space */}
        <Grid container justifyContent='center'>
            <FillerTop />
        </Grid>

        <div className='center' style={{marginTop: 10}}>
        <Box className='grid'
        sx={{
            gridTemplateColumns: '2fr 1fr 6fr 1fr 2fr',
            columnGap: '2rem'
        }}>
            {/* window tables L */}
            <Box className='flex-col' sx={{gap:'8rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat id='301' status={seatInfo[301]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='302' status={seatInfo[302]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='303' status={seatInfo[303]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='304' status={seatInfo[304]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='305' status={seatInfo[305]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='306' status={seatInfo[306]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='307' status={seatInfo[307]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='308' status={seatInfo[308]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='309' status={seatInfo[309]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='310' status={seatInfo[310]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='311' status={seatInfo[311]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='312' status={seatInfo[312]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='313' status={seatInfo[313]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='314' status={seatInfo[314]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='315' status={seatInfo[315]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='316' status={seatInfo[316]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='317' status={seatInfo[317]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='318' status={seatInfo[318]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='319' status={seatInfo[319]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='320' status={seatInfo[320]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='321' status={seatInfo[321]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='322' status={seatInfo[322]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='323' status={seatInfo[323]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='324' status={seatInfo[324]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            {/* booths L */}
            <Box className='flex-col' sx={{gap:'3rem'}}>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='325' status={seatInfo[325]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='326' status={seatInfo[326]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='327' status={seatInfo[327]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='328' status={seatInfo[328]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='329' status={seatInfo[329]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='330' status={seatInfo[330]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='331' status={seatInfo[331]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='332' status={seatInfo[332]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='333' status={seatInfo[333]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='334' status={seatInfo[334]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='335' status={seatInfo[335]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='336' status={seatInfo[336]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='337' status={seatInfo[337]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='338' status={seatInfo[338]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>            
            </Box>

            {/* collab space */}
            <Grid marginTop={-10}>
                <FillerBot>Collaborative <br/> space</FillerBot>
            </Grid>

            {/* booths R */}
            <Box className='flex-col' sx={{gap:'3rem'}}>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='339' status={seatInfo[339]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='340' status={seatInfo[340]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='341' status={seatInfo[341]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='342' status={seatInfo[342]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='343' status={seatInfo[343]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='344' status={seatInfo[344]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='345' status={seatInfo[345]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='346' status={seatInfo[346]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='3347' status={seatInfo[347]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='348' status={seatInfo[348]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='349' status={seatInfo[349]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='350' status={seatInfo[350]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat id='351' status={seatInfo[351]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat id='352' status={seatInfo[352]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>             
            </Box>

            {/* window tables R */}
            <Box className='flex-col' sx={{gap:'8rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat id='353' status={seatInfo[353]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='354' status={seatInfo[354]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='355' status={seatInfo[355]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='356' status={seatInfo[356]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='357' status={seatInfo[357]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='358' status={seatInfo[358]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='359' status={seatInfo[359]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='360' status={seatInfo[360]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='361' status={seatInfo[361]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='362' status={seatInfo[362]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='363' status={seatInfo[363]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='364' status={seatInfo[364]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='365' status={seatInfo[365]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='366' status={seatInfo[366]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='367' status={seatInfo[367]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='368' status={seatInfo[368]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='369' status={seatInfo[369]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='370' status={seatInfo[370]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='371' status={seatInfo[371]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='372' status={seatInfo[372]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='373' status={seatInfo[373]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='374' status={seatInfo[374]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='375' status={seatInfo[375]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='376' status={seatInfo[376]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>

            </Box>
        
        </Box>
        </div>

        <div className='center'>
        <Box className='grid' 
        sx={{
            gridTemplateColumns: '1fr 1fr 1fr 3.3fr',
            columnGap: '1.8rem'
        }}
        marginTop={3}>

            {/* sofas */}
            <Box className='flex-col' sx={{gap:'8.5rem'}}>
                <Table2 container item>
                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='377' status={seatInfo[377]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='378' status={seatInfo[378]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='379' status={seatInfo[379]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='380' status={seatInfo[380]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='381' status={seatInfo[381]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='382' status={seatInfo[382]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='383' status={seatInfo[383]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='384' status={seatInfo[384]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
            </Box>

            {/* singles */}
            <Box className='flex-col' sx={{gap:'10rem'}}>
                <Table2 container item>
                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='385' status={seatInfo[385]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='386' status={seatInfo[386]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat id='387' status={seatInfo[387]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
            </Box>

            {/* tables with pillar */}
            <Box className='flex-col' sx={{gap:'13.5rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat id='388' status={seatInfo[388]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='389' status={seatInfo[389]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='390' status={seatInfo[390]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='391' status={seatInfo[391]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='392' status={seatInfo[392]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='393' status={seatInfo[393]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='394' status={seatInfo[394]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='395' status={seatInfo[395]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='396' status={seatInfo[396]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='397' status={seatInfo[397]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat id='398' status={seatInfo[398]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='399' status={seatInfo[399]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>
        
            {/* tables - over 100, ignore */}
            {/* <Box sx={{marginLeft: 2, marginRight: 2}}>
                <Table4 container item>
                    <Grid item>
                        <Seat id='101' status={seatInfo[101]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='102' status={seatInfo[102]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat status={seatInfo[106]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat status={seatInfo[107]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='101' status={seatInfo[101]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='102' status={seatInfo[102]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat status={seatInfo[106]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat status={seatInfo[107]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='101' status={seatInfo[101]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='102' status={seatInfo[102]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat status={seatInfo[106]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat status={seatInfo[107]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat id='101' status={seatInfo[101]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat id='102' status={seatInfo[102]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat status={seatInfo[106]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat status={seatInfo[107]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box> */}

            {/* misc stuff */}
            <Grid marginTop={-1}>
                <FillerWtv>Staircase/Rooms</FillerWtv>
            </Grid>

        </Box>
        </div>


        </ThemeProvider>
        </>
    )
}