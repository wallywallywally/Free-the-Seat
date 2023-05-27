// components
import Seat from './seat.js'

// mui
import {createTheme, styled} from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { ThemeProvider } from '@emotion/react'


// table
const Table = styled(Paper)(() => ({
    padding: 18,
    backgroundColor: '#d3c4a2',
    borderRadius: 3,
    border: '1px solid rgba(0,0,0,0.25)',
    textAlign: 'center'
}))

const TableFull = styled(Grid)(() => ({
    width: '230px',
    height: '30px'
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

// level details
const level = '1'
const numSeats = 80
// initilaise seatInfo database - {101: 'emp',...}
// mimics Seat table
let seatInfo = {}
for (let i = 1; i <= numSeats; i++) {
    const seatNum = Number(level + (i <= 9 ? '0' + String(i) : String(i)))
    seatInfo[seatNum] = 'emp'
}

// get current time
let hour = String(new Date().getHours())
let min = String(new Date().getMinutes())
let currentTime = Number(hour + (min.length === 1 ? '0' + min : min))
currentTime = 1329

// main
export default function Lvl1({reserve, database, reservation}) {
    // process reservation, if any
    // ! ourres ?
    if (reservation !== 'emp') {        
        seatInfo[reservation[0]] = 'ourres'
    }

    // process database
    for (var element of database) {
        // alr occ/ourres- skip other entries
        let currentStatus = seatInfo[element.seat_id]
        if (currentStatus === 'occ') {
            continue
        }

        // get start and end times
        let [start, end, start15b] = [0,0,0]
        start = Number(element.start_time.split(':').join(''))
        end = Number(element.end_time.split(':').join(''))
        start15b = String(start).substring(2) === '00' ? start - 100 + 45 : start - 15

        // check if current time is between start and end times and get status
        let status
        if ((currentTime >= start) && (currentTime <= end)) {
            status = 'occ'
        } else if ((currentTime <= start) && (currentTime >= start15b)) {
            status = 'res'
        } else {
            status = 'emp'
        }

        // alr res - skip emp entries
        if ((currentStatus === 'res') && (status === 'emp')) {
            continue
        }

        // update seat status
        seatInfo[element.seat_id] = status
    }

    // ! we need to update dict every min
    const updateSeatInfo = () => {

    }

    // test for time reload
    const handleTime = () => {
        console.log(currentTime)
    }

    // reserve modal
    const handleReserve = () => () => reserve()


    // main
    return (
        <>
        {/* <Button onClick={handleReserve()}>test</Button> */}
        <ThemeProvider theme={table}>
        <Grid container id='main' justifyContent={'space-around'}>
            {/* <Button onClick={handleTime()}>test</Button> */}

            <Grid container id='left-side' xs={4}>

                <Grid container id='left-top'>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={seatInfo[101]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[102]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[103]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[104]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[105]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table>1</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={seatInfo[106]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[107]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[108]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[109]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[110]} reserve={handleReserve()}/>
                        </Grid>
                    </TableFull>
                    </Grid>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={seatInfo[111]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[112]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[113]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[114]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[115]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table>2</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={seatInfo[116]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[117]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[118]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[119]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[120]} reserve={handleReserve()}/>
                        </Grid>
                    </TableFull>
                    </Grid>

                </Grid>

                <Grid container id='left-bottom'
                sx={{marginTop: '180px'}}>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={seatInfo[121]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[122]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[123]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[124]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[125]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table>3</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={seatInfo[126]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[127]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[128]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[129]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[130]} reserve={handleReserve()}/>
                        </Grid>
                    </TableFull>
                    </Grid>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={seatInfo[131]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[132]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[133]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[134]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[135]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table>4</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={seatInfo[136]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[137]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[138]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[139]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[140]} reserve={handleReserve()}/>
                        </Grid>
                    </TableFull>
                    </Grid>

                </Grid>

            </Grid>

            <Grid container id='right-side' xs={4}>

                <Grid container id='right-top'>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={seatInfo[141]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[142]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[143]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[144]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[145]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table>5</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={seatInfo[146]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[147]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[148]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[149]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[150]} reserve={handleReserve()}/>
                        </Grid>
                    </TableFull>
                    </Grid>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={seatInfo[151]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[152]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[153]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[154]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[155]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table>6</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={seatInfo[156]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[157]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[158]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[159]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[160]} reserve={handleReserve()}/>
                        </Grid>
                    </TableFull>
                    </Grid>

                </Grid>

                <Grid container id='right-bottom'
                sx={{marginTop: '180px'}}>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={seatInfo[161]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[162]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[163]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[164]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[165]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table>7</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={seatInfo[166]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[167]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[168]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[169]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[170]} reserve={handleReserve()}/>
                        </Grid>
                    </TableFull>
                    </Grid>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={seatInfo[171]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[172]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[173]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[174]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[175]} reserve={handleReserve()}/>
                        </Grid>

                        <Grid item xs={12}>
                            <Table>8</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={seatInfo[176]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[177]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[178]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[179]} reserve={handleReserve()}/>
                        </Grid>
                        <Grid item>
                            <Seat status={seatInfo[180]} reserve={handleReserve()}/>
                        </Grid>
                    </TableFull>
                    </Grid>

                </Grid>                

            </Grid>

        </Grid>
        </ThemeProvider>
        </>
    )
}