import { Auth } from "@supabase/auth-ui-react" 
import Grid from '@mui/material/Grid'
import { ThemeSupa } from "@supabase/auth-ui-shared"
import {supabase } from"../supabase"
import { Box, Typography } from "@mui/material"

// styling supabase auth
const customTheme = {
    default: {
        colors: {
            brand: '#e7be95',
            brandAccent: 'rgba(231, 190, 149, 0.7)',
            brandButtonText: 'black',
            defaultButtonBackground: 'red',
            
            inputBackground: 'transparent',
            inputBorder: 'lightgray',
            inputBorderHover: 'gray',
            inputBorderFocus: 'gray',
            inputText: 'black',
            inputLabelText: 'gray',
            inputPlaceholder: 'darkgray',
            
            messageText: 'gray',
            messageTextDanger: 'red',
            anchorTextColor: 'gray',
            anchorTextHoverColor: 'darkgray',
        },
        fontSizes: {
            baseLabelSize: '1.2rem',
            baseInputSize: '1.2rem',
            baseButtonSize: '1.1rem',
            baseBodySize: '1rem',
        },
        space: {
            labelBottomMargin: '8px',
            anchorBottomMargin: '4px',
            buttonPadding: '10px 150px',
            inputPadding: '10px 15px',
        },
        fonts: {
            labelFontFamily: `Inter, sans-serif`,
            buttonFontFamily: `Inter, sans-serif`,
            inputFontFamily: `Inter, sans-serif`,
            bodyFontFamily: `Inter, sans-serif`,
        },
        radii: {
            inputBorderRadius: '2px',
            borderRadiusButton: '2px',
            buttonBorderRadius: '2px',
        },
    },
}

export default function LoginScreen() {
    return (
        <Grid container sx={{ height: '100vh' }}>

            {/* image on the left */}
            <Grid
            item
            sm={4}
            md={7}
            sx={{
                // backgroundImage: `url(/img/clb2.png)`,       no idea why this doesn't work
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#c59e88',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />

            {/* UI */}
            <Grid 
            item
            xs={12}
            sm={8}
            md={5}
            display='flex'
            alignItems='center'
            justifyContent='center'
            >
            <Box
            display='flex'
            flexDirection='column'
            gap='4rem'
            padding='0 2rem'
            >
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <img src={require('./img/nuslib.png')} style={{width:'60%'}} />
                </Box>
                <Typography variant='h3' textAlign='center'>
                    Central Library Tracker
                </Typography>
                <Auth
                supabaseClient={supabase}
                appearance = {{ theme: customTheme }}
                providers = {[]}
                />
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Typography variant='body2' textAlign='center' color='grey'>
                        Made for Orbital '23
                        <br/>by Free the Seat 
                        <br/>(Ong Yi Kai Samuel, Willson Han Zhekai)
                    </Typography>
                </Box>
            </Box>
            </Grid>

        </Grid>
    )
}