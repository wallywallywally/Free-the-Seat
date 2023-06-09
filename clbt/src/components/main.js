import {useState} from "react"

// components
import Lvl1 from './lvl1.js'
import Reserve from './modals/reserve.js'

// mui
import { Box, Container, Typography } from '@mui/material'
import {createTheme} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// theme
const levelLayout = createTheme({
})

// [DB int] mimics "reservations" table
// a database filtered by level is passed into each Lvl
const dbRes = [
    {id: 2, user_id: 123, seat_id: 101, start_time: "1530", end_time: "1600"},
    {id: 1, user_id: 236, seat_id: 101, start_time: "1330", end_time: "1430"},
    {id: 3, user_id: 553, seat_id: 112, start_time: "0900", end_time: "1000"},
    {id: 4, user_id: 598, seat_id: 112, start_time: "1330", end_time: "1430"},
    {id: 5, user_id: 111, seat_id: 102, start_time: "1400", end_time: "1430"},
    {id: 6, user_id: 112, seat_id: 102, start_time: "1430", end_time: "1530"},
    {id: 6, user_id: 155, seat_id: 101, start_time: "0930", end_time: "1030"},
]

// [DB int] process "reservations" to get "seats" - to finish
// // get current time
// let hour = String(new Date().getHours())
// let min = String(new Date().getMinutes())
// let currentTime = Number(hour + (min.length === 1 ? '0' + min : min))
// currentTime = 1350

// // process database
// for (var element of dbRes) {
//     // alr occ/ourres- skip other entries
//     let currentStatus = seatInfo[element.seat_id]
//     if ((currentStatus === 'occ') || (currentStatus === 'ourres')) {
//         continue
//     }
//     // ! to fix
//     // clear 'ourres' and re-render
    
//     // get start and end times
//     let [start, end, start15b] = [0,0,0]
//     start = Number(element.start_time.split(':').join(''))
//     end = Number(element.end_time.split(':').join(''))
//     start15b = String(start).substring(2) === '00' ? start - 100 + 45 : start - 15

//     // check if current time is between start and end times and get status
//     let status
//     if ((currentTime >= start) && (currentTime <= end)) {
//         status = 'occ'
//     } else if ((currentTime <= start) && (currentTime >= start15b)) {
//         status = 'res'
//     } else {
//         status = 'emp'
//     }

//     // alr res - skip emp entries
//     if ((currentStatus === 'res') && (status === 'emp')) {
//         continue
//     }

//     // update seat status
//     seatInfo[element.seat_id] = status
// }

let breaker // comment readibility

// [DB int] mimics "seats" table
// initialise - {101: 'emp',...}
const level = '1'
const numSeats = 80
let seatInfo = {}
// let seatNum
for (let i = 1; i <= numSeats; i++) {
    const seatNum = Number(level + (i <= 9 ? '0' + String(i) : String(i)));
    (seatNum % 2) === 0 ? seatInfo[seatNum] = 'emp' : seatInfo[seatNum] = 'occ'
}



