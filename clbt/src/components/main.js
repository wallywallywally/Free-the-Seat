import './styles.css'
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

// [DB int] process "reservations" to get "seats" at any given time
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

// turn timing into id (0900-0930 -> 91)
const timeToID = (start, end, arr) => {
    // start at xx00
    if (start.slice(2,4) === '00') {
        switch (start.slice(0,2)) {
            case '09':
                end.slice(2,4) === '30' ? arr.push(91) : arr.push(91, 92)
                break
            case '10':
                end.slice(2,4) === '30' ? arr.push(101) : arr.push(101, 102)
                break
            case '11':
                end.slice(2,4) === '30' ? arr.push(111) : arr.push(111, 112)
                break
            case '12':
                end.slice(2,4) === '30' ? arr.push(121) : arr.push(121, 122)
                break
            case '13':
                end.slice(2,4) === '30' ? arr.push(131) : arr.push(131, 132)
                break
            case '14':
                end.slice(2,4) === '30' ? arr.push(141) : arr.push(141, 142)
                break
            case '15':
                end.slice(2,4) === '30' ? arr.push(151) : arr.push(151, 152)
                break
            case '16':
                end.slice(2,4) === '30' ? arr.push(161) : arr.push(161, 162)
                break
            case '17':
                end.slice(2,4) === '30' ? arr.push(171) : arr.push(171, 172)
                break
            default:
                // do nothing
        }
    }
    // start at xx30
    if (start.slice(2,4) === '30') {
        switch (start.slice(0,2)) {
            case '09':
                end.slice(2,4) === '00' ? arr.push(92) : arr.push(92, 101)
                break
            case '10':
                end.slice(2,4) === '00' ? arr.push(102) : arr.push(102, 111)
                break
            case '11':
                end.slice(2,4) === '00' ? arr.push(112) : arr.push(112, 121)
                break
            case '12':
                end.slice(2,4) === '00' ? arr.push(122) : arr.push(122, 132)
                break
            case '13':
                end.slice(2,4) === '00' ? arr.push(132) : arr.push(132, 141)
                break
            case '14':
                end.slice(2,4) === '00' ? arr.push(142) : arr.push(142, 151)
                break
            case '15':
                end.slice(2,4) === '00' ? arr.push(152) : arr.push(152, 161)
                break
            case '16':
                end.slice(2,4) === '00' ? arr.push(162) : arr.push(162, 171)
                break
            case '17':
                arr.push(172)
                break
            default:
                // do nothing
        }
    }
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
    // state updates if user creates/deletes reservation
    const [resDet, setResDet] = useState(resDetfirst)
    let [prevSeat, setprevSeat] = useState(resDetfirst[0])

    // level state
    const [level, setLevel] = useState(1)
    const handleChangeLevel = (event) => {
        setLevel(event.target.value)
    }
 
    // check in state
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
        // undefined for header hyperlink
        const seatNum = event.target.value === undefined ? String(resDet[0]) : event.target.id

        // seat info
        setSeatDet([seatNum[0], seatNum[1] === '0' ? seatNum.slice(2) : seatNum.slice(1), seatNum])

        // timetable
        // [DB int] checks "reservations" table
        const ttdatapre = dbRes.filter((element) => element.seat_id === Number(seatNum))
        const ttdata = []
        for (var element of ttdatapre) {
            timeToID(element.start_time, element.end_time, ttdata)
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
        // reservation shown
        if (resDet[0] === Number(seatNum)) {
            const resToShow = []
            timeToID(resDet[1], resDet[2], resToShow)
            for (var slot of resToShow) {
                ttCol[slot] = 'tt-res'
            }
        }
        setttCol(ttCol)
    };

    const handleResClose = () => {
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
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>
            </FormControl>
            <Typography variant='body1'>
                {resDet.length === 0 ? 
                    "Click on a seat to reserve"
                    : <span>Click on <span style={{color: '#bd00ff'}}>your seat </span>
                    or <a 
                    onClick={handleResOpen}
                    className='cancel'>here</a> to cancel</span>
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
                // fixed so i can get the horizontal scrollbar
                width: '90rem',
                margin: '30px auto 0',
            }}>
                <Lvl1 
                reserveModal={handleResOpen} 
                resDet={resDet.length !== 0 ? resDet : 'emp'} 
                prevSeat={[prevSeat, setprevSeat]} 
                dbSeats={seatInfo}
                />
                <Reserve
                open={openRes} 
                onClose={handleResClose} 
                seatDet={seatDet} 
                ttCol={ttCol}
                ttColpre={ttColpre}
                setResDet={setResDet}
                resDet={resDet}
                />
            </div>
        </ThemeProvider>

        </>
    )
}