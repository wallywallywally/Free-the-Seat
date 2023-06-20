import './styles.css'
import {useState, useEffect, useCallback } from "react"
import { supabase } from "../supabase"

// components
// levels 
import Lvl3 from './levels/lvl3.js'
import Lvl4 from './levels/lvl4.js'
import Lvl5 from './levels/lvl5.js'
import Lvl6 from './levels/lvl6.js'
// modals
import Reserve from './modals/reserve.js'
import Break from './modals/break.js'
import Manage from './modals/manageres.js'

// mui
import { Box, Button, Container, Typography } from '@mui/material'
import {createTheme} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// theme
const levelLayout = createTheme({
})

// info for timetable
const timetable = [91, 92, 101, 102, 111, 112, 121, 122, 131, 132, 141, 142, 151, 152, 161, 162, 171, 172]
const timeslots30 = {
    91: '0900 - 0930', 
    92: '0930 - 1000', 
    101: '1000 - 1030', 
    102: '1030 - 1100', 
    111: '1100 - 1130', 
    112: '1130 - 1200', 
    121: '1200 - 1230', 
    122: '1230 - 1300', 
    131: '1300 - 1330', 
    132: '1330 - 1400', 
    141: '1400 - 1430', 
    142: '1430 - 1500', 
    151: '1500 - 1530', 
    152: '1530 - 1600', 
    161: '1600 - 1630', 
    162: '1630 - 1700',
    171: '1700 - 1730', 
    172: '1730 - 1800', 
}
const timeslots60 = {
    91: '0900 - 1000', 
    92: '0930 - 1030', 
    101: '1000 - 1100', 
    102: '1030 - 1130', 
    111: '1100 - 1200', 
    112: '1130 - 1230', 
    121: '1200 - 1300', 
    122: '1230 - 1330', 
    131: '1300 - 1400', 
    132: '1330 - 1430', 
    141: '1400 - 1500', 
    142: '1430 - 1530', 
    151: '1500 - 1600', 
    152: '1530 - 1630', 
    161: '1600 - 1700', 
    162: '1630 - 1730', 
    171: '1700 - 1800', 
}

// [DB] seats: 
// [id, light_status, floor]

// [DB int] mimics "reservations" table
// a database filtered by level is passed into each Lvl
const dbRes = [
    {id: 22, user_id: 123, seat_id: 101, start_time: "1700", end_time: "1800"},
    {id: 21, user_id: 123, seat_id: 101, start_time: "1530", end_time: "1600"},
    {id: 25, user_id: 123, seat_id: 105, start_time: "1530", end_time: "1600"},
    {id: 28, user_id: 123, seat_id: 104, start_time: "1530", end_time: "1600"},
    {id: 91, user_id: 236, seat_id: 101, start_time: "1330", end_time: "1430"},
    {id: 32, user_id: 553, seat_id: 112, start_time: "0900", end_time: "1000"},
    {id: 41, user_id: 598, seat_id: 112, start_time: "1330", end_time: "1430"},
    {id: 52, user_id: 111, seat_id: 102, start_time: "1400", end_time: "1430"},
    {id: 61, user_id: 112, seat_id: 102, start_time: "1430", end_time: "1530"},
    {id: 63, user_id: 155, seat_id: 101, start_time: "0930", end_time: "1030"},

    {id: 3, user_id: 553, seat_id: 103, start_time: "0900", end_time: "1000"},
    {id: 2, user_id: 123, seat_id: 103, start_time: "1000", end_time: "1100"},
    {id: 1, user_id: 236, seat_id: 103, start_time: "1100", end_time: "1200"},
    {id: 4, user_id: 598, seat_id: 103, start_time: "1200", end_time: "1300"},
    {id: 5, user_id: 111, seat_id: 103, start_time: "1300", end_time: "1400"},
    {id: 6, user_id: 112, seat_id: 103, start_time: "1400", end_time: "1500"},
    {id: 7, user_id: 155, seat_id: 103, start_time: "1500", end_time: "1600"},
    {id: 8, user_id: 155, seat_id: 103, start_time: "1600", end_time: "1700"},
    {id: 9, user_id: 155, seat_id: 103, start_time: "1700", end_time: "1800"},
]

