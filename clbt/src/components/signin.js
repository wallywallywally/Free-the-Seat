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


export default function SignIn({handleSIU, handleLogIn}) {
    // sign in/up toggle
    const SIUtoggle = () => () => {handleSIU()}

    // log in state
    const logInToggle = () => () => {handleLogIn()}

    // ! integrate with sam
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
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
            }}>
                <Avatar sx={{ m: 1, bgcolor: '#c59e88' }}>
                <LockOutlinedIcon sx={{color: '#000'}}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                
                <Box component="form" onSubmit={logInToggle()} sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="userID"
                    label="UserID"
                    name="userID"
                    // autoComplete="current-userID"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    // autoComplete="current-password"
                />
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
                    Sign In
                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2" onClick={SIUtoggle()}>
                            Don't have an account? Sign Up
                        </Link>
                    </Grid>
                </Grid>

                </Box>
            </Box>
        </Grid>
    )
}