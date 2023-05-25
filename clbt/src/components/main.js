import {useState} from "react"

// components
import Lvl1 from './lvl1.js'
import Reserve from './reserve.js'

// mui
import { Box, Container, Typography } from '@mui/material'
import {createTheme, styled} from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

// 
// theme for tables - no elevation
// !!! to change defaultProps
const levelLayout = createTheme({
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 0
            }
        },
        MuiContainer: {
            defaultProps: {
                maxWidth: 'xl'
            }
        }
    }
})

// main
export default function Main() {
    // state - level
    const [level, setLevel] = useState(1)
    const handleChangeLevel = (event) => {
        setLevel(event.target.value)
    }

    // main
    return(
        <>
        {/* main landing stuff */}
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
                Click on a seat to reserve
            </Typography>
        </Box>
        </Container>


        {/* changes depending on floor */}
        {/* each floor has a different layout */}
        {/* so seats are reusable, but tables and layout are distinct - distinct components */}
        <ThemeProvider theme={levelLayout}>
            <Container
            sx={{marginTop: '30px'}}
            >
                {/* <Lvl1 /> */}
                <Reserve />
            </Container>
        </ThemeProvider>

        </>
    )
}