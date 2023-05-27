import {useState} from "react"

// components
import Lvl1 from './lvl1.js'
import Reserve from './reserve.js'

// mui
import { Box, Container, Typography } from '@mui/material'
import {createTheme} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// database integration
// mimics Reservation table
// a database filtered by level is passed into each Lvl
const database = [
    {id: 2, user_id: 123, seat_id: 101, start_time: "15:30", end_time: "16:00"},
    {id: 1, user_id: 236, seat_id: 101, start_time: "14:00", end_time: "15:00"},
    {id: 3, user_id: 553, seat_id: 112, start_time: "09:00", end_time: "10:00"},
    {id: 4, user_id: 598, seat_id: 112, start_time: "13:30", end_time: "14:30"},
    {id: 5, user_id: 111, seat_id: 102, start_time: "14:00", end_time: "14:30"},
    {id: 6, user_id: 111, seat_id: 102, start_time: "14:30", end_time: "15:30"},
]

// 1 JSON array - 2 main functions
// 1. display (DONE)
// query by floor
// each dict: read seat + read occupancy at that time (current time falls between start and end)
// update display

// 2. reservation
// filter array by id to find reservation
// check seat number against level
// res: 1 dict - update reserved, display if it's the correct floor
// no res: null - update reserved

// theme
const levelLayout = createTheme({
})

// main
// ! to decide
// responsive: header ?
// fixed: level
export default function Main({userid}) {
    // process userid to check for reservation
    let resDet = []
    let reserved = false
    for (var element of database) {
        if (element.user_id === userid) {
            resDet = [element.seat_id, element.start_time, element.end_time]
            reserved = true
            break
        } else {
            reserved = false
        }
    }

    // level state
    const [level, setLevel] = useState(1)
    const handleChangeLevel = (event) => {
        setLevel(event.target.value)
    }
 
    // checked in state
    const [checkin, setCheckin] = useState(false)

    // reserve modal
    const [openRes, setOpenRes] = useState(false);
    const [selectedValue, setSelectedValue] = useState(5);

    const handleResOpen = () => {
        setOpenRes(true);
    };

    const handleResClose = (value) => {
        setOpenRes(false);
        setSelectedValue(value);
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
                {reserved === false ? 
                    "Click on a seat to reserve"
                    : <p>Click on <span style={{color: '#bd00ff'}}>your seat</span> to cancel</p>
                }
            </Typography>
        </Box>
        </Container>

        {/* info tag */}
        <Container sx={{textAlign: 'center', marginBottom: '4rem'}}>
            <Typography variant="body1" 
            sx={{
                visibility: reserved === false ? 'hidden' : 'visible'
            }}>
                {checkin === false ?
                    <p>You have reserved level <span style={{color: '#bd00ff', fontWeight: '700'}}>{String(resDet[0]).substring(0,1)}</span> seat <span style={{color: '#bd00ff', fontWeight: '700'}}>
                    {String(resDet[0]).substring(1,2) === '0' ? String(resDet[0]).substring(2,3) : String(resDet[0]).substring(1,3)}</span> from <span style={{fontWeight: '700'}}>{resDet[1]} - {resDet[2]}</span></p>
                    : <p>You are now studying at level <span style={{color: '#0085ff', fontWeight: '700'}}>{String(resDet[0]).substring(0,1)}</span> seat <span style={{color: '#0085ff', fontWeight: '700'}}>
                    {String(resDet[0]).substring(1,2) === '0' ? String(resDet[0]).substring(2,3) : String(resDet[0]).substring(1,3)}</span> until <span style={{fontWeight: '700'}}>{resDet[2]}</span></p>
                }
            </Typography>
        </Container>

        {/* level layout */}
        {/* each floor has a different layout that i will just hardcode */}
        <ThemeProvider theme={levelLayout}>
            <div
            style={{
                // ! fixed so i can get the horizontal scrollbar
                width: '90rem',
                margin: '30px auto 0',
            }}>
                <Lvl1 reserve={handleResOpen} database={database} reservation={reserved === true ? resDet : 'emp'} />
                <Reserve open={openRes} selectedValue={selectedValue} onClose={handleResClose} />
            </div>
        </ThemeProvider>

        </>
    )
}