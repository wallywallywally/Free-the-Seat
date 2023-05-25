import {useState} from 'react'

// mui
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SignIn({handleSIU}) {
    // sign in/up toggle
    const SIUtoggle = () => () => {handleSIU()}

    // ! integrate with sam
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }

    // student/staff select
    const [SS, setSS] = useState(1)
    const handleChangeSS = (event) => {
        setSS(event.target.value)
    }

    return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
                sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: '#c59e88' }}>
                <LockOutlinedIcon sx={{color: '#000'}}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="UserID"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControl 
                margin='normal'
                fullWidth
                >
                    <InputLabel id="ss-label">I am</InputLabel>
                    <Select
                        labelId="ss-label"
                        id="ss"
                        value={SS}
                        label="I am"
                        onChange={handleChangeSS}
                    >
                        {/* ! to fix
                        different length of menuitem affects width of entire box */}
                        <MenuItem value={1}>Student</MenuItem>
                        <MenuItem value={2}>Staff</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disableElevation
                    sx={{ 
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#e7be95',
                    color: '#000',
                    '&:hover': {
                        backgroundColor: 'rgba(231, 190, 149, 0.75)'
                    },
                    '&:active': {
                        backgroundColor: '#e7be95'
                    },
                }}>
                    Sign Up
                </Button>

                <Grid container>
                <Grid item>
                <Link href="#" variant="body2" onClick={SIUtoggle()}>
                    Have an account? Sign In
                </Link>
                </Grid>
                </Grid>

                </Box>
            </Box>
        </Grid>
    )
}