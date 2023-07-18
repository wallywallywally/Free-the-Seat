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
    padding: '3rem 26.6rem',
    backgroundColor: '#ddd',
    borderRadius: 3,
    textAlign: 'center',
}))

const FillerWtv = styled(Paper)(() => ({
    padding: '20.2rem 0',
    backgroundColor: '#ddd',
    borderRadius: 3,
    textAlign: 'center',
}))

const Table4 = styled(Grid)(() => ({
    width: '110px',
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
// seat ids: 216-323
export default function Lvl4({reserveModal, seatInfo}) {
    // reserve modal
    const handleReserve = () => (event) => reserveModal(event)


    // main
    return (
        <>
        <ThemeProvider theme={table}>
        <div className='lvl' id='4'>

        {/* project rooms */}
        <Grid container justifyContent='center'>
            <FillerTop>Project rooms</FillerTop>
        </Grid>

        <div className='center' style={{marginTop: 20}}>
        <Box className='grid'
        sx={{
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            columnGap: '10rem',
        }}>
            <Box className='flex-col' sx={{gap:'10rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='1' id='216' status={seatInfo[216]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='2' id='217' status={seatInfo[217]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='3' id='218' status={seatInfo[218]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='4' id='219' status={seatInfo[219]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='5' id='220' status={seatInfo[220]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='6' id='221' status={seatInfo[221]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='7' id='222' status={seatInfo[222]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='8' id='223' status={seatInfo[223]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='9' id='224' status={seatInfo[224]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='10' id='225' status={seatInfo[225]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='11' id='226' status={seatInfo[226]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='12' id='227' status={seatInfo[227]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='13' id='228' status={seatInfo[228]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='14' id='229' status={seatInfo[229]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='15' id='230' status={seatInfo[230]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='16' id='231' status={seatInfo[231]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            <Box className='flex-col' sx={{gap:'10rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='17' id='232' status={seatInfo[232]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='18' id='233' status={seatInfo[233]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='19' id='234' status={seatInfo[234]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='20' id='235' status={seatInfo[235]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='21' id='236' status={seatInfo[236]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='22' id='237' status={seatInfo[237]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='23' id='238' status={seatInfo[238]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='24' id='239' status={seatInfo[239]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='25' id='240' status={seatInfo[240]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='26' id='241' status={seatInfo[241]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='27' id='242' status={seatInfo[242]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='28' id='243' status={seatInfo[243]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='29' id='244' status={seatInfo[244]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='30' id='245' status={seatInfo[245]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='31' id='246' status={seatInfo[246]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='32' id='247' status={seatInfo[247]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            <Box className='flex-col' sx={{gap:'10rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='33' id='248' status={seatInfo[248]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='34' id='249' status={seatInfo[249]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='35' id='250' status={seatInfo[250]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='36' id='251' status={seatInfo[251]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='37' id='252' status={seatInfo[252]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='38' id='253' status={seatInfo[253]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='39' id='254' status={seatInfo[254]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='40' id='255' status={seatInfo[255]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='41' id='256' status={seatInfo[256]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='42' id='257' status={seatInfo[257]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='43' id='258' status={seatInfo[258]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='44' id='259' status={seatInfo[259]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='45' id='260' status={seatInfo[260]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='46' id='261' status={seatInfo[261]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='47' id='262' status={seatInfo[262]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='48' id='263' status={seatInfo[263]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            <Box className='flex-col' sx={{gap:'10rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='49' id='264' status={seatInfo[264]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='50' id='265' status={seatInfo[265]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='51' id='266' status={seatInfo[266]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='52' id='267' status={seatInfo[267]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='53' id='268' status={seatInfo[268]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='54' id='269' status={seatInfo[269]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='55' id='270' status={seatInfo[270]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='56' id='271' status={seatInfo[271]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='57' id='272' status={seatInfo[272]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='58' id='273' status={seatInfo[273]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='59' id='274' status={seatInfo[274]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='60' id='275' status={seatInfo[275]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='61' id='276' status={seatInfo[276]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='62' id='277' status={seatInfo[277]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='63' id='278' status={seatInfo[278]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='64' id='279' status={seatInfo[279]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>
        </Box>
        </div>

        <div className='center'>
        <Box className='grid' 
        sx={{
            gridTemplateColumns: '1fr 1fr 1fr 3.6fr',
            columnGap: '4rem'
        }}
        marginTop={16}>

            {/* tables */}
            <Box className='flex-col' sx={{gap:'8.2rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='65' id='280' status={seatInfo[280]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='66' id='281' status={seatInfo[281]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='67' id='282' status={seatInfo[282]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='68' id='283' status={seatInfo[283]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='69' id='284' status={seatInfo[284]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='70' id='285' status={seatInfo[285]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='71' id='286' status={seatInfo[286]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='72' id='287' status={seatInfo[287]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='73' id='288' status={seatInfo[288]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='74' id='289' status={seatInfo[289]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='75' id='290' status={seatInfo[290]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='76' id='291' status={seatInfo[291]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='77' id='292' status={seatInfo[292]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='78' id='293' status={seatInfo[293]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='79' id='294' status={seatInfo[294]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='80' id='295' status={seatInfo[295]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            {/* tables with pillar */}
            <Box className='flex-col' sx={{gap:'13.5rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='81' id='296' status={seatInfo[196]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='82' id='297' status={seatInfo[297]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='83' id='298' status={seatInfo[298]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='84' id='299' status={seatInfo[299]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='85' id='300' status={seatInfo[300]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='86' id='301' status={seatInfo[301]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='87' id='302' status={seatInfo[302]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='88' id='303' status={seatInfo[303]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='89' id='304' status={seatInfo[304]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='90' id='305' status={seatInfo[305]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='91' id='306' status={seatInfo[306]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='92' id='307' status={seatInfo[307]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>
        
            {/* tables */}
            <Box className='flex-col' sx={{gap:'8.2rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='93' id='308' status={seatInfo[308]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='94' id='309' status={seatInfo[309]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='95' id='310' status={seatInfo[310]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='96' id='311' status={seatInfo[311]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='97' id='312' status={seatInfo[312]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='98' id='313' status={seatInfo[313]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='99' id='314' status={seatInfo[314]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='100' id='315' status={seatInfo[315]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='101' id='316' status={seatInfo[316]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='102' id='317' status={seatInfo[317]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='103' id='318' status={seatInfo[318]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='104' id='319' status={seatInfo[319]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='105' id='320' status={seatInfo[320]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='106' id='321' status={seatInfo[321]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='107' id='322' status={seatInfo[322]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='108' id='323' status={seatInfo[323]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            {/* misc stuff */}
            <Grid marginTop={-1}>
                <FillerWtv>Staircase/Rooms</FillerWtv>
            </Grid>

        </Box>
        </div>

        </div>
        </ThemeProvider>
        </>
    )
}