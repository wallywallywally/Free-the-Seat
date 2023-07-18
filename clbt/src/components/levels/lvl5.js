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
    padding: '5rem 26.6rem',
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
    padding: '10rem 0',
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
// seat ids: 324-415
export default function Lvl5({reserveModal, seatInfo}) {
    // reserve modal
    const handleReserve = () => (event) => reserveModal(event)


    // main
    return (
        <>
        <ThemeProvider theme={table}>
        <div className='lvl' id='5'>

        {/* collab space */}
        <Grid container justifyContent='center'>
            <FillerTop>Books</FillerTop>
        </Grid>

        <div className='center' style={{marginTop: 20, marginBottom: 140}}>
        <Box className='grid'
        sx={{
            gridTemplateColumns: '1fr 1fr 1fr 1fr 2fr',
            columnGap: '3rem'
        }}>
            <Box className='flex-col' sx={{gap:'9rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='1' id='324' status={seatInfo[324]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='2' id='325' status={seatInfo[325]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='3' id='326' status={seatInfo[326]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='4' id='327' status={seatInfo[327]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='5' id='328' status={seatInfo[328]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='6' id='329' status={seatInfo[329]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='7' id='330' status={seatInfo[330]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='8' id='331' status={seatInfo[331]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='9' id='332' status={seatInfo[332]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='10' id='333' status={seatInfo[333]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='11' id='334' status={seatInfo[334]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='12' id='335' status={seatInfo[335]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='13' id='336' status={seatInfo[336]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='14' id='337' status={seatInfo[337]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='15' id='338' status={seatInfo[338]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='16' id='339' status={seatInfo[339]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='17' id='340' status={seatInfo[340]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='18' id='341' status={seatInfo[341]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='19' id='342' status={seatInfo[342]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='20' id='343' status={seatInfo[343]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            <Box className='flex-col' sx={{gap:'9rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='21' id='344' status={seatInfo[344]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='22' id='345' status={seatInfo[345]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='23' id='346' status={seatInfo[346]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='24' id='347' status={seatInfo[347]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='25' id='348' status={seatInfo[348]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='26' id='349' status={seatInfo[349]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='27' id='350' status={seatInfo[350]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='28' id='351' status={seatInfo[351]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='29' id='352' status={seatInfo[352]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='30' id='353' status={seatInfo[353]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='31' id='354' status={seatInfo[354]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='32' id='355' status={seatInfo[355]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='33' id='356' status={seatInfo[356]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='34' id='357' status={seatInfo[357]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='35' id='358' status={seatInfo[358]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='36' id='359' status={seatInfo[359]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='37' id='360' status={seatInfo[360]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='38' id='361' status={seatInfo[361]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='39' id='362' status={seatInfo[362]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='40' id='363' status={seatInfo[363]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            <Box className='flex-col' sx={{gap:'9rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='41' id='364' status={seatInfo[364]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='42' id='365' status={seatInfo[365]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='43' id='366' status={seatInfo[366]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='44' id='367' status={seatInfo[367]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='45' id='368' status={seatInfo[368]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='46' id='369' status={seatInfo[369]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='47' id='370' status={seatInfo[370]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='48' id='371' status={seatInfo[371]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='49' id='372' status={seatInfo[372]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='50' id='373' status={seatInfo[373]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='51' id='374' status={seatInfo[374]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='52' id='375' status={seatInfo[375]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='53' id='376' status={seatInfo[376]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='54' id='377' status={seatInfo[377]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='55' id='378' status={seatInfo[378]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='56' id='379' status={seatInfo[379]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='57' id='380' status={seatInfo[380]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='58' id='381' status={seatInfo[381]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='59' id='382' status={seatInfo[382]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='60' id='383' status={seatInfo[383]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            <Box className='flex-col' sx={{gap:'9rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='61' id='384' status={seatInfo[384]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='62' id='385' status={seatInfo[385]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='63' id='386' status={seatInfo[386]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='64' id='387' status={seatInfo[387]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='65' id='388' status={seatInfo[388]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='66' id='389' status={seatInfo[389]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='67' id='390' status={seatInfo[390]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='68' id='391' status={seatInfo[391]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='69' id='392' status={seatInfo[392]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='70' id='393' status={seatInfo[393]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='71' id='394' status={seatInfo[394]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='72' id='395' status={seatInfo[395]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='73' id='396' status={seatInfo[396]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='74' id='397' status={seatInfo[397]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='75' id='398' status={seatInfo[398]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='76' id='399' status={seatInfo[399]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='77' id='400' status={seatInfo[400]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='78' id='401' status={seatInfo[401]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='79' id='402' status={seatInfo[402]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='80' id='403' status={seatInfo[403]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>
        
            {/* misc stuff */}
            <Grid marginTop={-1}>
                <FillerWtv>Staircase</FillerWtv>
                <Box className='flex-col' sx={{gap:'9rem', alignItems:'center'}} marginTop='1.8rem'>
                    <Table4 container item>
                        <Grid item>
                            <Seat value='81' id='404' status={seatInfo[404]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat value='82' id='405' status={seatInfo[405]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table />
                        </Grid>

                        <Grid item>
                            <Seat value='83' id='406' status={seatInfo[406]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat value='84' id='407' status={seatInfo[407]} reserve={handleReserve()}/>
                        </Grid>
                    </Table4>
                    <Table4 container item>
                        <Grid item>
                            <Seat value='85' id='408' status={seatInfo[408]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat value='86' id='409' status={seatInfo[409]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table />
                        </Grid>

                        <Grid item>
                            <Seat value='87' id='410' status={seatInfo[410]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat value='88' id='411' status={seatInfo[411]} reserve={handleReserve()}/>
                        </Grid>
                    </Table4>
                    <Table4 container item>
                        <Grid item>
                            <Seat value='89' id='412' status={seatInfo[412]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat value='90' id='413' status={seatInfo[413]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table />
                        </Grid>

                        <Grid item>
                            <Seat value='91' id='414' status={seatInfo[414]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat value='92' id='415' status={seatInfo[415]} reserve={handleReserve()}/>
                        </Grid>
                    </Table4>
                </Box>
            </Grid>
        </Box>
        </div>

        </div>
        </ThemeProvider>
        </>
    )
}