// main
// ! to decide
// responsive: header ?
// fixed: level
export default function Main({userid}) {
    // check for reservation on the first time
    let resDetfirst = []
    for (var element of dbRes) {
        if (element.user_id === userid) {
            resDetfirst = [element.seat_id, element.start_time, element.end_time]
            break
        } else {
            resDetfirst = []
        }
    }
    let [prevSeat, setprevSeat] = useState(resDetfirst[0])
    // state updates if user creates/deletes reservation
    const [resDet, setResDet] = useState(resDetfirst)

    // level state
    const [level, setLevel] = useState(1)
    const handleChangeLevel = (event) => {
        setLevel(event.target.value)
    }
 
    // checked in state
    const [checkin, setCheckin] = useState(false)

    // reserve modal
    const [openRes, setOpenRes] = useState(false);
    // seat details
    const [seatDet, setSeatDet] = useState([])
    const [ttCol, setttCol] = useState({})
    const ttColpre = {}
    Object.assign(ttColpre, ttCol)

    const handleResOpen = (event) => {
        setOpenRes(true)

        // update modal
        const seatNum = event.target.id

        // seat info
        setSeatDet([seatNum[0], seatNum[1] === '0' ? seatNum.slice(2) : seatNum.slice(1), seatNum])

        // timetable
        // [DB int] checks "reservations" table
        const ttdatapre = dbRes.filter((element) => element.seat_id === Number(seatNum))
        const ttdata = []
        for (var element of ttdatapre) {
            // start at xx00
            if (element.start_time.slice(2,4) === '00') {
                switch (element.start_time.slice(0,2)) {
                    case '09':
                        element.end_time.slice(2,4) === '30' ? ttdata.push(91) : ttdata.push(91, 92)
                        break
                    case '10':
                        element.end_time.slice(2,4) === '30' ? ttdata.push(101) : ttdata.push(101, 102)
                        break
                    case '11':
                        element.end_time.slice(2,4) === '30' ? ttdata.push(111) : ttdata.push(111, 112)
                        break
                    case '12':
                        element.end_time.slice(2,4) === '30' ? ttdata.push(121) : ttdata.push(121, 122)
                        break
                    case '13':
                        element.end_time.slice(2,4) === '30' ? ttdata.push(131) : ttdata.push(131, 132)
                        break
                    case '14':
                        element.end_time.slice(2,4) === '30' ? ttdata.push(141) : ttdata.push(141, 142)
                        break
                    case '15':
                        element.end_time.slice(2,4) === '30' ? ttdata.push(151) : ttdata.push(151, 152)
                        break
                    case '16':
                        element.end_time.slice(2,4) === '30' ? ttdata.push(161) : ttdata.push(161, 162)
                        break
                    case '17':
                        element.end_time.slice(2,4) === '30' ? ttdata.push(171) : ttdata.push(171, 172)
                        break
                    default:
                        // do nothing
                }
            }

            // start at xx30
            if (element.start_time.slice(2,4) === '30') {
                switch (element.start_time.slice(0,2)) {
                    case '09':
                        element.end_time.slice(2,4) === '00' ? ttdata.push(92) : ttdata.push(92, 101)
                        break
                    case '10':
                        element.end_time.slice(2,4) === '00' ? ttdata.push(102) : ttdata.push(102, 111)
                        break
                    case '11':
                        element.end_time.slice(2,4) === '00' ? ttdata.push(112) : ttdata.push(112, 121)
                        break
                    case '12':
                        element.end_time.slice(2,4) === '00' ? ttdata.push(122) : ttdata.push(122, 132)
                        break
                    case '13':
                        element.end_time.slice(2,4) === '00' ? ttdata.push(132) : ttdata.push(132, 141)
                        break
                    case '14':
                        element.end_time.slice(2,4) === '00' ? ttdata.push(142) : ttdata.push(142, 151)
                        break
                    case '15':
                        element.end_time.slice(2,4) === '00' ? ttdata.push(152) : ttdata.push(152, 161)
                        break
                    case '16':
                        element.end_time.slice(2,4) === '00' ? ttdata.push(162) : ttdata.push(162, 171)
                        break
                    case '17':
                        ttdata.push(172)
                        break
                    default:
                        // do nothing
                }
            }
        }
        const ttCol = {
            91: 'tt-emp',
            92: 'tt-emp',
            101: 'tt-emp',
            102: 'tt-emp',
            111: 'tt-emp',
            112: 'tt-emp',
            121: 'tt-emp',
            122: 'tt-emp',
            131: 'tt-emp',
            132: 'tt-emp',
            141: 'tt-emp',
            142: 'tt-emp',
            151: 'tt-emp',
            152: 'tt-emp',
            161: 'tt-emp',
            162: 'tt-emp',
            171: 'tt-emp',
            172: 'tt-emp',
        }
        for (var elementTT of ttdata) {
            ttCol[elementTT] = 'tt-occ'
        }
        setttCol(ttCol)

    };

    const handleResClose = (value) => {
        setOpenRes(false);
    };



    // main
    return(
        <>
        {/* main header */}
        <Container sx={{marginTop: '30px'}}>
        <Box 
        sx={{
            display: 'flex',
            flex: '1 1 auto',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Typography variant='h5'>
                Welcome back, TEST!
            </Typography>    

            <Typography variant='h4'
            sx={{textAlign: 'right'}}>
                Central Library Tracker
            </Typography>
        </Box>
        </Container>

        <Container
        sx={{marginTop: '15px'}}
        >
        <Box
        sx={{
            display: 'flex',
            flex: '1 1 auto',
            alignItems: 'center',
            gap: '2rem'
        }}>
            <FormControl sx={{width: 100}}>
                <InputLabel id="floor-select-label">Level</InputLabel>
                <Select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={handleChangeLevel}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2} disabled>2</MenuItem>
                    <MenuItem value={3} disabled>3</MenuItem>
                </Select>
            </FormControl>
            <Typography variant='body1'>
                {resDet.length === 0 ? 
                    "Click on a seat to reserve"
                    : <span>Click on <span style={{color: '#bd00ff'}}>your seat</span> to cancel</span>
                }
            </Typography>
        </Box>
        </Container>

        {/* info tag */}
        <Container sx={{textAlign: 'center', marginBottom: '4rem'}}>
            <Typography variant="body1" 
            sx={{
                visibility: resDet.length === 0 ? 'hidden' : 'visible',
                marginTop: '20px'
            }}>
                {checkin === false ?
                    <span>You have reserved level <span style={{color: '#bd00ff', fontWeight: '700'}}>{String(resDet[0]).substring(0,1)}</span> seat <span style={{color: '#bd00ff', fontWeight: '700'}}>
                    {String(resDet[0]).substring(1,2) === '0' ? String(resDet[0]).substring(2,3) : String(resDet[0]).substring(1,3)}</span> from <span style={{fontWeight: '700'}}>{resDet[1]} - {resDet[2]}</span></span>
                    : <span>You are now studying at level <span style={{color: '#0085ff', fontWeight: '700'}}>{String(resDet[0]).substring(0,1)}</span> seat <span style={{color: '#0085ff', fontWeight: '700'}}>
                    {String(resDet[0]).substring(1,2) === '0' ? String(resDet[0]).substring(2,3) : String(resDet[0]).substring(1,3)}</span> until <span style={{fontWeight: '700'}}>{resDet[2]}</span></span>
                }
            </Typography>
        </Container>

        {/* level layout */}
        <ThemeProvider theme={levelLayout}>
            <div
            style={{
                // ! fixed so i can get the horizontal scrollbar
                width: '90rem',
                margin: '30px auto 0',
            }}>
                <Lvl1 reserveModal={handleResOpen} reservation={resDet.length !== 0 ? resDet : 'emp'} prevSeat={[prevSeat, setprevSeat]} dbSeats={seatInfo}  />
                <Reserve
                open={openRes} 
                onClose={handleResClose} 
                seatInfo={seatDet} 
                ttCol={ttCol}
                ttColpre={ttColpre}
                setResDet={setResDet}
                res={true}
                />
            </div>
        </ThemeProvider>

        </>
    )
}