// seatInfo {101: 'emp',...} stores info for all seats
// !! initialise according to seat_ids
const numSeats = 120
const seatInfo = {}
for (let i = 1; i <= numSeats; i++) {
    const seatNum = 100 + i
    // 1st for colour, 2nd for border
    seatInfo[seatNum] = ['emp', 'emp']
}
// deep copy for reset on selector change
const seatInfoCopy = JSON.stringify(seatInfo)

// turn timing into id (0900 - 0930 -> 91)
export const timeToID = (start, end, arr) => {
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

// Lvlx display
function Lvlx(props) {
    let Lvlx
    switch(props.level) {
        case 3:
            Lvlx = Lvl3
            break
        case 4:
            Lvlx = Lvl4
            break
        case 5:
            Lvlx = Lvl5
            break
        case 6:
            Lvlx = Lvl6
            break
        default:
            Lvlx = Lvl3
    }
    return <Lvlx {...props} />
}


// main
export default function Main({user}) {
    const userid = user.id

    // level state
    const [level, setLevel] = useState(3)
    const handleChangeLevel = (event) => {
        setLevel(event.target.value)
    } 

    // DB - getting reservations
    const [reservations, setReservations] = useState([])
    const [error, setError] = useState(null)
    const fetchReservations = useCallback(() => {
        supabase
            .from("reservations")
            .select()
            .order("id")
            .then(({ data: reservations, error }) => {
                setReservations(reservations);
                setError(error);
            })
            .catch((error) => {
                setError(error);
            });
    }, [setReservations, setError]);
    useEffect(() => {
        fetchReservations();
    }, [fetchReservations]);
    // check for reservation on the first time, goes through database and checks if userid in reservations = user id of session
    let resDetfirst = []
    // !switch to actual DB
    for (var element of reservations) {
        if (element.user_id === user.id) {
            resDetfirst.push([element.seat_id, element.start_time, element.end_time, element.id])
        }
    }   
    // state updates if user creates/deletes reservation
    
    const [resDet, setResDet] = useState(resDetfirst)
    const resDetInfo = [String(resDet[0])[0], String(resDet[0])[1] === '0' ? String(resDet[0])[2] : String(resDet[0]).slice(1,3)] // !res

    // selects
    // 1. duration
    const [dur, setDur] = useState('')
    const handleChangeDur = (event) => {
        setDur(event.target.value)
        // reset
        setSlot('')
        setSlotDis(false)
    }
    // 2. time slot
    const [slot, setSlot] = useState('')
    const [slotDis, setSlotDis] = useState(true)
    const handleChangeSlot = (event) => {
        setSlot(event.target.value)
    }
    // process DB to update seatInfo for Lvlx display
    const slotID = []
    timeToID(slot.slice(0,4), slot.slice(7, 11), slotID)
    const tobeOccpre = []
    // !switch to actual DB
    for (var reservation of reservations) {
        const resID = []
        timeToID(reservation.start_time, reservation.end_time, resID)
        // check slotID in resID -> these are all 'occ'
        for (var ele of slotID) {
            resID.includes(ele) && tobeOccpre.push(reservation.seat_id)
        }
    }
    let tobeOcc = [...new Set(tobeOccpre)]
    // reset
    Object.assign(seatInfo, JSON.parse(seatInfoCopy))
    // display occ
    for (var seat of tobeOcc) {
        seatInfo[seat][0] = 'occ'
    }
    // display for reserved seats
    // border: purple if reserved
    for (var resBor of resDet) {
        seatInfo[resBor[0]][1] = 'res'
    }
    // colour: green/red/purple depending on status
    // ! test after DB CREATE
    for (var resCol of resDet) {
        if (`${resCol[1]} - ${resCol[2]}` === slot) {
            seatInfo[resCol[0]][0] = 'ourres'
        }
    }


    // reserve modal
    const [openRes, setOpenRes] = useState(false)
    // seat info
    const [seatDet, setSeatDet] = useState([])
    const [ttCol, setttCol] = useState({})
    const [full, setFull] = useState(false)
    // reservation to delete
    const [resToDel, setResToDel] = useState([])
    const handleResOpen = (event) => {
        setOpenRes(true)

        // update modal
        let seatId, seatNum
        if (event.target.id === 'delRes') {
            const resDel = event.target.value.split(',')
            seatId = resDel[2]
            seatNum = resDel[1]
            // pass reservation to delete to reserve.js
            setResToDel([Number(resDel[5]), resDel[3], resDel[4]])
        } else {
            seatId = event.target.id
            seatNum = event.target.value
        }

        // seat details
        setSeatDet([level, seatNum, seatId])

        // timetable
        // checks "reservations" table
        // !switch to actual DB
        const ttdatapre = reservations.filter((element) => element.seat_id === Number(seatId))
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
        for (var res of resDet) {
            const resToShow = []
            if (res[0] === Number(seatId)) {
                timeToID(res[1], res[2], resToShow)
            }
            for (var slot of resToShow) {
                ttCol[slot] = 'tt-res'
            }
        }
        setttCol(ttCol)

        // seat is fully booked
        setFull(Object.values(ttCol).filter((element) => element === 'tt-emp').length === 0 ? true : false)
    }
    const handleResClose = () => setOpenRes(false)
    // delete modal
    const [delMod, setDelMod] = useState(false)

    // manage reservations modal
    const [openManage, setOpenManage] = useState(false)
    const handleManageOpen = () => setOpenManage(true)
    const handleManageClose = () => setOpenManage(false)


    // check in state
    const [checkin, setCheckin] = useState(false)

    // break modal
    const [openBreak, setOpenBreak] = useState(false)
    const handleBreakOpen = () => setOpenBreak(true)
    const handleBreakClose = () => setOpenBreak(false)

    //sign out callback
    const handleLogOutClick = () => {
        supabase.auth.signOut();
      };
    // main
    // ! responsive or fixed
    // Lvlx to be fixed, so we can scroll
    // Header and button can be position: fixed ?
    return(
        <>
        {/* main header */}
        <Container sx={{marginTop: '30px'}}>
        <Box 
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        >
            <Typography variant='h5'>
                Welcome back, {user.email}!
            </Typography>    

            <Button
            variant="text"
            sx={{ color: "black" }}
            onClick={handleLogOutClick}
          >
            Log out
            </Button>

            <Typography variant='h4'
            sx={{textAlign: 'right'}}>
                Central Library Tracker
            </Typography>
        </Box>
        </Container>

        {/* level select */}
        <Container sx={{marginTop: '15px'}}>
        <Box
        display='flex'
        alignItems='center'
        gap='2rem'
        >
            <FormControl sx={{width: 100}}>
                <InputLabel id="level-select-label">Level</InputLabel>
                <Select
                    labelId="level-select-label"
                    id="level-select"
                    value={level}
                    label="Level"
                    onChange={handleChangeLevel}
                >
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                </Select>
            </FormControl>
        </Box>
        </Container>

        {/* info tag */}
        <Container sx={{textAlign: 'center', marginTop:'-1rem', marginBottom: '3rem'}}>
            {resDet.length === 0 &&
            <Typography variant="body1">
                Select a duration and time to start reserving
            </Typography>
            }

            {/* upcoming - changes to show check in */}
            <Typography variant='h6'
            sx={{
                visibility: resDet.length === 0 ? 'hidden' : 'visible',
                marginBottom: 2
            }}>
                {checkin === false ?
                    <span>Upcoming reservation at level <span style={{color: '#bd00ff', fontWeight: '700'}}>{resDetInfo[0]}</span> seat <span style={{color: '#bd00ff', fontWeight: '700'}}>
                    {resDetInfo[1]}</span> from <span style={{fontWeight: '700'}}>{resDet[1]} - {resDet[2]}</span></span>
                    : <span>Now studying at level <span style={{color: '#0085ff', fontWeight: '700'}}>{resDetInfo[0]}</span> seat <span style={{color: '#0085ff', fontWeight: '700'}}>
                    {resDetInfo[1]}</span> until <span style={{fontWeight: '700'}}>{resDet[2]}</span></span>
                }
            </Typography>

            {/* if you have more reservations, opens a new modal to show */}
            <Typography variant='body1'>
                {resDet.length !== 0 &&
                    <span>Click <button
                    value='cancelRes'
                    onClick={handleManageOpen}
                    className='cancel'>here</button> to manage reservations</span>
                }
            </Typography>
            
        </Container>

        {/* time slot selector */}
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            marginBottom: 5,
            marginTop: -2,
        }}
        >
            {/* 1. duration */}
            <FormControl sx={{width: 170}}>
                <InputLabel id="time-dur-label">Duration</InputLabel>
                <Select
                    labelId="time-dur-label"
                    id="time-dur"
                    value={dur}
                    label="Duration"
                    onChange={handleChangeDur}
                >
                    <MenuItem value={30}>30 min</MenuItem>
                    <MenuItem value={60}>1 hour</MenuItem>
                </Select>
            </FormControl>      
            {/* 2. time slot */}
            <FormControl sx={{width: 170}} disabled={slotDis}>
                <InputLabel id="time-slot-label">Time</InputLabel>
                <Select
                    labelId="time-slot-label"
                    id="time-slot"
                    value={slot}
                    label="Time"
                    onChange={handleChangeSlot}
                >
                    {timetable.map((ele) => (
                        <MenuItem key={timetable.indexOf(ele)} value={dur === 30 ? timeslots30[ele]: timeslots60[ele]}>
                            {dur === 30 ? timeslots30[ele]: timeslots60[ele]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>

        {/* level layout */}
        <ThemeProvider theme={levelLayout}>
            <div
            style={{
                // fixed so i can get the horizontal scrollbar
                minWidth: '50rem',
                margin: 'auto',
                marginBottom: '2rem'
            }}>
                <Lvlx
                level={level}
                reserveModal={handleResOpen} 
                seatInfo={seatInfo}
                />
            </div>
        </ThemeProvider>

        {/* checked in */}
        {checkin &&
        <>
            <Typography 
            variant='body1' 
            sx={{
                textAlign: 'center',
                marginBottom: '2rem'
            }}>
                If you are away from your seat for more than <span style={{fontWeight: 'bold'}}>5</span> min,
                <br/> your seat will be marked as empty and your items will be cleared 
            </Typography>
            <Box
            display='flex'
            justifyContent='center'
            sx={{marginBottom: 4}}
            >
                <Button
                id='break'
                variant='contained'
                disableElevation
                onClick={handleBreakOpen}
                sx={{
                    backgroundColor: '#e7be95',
                    color: '#000',
                    borderRadius: 0.7,
                    border: '1px solid rgba(0,0,0,0.25)',
                    width: '10%',
                    '&:hover': {backgroundColor: 'rgba(231, 190, 149, 0.7)'},
                    '&:active': {backgroundColor: '#e7be95'},
                }}
                >
                    Take a break
                </Button>
            </Box>
        </>
        }

        {/* modals */}
        <Reserve
        open={openRes} onClose={handleResClose} 
        seatDet={seatDet} 
        ttCol={ttCol}
        
        setResDet={setResDet} resDet={resDet}
        slot={[slot, slotID]} tobeOcc={tobeOcc}
        full={full}
        userID = {userid}
        resToDel={resToDel} delMod={delMod} setDelMod={setDelMod}
        />
        <Break
        open={openBreak}
        onClose={handleBreakClose} 
        seatDet={seatDet}
        />
        <Manage
        open={openManage}
        onClose={handleManageClose} 
        resDet={resDet}
        handleResOpen={handleResOpen}
        setDelMod={setDelMod}
        />
        </>
    )
}