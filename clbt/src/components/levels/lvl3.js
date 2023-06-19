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
    // <Seat value='seat num for that level' id='seat_id' status={seatInfo[seat_id]} reserve={handleReserve()}/>

    // use css grid to prevent responsiveness

    // main
    return (
        <>
        <ThemeProvider theme={table}>

        <div className='lvl3' id='3'>

        {/* collab space */}
        <Grid container justifyContent='center'>
            <FillerTop />
        </Grid>

        <div className='center' style={{marginTop: 20}}>
        <Box className='grid'
        sx={{
            gridTemplateColumns: '2fr 1fr 6fr 1fr 2fr',
            columnGap: '3rem'
        }}>
            {/* window tables L */}
            <Box className='flex-col' sx={{gap:'8rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='1' id='101' status={seatInfo[101]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='2' id='102' status={seatInfo[102]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='3' id='103' status={seatInfo[103]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='4' id='104' status={seatInfo[104]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='5' id='105' status={seatInfo[105]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='6' id='106' status={seatInfo[106]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='7' id='107' status={seatInfo[107]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='8' id='108' status={seatInfo[108]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='9' id='109' status={seatInfo[109]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='10' id='110' status={seatInfo[110]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='11' id='111' status={seatInfo[111]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='12' id='112' status={seatInfo[112]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='13' id='113' status={seatInfo[113]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='13' id='114' status={seatInfo[114]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='15' id='115' status={seatInfo[115]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='16' id='116' status={seatInfo[116]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='17' id='117' status={seatInfo[117]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='18' id='118' status={seatInfo[118]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='19' id='119' status={seatInfo[119]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='20' id='120' status={seatInfo[120]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='21' id='121' status={seatInfo[121]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='22' id='122' status={seatInfo[122]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='23' id='123' status={seatInfo[123]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='24' id='124' status={seatInfo[124]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>

            {/* booths L */}
            <Box className='flex-col' sx={{gap:'3rem'}}>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='25' id='125' status={seatInfo[125]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='26' id='126' status={seatInfo[126]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='27' id='127' status={seatInfo[127]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='28' id='128' status={seatInfo[128]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='29' id='129' status={seatInfo[129]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='30' id='130' status={seatInfo[130]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='31' id='131' status={seatInfo[131]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='32' id='132' status={seatInfo[132]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='33' id='133' status={seatInfo[133]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='34' id='134' status={seatInfo[134]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='35' id='135' status={seatInfo[135]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='36' id='136' status={seatInfo[136]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='37' id='137' status={seatInfo[137]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='38' id='138' status={seatInfo[138]} reserve={handleReserve()}/>
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
                        <Seat value='39' id='139' status={seatInfo[139]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='40' id='140' status={seatInfo[140]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='41' id='141' status={seatInfo[141]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='42' id='142' status={seatInfo[142]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='43' id='143' status={seatInfo[143]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='44' id='144' status={seatInfo[144]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='45' id='145' status={seatInfo[145]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='46' id='146' status={seatInfo[146]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='47' id='147' status={seatInfo[147]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='48' id='148' status={seatInfo[148]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='49' id='149' status={seatInfo[149]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='50' id='150' status={seatInfo[150]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>
                <Grid container item direction='column' alignItems='center'>
                    <Grid item >
                        <Seat value='51' id='151' status={seatInfo[151]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item >
                        <Seat value='52' id='152' status={seatInfo[152]} reserve={handleReserve()}/>
                    </Grid>
                </Grid>             
            </Box>

            {/* window tables R */}
            <Box className='flex-col' sx={{gap:'8rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='53' id='153' status={seatInfo[153]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='54' id='154' status={seatInfo[154]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='55' id='155' status={seatInfo[155]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='56' id='156' status={seatInfo[156]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='57' id='157' status={seatInfo[157]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='58' id='158' status={seatInfo[158]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='59' id='159' status={seatInfo[159]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='60' id='160' status={seatInfo[160]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='61' id='161' status={seatInfo[161]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='62' id='162' status={seatInfo[162]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='63' id='163' status={seatInfo[163]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='64' id='164' status={seatInfo[164]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='65' id='165' status={seatInfo[165]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='66' id='166' status={seatInfo[166]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='67' id='167' status={seatInfo[167]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='68' id='168' status={seatInfo[168]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='69' id='169' status={seatInfo[169]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='70' id='170' status={seatInfo[170]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='71' id='171' status={seatInfo[171]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='72' id='172' status={seatInfo[172]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='73' id='173' status={seatInfo[173]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='74' id='174' status={seatInfo[174]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='75' id='175' status={seatInfo[175]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='76' id='176' status={seatInfo[176]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>

            </Box>
        
        </Box>
        </div>

        <div className='center'>
        <Box className='grid' 
        sx={{
            gridTemplateColumns: '0.7fr 0.7fr 1fr 1fr 3.3fr',
            columnGap: '1.8rem'
        }}
        marginTop={3}>

            {/* sofas */}
            <Box className='flex-col' sx={{gap:'8.5rem'}}>
                <Table2 container item>
                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='77' id='177' status={seatInfo[177]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='78' id='178' status={seatInfo[178]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='79' id='179' status={seatInfo[179]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='80' id='180' status={seatInfo[180]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='81' id='181' status={seatInfo[181]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='82' id='182' status={seatInfo[182]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='83' id='183' status={seatInfo[183]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='84' id='184' status={seatInfo[184]} reserve={handleReserve()}/>
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
                        <Seat value='85' id='185' status={seatInfo[185]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='86' id='186' status={seatInfo[186]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
                <Table2 container item>
                    <Grid container item>
                        <Table sx={{width: '100%', margin: '8px 0'}}/>
                    </Grid>

                    <Grid container item justifyContent='center' alignItems='center'>
                        <Seat value='87' id='187' status={seatInfo[187]} reserve={handleReserve()}/>
                    </Grid>
                </Table2>
            </Box>

            {/* tables with pillar */}
            <Box className='flex-col' sx={{gap:'13.5rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='88' id='188' status={seatInfo[188]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='89' id='189' status={seatInfo[189]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='90' id='190' status={seatInfo[190]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='91' id='191' status={seatInfo[191]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='92' id='192' status={seatInfo[192]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='93' id='193' status={seatInfo[193]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='94' id='194' status={seatInfo[194]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='95' id='195' status={seatInfo[195]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='96' id='196' status={seatInfo[196]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='97' id='197' status={seatInfo[197]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='98' id='198' status={seatInfo[198]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='99' id='199' status={seatInfo[199]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
            </Box>
        
            {/* tables */}
            <Box className='flex-col' sx={{gap:'8.2rem'}}>
                <Table4 container item>
                    <Grid item>
                        <Seat value='100' id='200' status={seatInfo[200]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='101' id='201' status={seatInfo[201]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='102' id='202' status={seatInfo[202]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='103' id='203' status={seatInfo[203]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='104' id='204' status={seatInfo[204]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='105' id='205' status={seatInfo[205]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='106' id='206' status={seatInfo[206]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='107' id='207' status={seatInfo[207]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='108' id='208' status={seatInfo[208]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='109' id='209' status={seatInfo[209]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='110' id='210' status={seatInfo[210]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='111' id='211' status={seatInfo[211]} reserve={handleReserve()}/>
                    </Grid>
                </Table4>
                <Table4 container item>
                    <Grid item>
                        <Seat value='112' id='212' status={seatInfo[212]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='113' id='213' status={seatInfo[213]} reserve={handleReserve()}/>
                    </Grid>

                    <Grid item xs={12}>
                        <Table />
                    </Grid>

                    <Grid item>
                        <Seat value='114' id='214' status={seatInfo[214]} reserve={handleReserve()}/>
                    </Grid>
                    <Grid item>
                        <Seat value='115' id='215' status={seatInfo[215]} reserve={handleReserve()}/>
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