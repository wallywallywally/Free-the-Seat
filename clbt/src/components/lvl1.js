// components
import Seat from './seat.js'

// mui
import {createTheme, styled} from '@mui/material/styles'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'
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
        }
    }
})


// main

// !!! how data works
// each seat has a unique id, including floor num
// data on seats stored on backend, passed as props to each floor
// map refreshes to show new status

export default function Lvl1() {
    return (
        <>
        <ThemeProvider theme={table}>
        <Grid container id='main' justifyContent={'space-between'}>

            <Grid container id='left-side' xs={4}>

                <Grid container id='left-top'>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>

                        <Grid item xs={12}>
                            <Table id='number'>1</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>
                    </TableFull>
                    </Grid>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>

                        <Grid item xs={12}>
                            <Table id='number'>2</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>
                    </TableFull>
                    </Grid>

                </Grid>

                <Grid container id='left-bottom'
                sx={{marginTop: '180px'}}>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>

                        <Grid item xs={12}>
                            <Table id='number'>3</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>
                    </TableFull>
                    </Grid>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>

                        <Grid item xs={12}>
                            <Table id='number'>4</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
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
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>

                        <Grid item xs={12}>
                            <Table id='number'>5</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>
                    </TableFull>
                    </Grid>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>

                        <Grid item xs={12}>
                            <Table id='number'>6</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>
                    </TableFull>
                    </Grid>

                </Grid>

                <Grid container id='right-bottom'
                sx={{marginTop: '180px'}}>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>

                        <Grid item xs={12}>
                            <Table id='number'>7</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>
                    </TableFull>
                    </Grid>

                    <Grid item xs={6}>
                    <TableFull container>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
                        </Grid>

                        <Grid item xs={12}>
                            <Table id='number'>8</Table>
                        </Grid>

                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'res'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'occ'}/>
                        </Grid>
                        <Grid item>
                            <Seat status={'emp'}/>
                        </Grid>
                        <Grid item>
                            <Seat />
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

// ! to fix
// idw Container for lvl to be responsive, just the top
// if viewport becomes smaller, add a scrollbar