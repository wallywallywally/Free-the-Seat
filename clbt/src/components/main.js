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
import Instructions from './modals/instructions'
import UserAlert from './modals/userAlert.js'
import StaffAlertTray from './modals/staffAlertTray.js'

// mui
import { Box, Button, Container, Typography } from '@mui/material'
import {createTheme} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { GoTrueAdminApi } from '@supabase/supabase-js'


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
                end.slice(2,4) === '00' ? arr.push(122) : arr.push(122, 131)
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

// get current time
export const getNow = () => {
    const time = new Date()
    const hours = `${time.getHours()}`
    const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`
    const now = hours + minutes
    return now
}

// seatInfo {101: 'emp',...} stores info for all seats
// seat ids: 101-559
const numSeats = 500
const seatInfo = {}
for (let i = 1; i <= numSeats; i++) {
    const seatNum = 100 + i
    // 1st for colour, 2nd for border
    seatInfo[seatNum] = ['emp', 'emp']
}
// deep copy for reset on selector change
const seatInfoCopy = JSON.stringify(seatInfo)

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
export default function Main({user, checkInSeat}) {
    // user session stuff
    const userid = user.id
    const staffid = "a1f89fe9-fe14-4d85-b898-601855aaf75d" //for staff auth
    // sign out callback
    const handleLogOutClick = () => {
        supabase.auth.signOut();
    }

    // level state
    const [level, setLevel] = useState(3)
    const handleChangeLevel = (event) => {
        setLevel(event.target.value)
    }

    // DB - getting reservations
    const [reservations, setReservations] = useState([])
    const [errorRes, setErrorRes] = useState(null)
    const fetchReservations = useCallback(() => {
        supabase
            .from("reservations")
            .select()
            .order("id")
            .then(({ data: reservations, error }) => {
                setReservations(reservations);
                setErrorRes(error);
            })
            .catch((error) => {
                setErrorRes(error);
            });
    }, [setReservations, setErrorRes])
    
    // res states
    const [resDet, setResDet] = useState([])
    const [checkRes, setCheckRes] = useState(false)
    useEffect(() => {
        fetchReservations()
    }, [checkRes])  // eslint-disable-line react-hooks/exhaustive-deps
    // getting resDet - check element.id is not in our resDet id
    const [ourResIDs, setOurResIDs] = useState([])
    const getResDet = useCallback((allRes) => {
        const IDtoPush = []
        const resDettoPush = []
        for (var element of allRes) {
            if (!ourResIDs.includes(element.id)) {
                IDtoPush.push(element.id)
                resDettoPush.push([element.seat_id, element.start_time, element.end_time, element.id])
            }
        }
        setOurResIDs([...ourResIDs, ...IDtoPush])
        setResDet([...resDet, ...resDettoPush])
    }, [setOurResIDs, setResDet])   // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        // add to resDet if it's user's res and doesn't already exist
        getResDet(reservations.filter((res) => res.user_id === userid))
    }, [reservations])  // eslint-disable-line react-hooks/exhaustive-deps

    // get info on upcoming res to for display
    const resExists = resDet.length !== 0
    let upcomingRes
    if (resExists) {
        upcomingRes = resDet.sort(function(a,b) {
            if (Number(a[1]) === Number(b[1])) return a[0] - b[0]
            return Number(a[1]) - Number(b[1])
        })[0]
    }
    const [upcomingInfo, setUpcomingInfo] = useState([])
    useEffect(() => {
        if (resExists) {
            const element = document.getElementById(upcomingRes[0])
            const lvl = element.closest('.lvl').id
            const seat = element.value
            setUpcomingInfo([lvl, seat, upcomingRes[1], upcomingRes[2]])
        }
    }, [upcomingRes])   // eslint-disable-line react-hooks/exhaustive-deps

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
    for (var resCol of resDet) {
        if (`${resCol[1]} - ${resCol[2]}` === slot) {
            seatInfo[resCol[0]][0] = 'ourres'
        }
    }

    // user already has a reservation for selected slot
    const userResSlots = []
    for (var reservationD of resDet) {
        const resID = []
        timeToID(reservationD[1], reservationD[2], resID)
        for (var eleID of resID) {
            userResSlots.push(eleID)
        }
    }
    let userResSlotBool = false
    for (var slotIDtest of slotID) {
        userResSlotBool = userResSlots.includes(slotIDtest)
        if (userResSlotBool) break
    }

    // reserve modal
    const [openRes, setOpenRes] = useState(false)
    // seat info
    const [seatDet, setSeatDet] = useState([])
    const [ttCol, setttCol] = useState({})
    const [full, setFull] = useState(false)
    // reservation to delete
    const [resToDel, setResToDel] = useState([])
    // console.log(seatDet)
    const handleResOpen = useCallback((event, CISinfo, CISres) => {
        setOpenRes(true)

        // update modal
        // seat details
        let level, seatId, seatNum
        if (CISinfo) {
            // QR code's checkInSeat URL
            seatId = CISinfo[2]
            seatNum = CISinfo[1]
            setSeatDet([CISinfo[0], CISinfo[1], CISinfo[2]])
        } else if (event.target.id === 'delRes') {
            // manageRes
            const resDel = event.target.value.split(',')
            const delLvl = resDel[0]
            seatId = resDel[2]
            seatNum = resDel[1]
            setSeatDet([delLvl, seatNum, seatId])
            // pass reservation to delete [id, start, end] to reserve.js
            setResToDel([Number(resDel[5]), resDel[3], resDel[4]])
        } else {
            // default clicking on seats
            level = event.target.closest('.lvl').id
            seatId = event.target.id
            seatNum = event.target.value
            setSeatDet([level, seatNum, seatId])
        }

        // timetable
        // checks "reservations" table
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
        // check in
        if (CISres) {
            const CIStt = []
            timeToID(CISres[1], CISres[2], CIStt)
            for (var CISslot of CIStt) {
                ttCol[CISslot] = 'tt-checkin'
            }
        }
        setttCol(ttCol)
        
        // seat is fully booked
        setFull(Object.values(ttCol).filter((element) => element === 'tt-emp').length === 0 ? true : false)
    }, [resDet])    // eslint-disable-line react-hooks/exhaustive-deps
    const handleResClose = () => {
        setOpenRes(false)
        setToCheckIn(false)
    }
    // delete modal
    const [delMod, setDelMod] = useState(false)

    // manage reservations modal
    const [openManage, setOpenManage] = useState(false)
    const handleManageOpen = () => setOpenManage(true)
    const handleManageClose = () => setOpenManage(false)

    // instructions modal
    const [openInt, setOpenInt] = useState(false)
    const handleIntOpen = () => setOpenInt(true)
    const handleIntClose = () => setOpenInt(false)

    // check in
    // check if user is checked in
    const [checkedIn, setCheckedIn] = useState(false) 
    for (var res of resDet) {
        if (res.checked_in === true) {
            setCheckedIn(true)
        }
    }
    // QR code scanned and we get to URL
    const [toCheckIn, setToCheckIn] = useState(false)
    const [checkInRes, setCheckInRes] = useState([])
    // const [checkInRes, setCheckInRes] = useState([125, '1330', '1430', 92]) // for testing
    const checkInModal = useCallback(() => {
        if (checkInSeat) {
            // seat details
            const element = document.getElementById(checkInSeat)
            const CISlvl = element.closest('.lvl').id
            const CISnum = element.value
            
            // reservation to check in to
            // get time when QR code is scanned
            // const now = getNow()
            const now = '1430'
            // check that current time and seat has reservation + track it
            const checkInReservation = resDet.filter(ele => ele[0] === Number(checkInSeat))
                .filter(ele => Number(now) - Number(ele[1]) >= 0)
                .filter(ele => Number(ele[2]) - Number(now) >= 0)[0]

            if (checkInReservation !== undefined) {
                setCheckInRes(checkInReservation)
                setToCheckIn(true)
            }
            // open modal
            handleResOpen(null, [CISlvl, CISnum, checkInSeat], checkInReservation !== undefined && checkInReservation)
        }
    }, [checkInSeat, handleResOpen])    // eslint-disable-line react-hooks/exhaustive-deps
    // count so that modal only pops up when we first get to the URL
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (count <= 2) {
            checkInModal()
            setCount(count + 1)
        }
    }, [checkInModal])  // eslint-disable-line react-hooks/exhaustive-deps
    // change seat colour
    if (checkedIn && checkInRes.length !== 0) {
        seatInfo[checkInRes[0]][0] = 'checkin'
    }

    // break modal
    const [openBreak, setOpenBreak] = useState(false)
    const [onBreak, setOnBreak] = useState(false)
    const handleBreakOpen = () => setOpenBreak(true)
    const handleBreakClose = () => setOpenBreak(false)

    // user alert modal
    const [openUA, setOpenUA] = useState(false)
    const handleUAClose = () => setOpenUA(false)

    // reservation is done
    const [UAseat, setUAseat] = useState([])
    const handleResDone = useCallback(() => {
        // check if reservation is done
        const resDoneExp = (getNow() - checkInRes[2] > 0) && checkedIn
        if (resDoneExp) {
            // open user alert modal
            setUAseat(checkInRes[0])
            setOpenUA(true)
            
            // reset
            setCheckedIn(false)
            setCheckInRes([])
        }
    }, [checkedIn, checkInRes])
    useEffect(() => {
        const CTnow = new Date()
        for (var timeslot of Object.values(timeslots30)) {
            // get times - 0900, 0930, ..., 1800
            const [hour, min] = [Number(timeslot.slice(7,9)), Number(timeslot.slice(9,11))]
            const timeMS = new Date(CTnow.getFullYear(), CTnow.getMonth(), CTnow.getDate(), hour, min, 0, 0).getTime() - CTnow
            // check at these times
            setTimeout(handleResDone, timeMS)
        }
    }, [handleResDone])


    // STAFF
    const [staff, setStaff] = useState(false)
    
    // staff alert modal
    const [openSA, setOpenSA] = useState(false)
    const handleSAOpen = () => setOpenSA(true)
    const handleSAClose = () => setOpenSA(false)

    // [DB int] get seatsToClear
    // ! to implement
    const [seatsToClear, setSeatsToClear] = useState([
        // for testing
        // {id: 1, seat_id: 140, time: '1000'},
        // {id: 2, seat_id: 142, time: '1500'}
    ])
    const [errorSTC, setErrorSTC] = useState(null)
    const fetchSeatsToClear = useCallback(() => {
        supabase
            .from("seats_to_clear")
            .select()
            .order("id")
            .then(({ data: seatsToClear, error }) => {
                setSeatsToClear(seatsToClear);
                setErrorSTC(error);
            })
            .catch((error) => {
                setErrorSTC(error);
            });
    }, [setSeatsToClear, setErrorSTC])
    const [checkSTC, setCheckSTC] = useState(false)
    useEffect(() => {
        fetchSeatsToClear()
    }, [checkSTC])  // eslint-disable-line react-hooks/exhaustive-deps

    const STCexists = seatsToClear.length !== 0
    // change seat colour
    if (STCexists) {
        for (var stc of seatsToClear) {
            seatInfo[stc.seat_id] = ['stafftoclear', 'stc']
        }
    }


    // main
    return(
        <>
        {/* main header */}
        <Container sx={{marginTop: '30px'}}>
        <Box 
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        >
            <div className='headbox' >
                <Typography variant='h5' sx={{marginRight: 'auto'}}>
                    Welcome back, {user.email}!
                </Typography>    
            </div>

            <div className='headbox'>
                <Button
                onClick={handleLogOutClick}
                variant="contained"
                disableElevation
                sx={{ 
                    borderRadius: 0.5,
                    backgroundColor: '#fb7979',
                    color: '#000',
                    '&:hover': {backgroundColor: 'rgba(251, 121, 121, 0.75)'},
                    '&:active': {backgroundColor: '#fb7979'},
                }}
                >
                    Log out
                </Button>
            </div>

            <div className='headbox'>
                <Typography variant='h4'
                sx={{
                    marginLeft: 'auto',
                    textAlign: 'right'
                }}>
                    Central Library Tracker
                </Typography>
            </div>
        </Box>
        </Container>

        {/* sub-header */}
        <Container sx={{marginTop: '15px'}}>
        <Box
        display='flex'
        justifyContent='space-between'
        gap='2rem'
        >
            {/* level select */}
            <FormControl sx={{width: 100, zIndex: '100'}}>
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
            <Box
            display='flex'
            flexDirection='column'
            gap='1rem'
            visibility={staff ? 'hidden' : 'visible'}
            >
                {/* instructions */}
                <Button
                onClick={handleIntOpen}
                variant="contained"
                disableElevation
                sx={{
                    backgroundColor: '#e7be95',
                    color: '#000',
                    borderRadius: 0.7,
                    border: '1px solid rgba(0,0,0,0.25)',
                    width: '10rem',
                    '&:hover': {backgroundColor: 'rgba(231, 190, 149, 0.7)'},
                    '&:active': {backgroundColor: '#e7be95'},
                    zIndex: '100'
                }}>
                    How it works
                </Button>                
            </Box>
        </Box>
        </Container>

        {staff ?
        <Container sx={{textAlign: 'center', marginTop:'-2.5rem', marginBottom: '3rem'}}>
            <Box
            display='flex'
            justifyContent='center'
            marginBottom='1rem'
            >
                <Typography variant='h6'>
                    Click on a seat for more information
                </Typography>
            </Box>
            {/* staff alert modal */}
            <Button
                onClick={handleSAOpen}
                variant='contained'
                disableElevation
                className='staffAlert'
                sx={{
                    fontWeight: STCexists && 'bold',
                    color: STCexists ? '#ff6e05' : 'rgb(90, 90, 90)',
                    border: STCexists ? '2px solid rgba(255,0,0,0.5)' : '2px solid rgba(80, 80, 80, 0.4)',
                    '&:hover': {background: STCexists ? 'rgba(255, 110, 5, 0.25)' : 'rgba(80, 80, 80, 0.2)'},
                }}
                >
                    Check alerts
            </Button>
        </Container>
        :
        <>
            {/* info tag */}
            <Container sx={{textAlign: 'center', marginTop:'-2.5rem', marginBottom: '3rem'}}>
            <Box sx={{position: 'relative'}}>
                <Typography variant='h6' marginBottom={2}>
                    {!resExists ?
                    'Select a duration and time to start reserving' :
                    (checkedIn === false ?
                        <span>Upcoming reservation at level <span style={{color: '#bd00ff', fontWeight: '700'}}>{upcomingInfo[0]}</span> seat <span style={{color: '#bd00ff', fontWeight: '700'}}>
                        {upcomingInfo[1]}</span> from <span style={{fontWeight: '700'}}>{upcomingInfo[2]} - {upcomingInfo[3]}</span></span>
                        : <span>Now studying at level <span style={{color: '#0085ff', fontWeight: '700'}}>{upcomingInfo[0]}</span> seat <span style={{color: '#0085ff', fontWeight: '700'}}>
                        {upcomingInfo[1]}</span> until <span style={{fontWeight: '700'}}>{upcomingInfo[3]}</span></span>
                    )
                    }
                </Typography>
                {/* manage res modal */}
                <Button
                value='cancelRes'
                onClick={handleManageOpen}
                variant='contained'
                disableElevation
                className='cancel'
                sx={{
                    visibility: resExists ? 'visible' : 'hidden',
                }}
                >
                    Click here to manage reservations
                </Button>
                {/* break button */}
                <Button
                id='break'
                variant='contained'
                disableElevation
                onClick={handleBreakOpen}
                className='break'
                sx={{
                    visibility: checkedIn ? 'visible' : 'hidden',
                    position: 'absolute',
                    transform: 'translate(0%, 0%)',
                    right: '0'
                }}
                >
                    Take a break
                </Button>
            </Box>
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
                position: 'relative'
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
                        {timetable.map((ele, i) => (
                            <MenuItem key={i} value={dur === 30 ? timeslots30[ele]: timeslots60[ele]}>
                                {dur === 30 ? timeslots30[ele]: timeslots60[ele]}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/* warning for same slot, diff seat */}
                <Typography variant='body1' 
                sx={{
                    visibility: userResSlotBool ? 'visible' : 'hidden',
                    position: 'absolute',
                    transform: 'translate(95%, 45%)',
                    textAlign: 'center',
                    border: '2px solid rgba(251, 121, 121, 0.75)',
                    padding: '10px'
                }} 
                >
                    A reservation for this slot exists<br/>You cannot reserve another seat
                </Typography>
            </Box>
        </>
        }

        {/* level layout */}
        <ThemeProvider theme={levelLayout}>
            <div
            style={{
                // fixed so i can get the horizontal scrollbar
                minWidth: '50rem',
                margin: 'auto',
                marginBottom: '2rem',
            }}>
                <Lvlx
                level={level}
                reserveModal={handleResOpen} 
                seatInfo={seatInfo}
                />
            </div>
        </ThemeProvider>


        {/* modals */}
        <Reserve
        open={openRes} onClose={handleResClose} 
        seatDet={seatDet}
        ttCol={ttCol}
        checkRes={[checkRes, setCheckRes]} ourResIDs={[ourResIDs, setOurResIDs]} resDet={resDet}
        slot={[slot, slotID]} resetSelect={[setDur, setSlot, setSlotDis]} tobeOcc={tobeOcc}
        full={full}
        userID = {userid}
        resToDel={resToDel} delMod={delMod} setDelMod={setDelMod}
        userResSlotBool={userResSlotBool}
        toCheckIn={toCheckIn} checkInRes={checkInRes} 
        checkedIn={checkedIn} setCheckedIn={setCheckedIn}
        />
        <Manage
        open={openManage}
        onClose={handleManageClose} 
        resDet={resDet}
        handleResOpen={handleResOpen}
        setDelMod={setDelMod}
        />
        <Instructions
        open={openInt}
        onClose={handleIntClose} 
        />
        <Break
        open={openBreak}
        onClose={handleBreakClose} 
        checkInRes={checkInRes} setCheckInRes={setCheckInRes}
        checkedIn={[checkedIn, setCheckedIn]}
        onBreak={[onBreak, setOnBreak]}
        userID = {userid}
        />
        <UserAlert
        open={openUA}
        onClose={handleUAClose}
        UAseat={UAseat}
        />
        <StaffAlertTray
        open={openSA}
        onClose={handleSAClose}
        seatsToClear={seatsToClear}
        setSeatsToClear={setSeatsToClear}
        checkSTC={[checkSTC, setCheckSTC]}
        />
        </>
    )
}