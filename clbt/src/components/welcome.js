import {useState} from 'react'

// components
import SignIn from './signin.js'
import SignUp from './signup.js'

// mui
import Grid from '@mui/material/Grid'


export default function Welcome({handleLogIn}) {
    // sign in/up toggle
    const [sign, setSign] = useState(true)
    const SIUtoggle = (event) => {
        setSign(!sign)
    }

    // log in toggle
    const logInToggle = () => () => handleLogIn()

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>

            {/* image on the left */}
            <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                backgroundImage: 'url(./components/img/clb2.png)',    // ! to fix: LINK TO ACTUAL IMAGE
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#c59e88',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />

            {/* UI */}
            {sign === true ?
                <SignIn handleSIU={SIUtoggle} handleLogIn={logInToggle()}/>
                : <SignUp handleSIU={SIUtoggle} />
            }

        </Grid>
  );
}