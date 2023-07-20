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

const FillerWtv = styled(Paper)(() => ({
    padding: '10rem 3rem',
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
// seat ids: 416-559
export default function Lvl6({reserveModal  , seatInfo}) {
    // reserve modal
    const handleReserve = () => (event) => reserveModal(event)


    // main
    return (
        <>
        <ThemeProvider theme={table}>
        <div className='lvl' id='6'>

        <div className='center' style={{marginTop: 20}}>
        <Box className='grid'
        sx={{
            gridTemplateColumns: '1fr 1fr 1fr 1fr 3fr',
            columnGap: '4.5rem'
        }}>
            {/* single */}
            <Box className='flex-col'>
                <Grid container item direction='column' alignItems='center' gap='1rem'>
                    <Grid item >
                        <Seat value='1' id='416' status={seatInfo[416]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='2' id='417' status={seatInfo[417]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='3' id='418' status={seatInfo[418]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='4' id='419' status={seatInfo[419]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='5' id='420' status={seatInfo[420]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='6' id='421' status={seatInfo[421]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='7' id='422' status={seatInfo[422]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='8' id='423' status={seatInfo[423]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='9' id='424' status={seatInfo[424]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='10' id='425' status={seatInfo[425]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='11' id='426' status={seatInfo[426]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='12' id='427' status={seatInfo[427]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='13' id='428' status={seatInfo[428]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='14' id='429' status={seatInfo[429]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='15' id='430' status={seatInfo[430]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='16' id='431' status={seatInfo[431]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='17' id='432' status={seatInfo[432]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='18' id='433' status={seatInfo[433]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='19' id='434' status={seatInfo[434]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='20' id='435' status={seatInfo[435]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='21' id='436' status={seatInfo[436]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='22' id='437' status={seatInfo[437]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='23' id='438' status={seatInfo[438]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='24' id='439' status={seatInfo[439]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='25' id='440' status={seatInfo[440]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='26' id='441' status={seatInfo[441]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='27' id='442' status={seatInfo[442]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
            </Box>

            {/* single */}
            <Box className='flex-col'>
                <Grid container item direction='column' alignItems='center' gap='1rem'>
                    <Grid item >
                        <Seat value='28' id='443' status={seatInfo[443]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='29' id='444' status={seatInfo[444]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='30' id='445' status={seatInfo[445]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='31' id='446' status={seatInfo[446]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='32' id='447' status={seatInfo[447]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='33' id='448' status={seatInfo[448]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='34' id='449' status={seatInfo[449]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='35' id='450' status={seatInfo[450]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='36' id='451' status={seatInfo[451]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='37' id='452' status={seatInfo[452]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='38' id='453' status={seatInfo[453]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='39' id='454' status={seatInfo[454]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='40' id='455' status={seatInfo[455]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='41' id='456' status={seatInfo[456]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='42' id='457' status={seatInfo[457]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='43' id='458' status={seatInfo[458]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='44' id='459' status={seatInfo[459]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='45' id='460' status={seatInfo[460]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='46' id='461' status={seatInfo[461]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='47' id='462' status={seatInfo[462]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='48' id='463' status={seatInfo[463]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='49' id='464' status={seatInfo[464]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='50' id='465' status={seatInfo[465]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='51' id='466' status={seatInfo[466]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='52' id='467' status={seatInfo[467]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='53' id='468' status={seatInfo[468]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='54' id='469' status={seatInfo[469]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
            </Box>

            {/* single */}
            <Box className='flex-col'>
                <Grid container item direction='column' alignItems='center' gap='1rem'>
                    <Grid item >
                        <Seat value='55' id='470' status={seatInfo[470]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='56' id='471' status={seatInfo[471]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='57' id='472' status={seatInfo[472]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='58' id='473' status={seatInfo[473]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='59' id='474' status={seatInfo[474]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='60' id='475' status={seatInfo[475]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='61' id='476' status={seatInfo[476]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='62' id='477' status={seatInfo[477]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='63' id='478' status={seatInfo[478]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='64' id='479' status={seatInfo[479]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='65' id='480' status={seatInfo[480]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='66' id='481' status={seatInfo[481]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='67' id='482' status={seatInfo[482]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='68' id='483' status={seatInfo[483]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='69' id='484' status={seatInfo[484]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='70' id='485' status={seatInfo[485]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='71' id='486' status={seatInfo[486]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='72' id='487' status={seatInfo[487]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='73' id='488' status={seatInfo[488]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='74' id='489' status={seatInfo[489]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='75' id='490' status={seatInfo[490]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='76' id='491' status={seatInfo[491]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='77' id='492' status={seatInfo[492]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='78' id='493' status={seatInfo[493]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='79' id='494' status={seatInfo[494]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='80' id='495' status={seatInfo[495]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='81' id='496' status={seatInfo[496]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
            </Box>

            {/* single */}
            <Box className='flex-col'>
                <Grid container item direction='column' alignItems='center' gap='1rem'>
                    <Grid item >
                        <Seat value='82' id='497' status={seatInfo[497]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='83' id='498' status={seatInfo[498]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='84' id='499' status={seatInfo[499]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='85' id='500' status={seatInfo[500]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='86' id='501' status={seatInfo[501]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='87' id='502' status={seatInfo[502]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='88' id='503' status={seatInfo[503]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='89' id='504' status={seatInfo[504]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='90' id='505' status={seatInfo[505]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='91' id='506' status={seatInfo[506]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='92' id='507' status={seatInfo[507]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='93' id='508' status={seatInfo[508]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='94' id='509' status={seatInfo[509]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='95' id='510' status={seatInfo[510]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='96' id='511' status={seatInfo[511]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='97' id='512' status={seatInfo[512]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='98' id='513' status={seatInfo[513]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='99' id='514' status={seatInfo[514]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='100' id='515' status={seatInfo[515]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='101' id='516' status={seatInfo[516]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='102' id='517' status={seatInfo[517]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='103' id='518' status={seatInfo[518]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='104' id='519' status={seatInfo[519]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='105' id='520' status={seatInfo[520]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='106' id='521' status={seatInfo[521]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='107' id='522' status={seatInfo[522]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='108' id='523' status={seatInfo[523]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
            </Box>

            {/* staircase column */}
            <Box className='grid'
            sx={{
                gridTemplateColumns: '1fr 1fr',
                columnGap: '4.5rem'
            }}>
                {/* single SC 1 */}
                <Grid container item direction='column' alignItems='center' gap='1rem'>
                    <Grid item >
                        <Seat value='109' id='524' status={seatInfo[524]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='110' id='525' status={seatInfo[525]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='111' id='526' status={seatInfo[526]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='112' id='527' status={seatInfo[527]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='113' id='528' status={seatInfo[528]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='114' id='529' status={seatInfo[529]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='115' id='530' status={seatInfo[530]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='116' id='531' status={seatInfo[531]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='117' id='532' status={seatInfo[532]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='118' id='533' status={seatInfo[533]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='119' id='534' status={seatInfo[534]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='120' id='535' status={seatInfo[535]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>

                {/* single SC 2 */}
                <Grid container item direction='column' alignItems='center' gap='1rem'>
                    <Grid item >
                        <Seat value='121' id='536' status={seatInfo[536]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='122' id='537' status={seatInfo[537]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='123' id='538' status={seatInfo[538]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='124' id='539' status={seatInfo[539]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='125' id='540' status={seatInfo[540]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='126' id='541' status={seatInfo[541]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='127' id='542' status={seatInfo[542]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='128' id='543' status={seatInfo[543]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='129' id='544' status={seatInfo[544]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='130' id='545' status={seatInfo[545]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='131' id='546' status={seatInfo[546]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='132' id='547' status={seatInfo[547]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>

                {/* SC + Table4's */}
                <div
                style={{
                    gridColumnEnd: 'span 2',
                    marginTop: '1.5rem'
                }}>
                    <FillerWtv>Staircase</FillerWtv>

                    <Box className='flex-col' sx={{gap:'9rem', alignItems:'center'}} marginTop='1.8rem'>
                        <Table4 container item>
                            <Grid item>
                                <Seat value='133' id='548' status={seatInfo[548]} reserve={handleReserve()}/>
                            </Grid>
                            <Grid item>
                                <Seat value='134' id='549' status={seatInfo[549]} reserve={handleReserve()}/>
                            </Grid>

                            <Grid item xs={12}>
                                <Table />
                            </Grid>

                            <Grid item>
                                <Seat value='135' id='550' status={seatInfo[550]} reserve={handleReserve()}/>
                            </Grid>
                            <Grid item>
                                <Seat value='136' id='551' status={seatInfo[551]} reserve={handleReserve()}/>
                            </Grid>
                        </Table4>
                        <Table4 container item>
                            <Grid item>
                                <Seat value='137' id='552' status={seatInfo[552]} reserve={handleReserve()}/>
                            </Grid>
                            <Grid item>
                                <Seat value='138' id='553' status={seatInfo[553]} reserve={handleReserve()}/>
                            </Grid>

                            <Grid item xs={12}>
                                <Table />
                            </Grid>

                            <Grid item>
                                <Seat value='139' id='554' status={seatInfo[554]} reserve={handleReserve()}/>
                            </Grid>
                            <Grid item>
                                <Seat value='140' id='555' status={seatInfo[555]} reserve={handleReserve()}/>
                            </Grid>
                        </Table4>
                        <Table4 container item>
                            <Grid item>
                                <Seat value='141' id='556' status={seatInfo[556]} reserve={handleReserve()}/>
                            </Grid>
                            <Grid item>
                                <Seat value='142' id='557' status={seatInfo[557]} reserve={handleReserve()}/>
                            </Grid>

                            <Grid item xs={12}>
                                <Table />
                            </Grid>

                            <Grid item>
                                <Seat value='143' id='558' status={seatInfo[558]} reserve={handleReserve()}/>
                            </Grid>
                            <Grid item>
                                <Seat value='144' id='559' status={seatInfo[559]} reserve={handleReserve()}/>
                            </Grid>
                        </Table4>
                    </Box>
                </div>

            </Box>


        </Box>
        </div>

        </div>
        </ThemeProvider>
        </>
    )
}