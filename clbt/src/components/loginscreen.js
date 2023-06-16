import { Auth } from "@supabase/auth-ui-react" 
import Grid from '@mui/material/Grid'
import { ThemeSupa } from "@supabase/auth-ui-shared"
import {supabase } from"../supabase"

export default function LoginScreen() {
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>

            {/* image on the left */}
            <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
                // backgroundImage: 'url(./components/img/clb2.png)',    // ! to fix: LINK TO ACTUAL IMAGE
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#c59e88',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />

            {/* UI */}
            <Auth
            supabaseClient={supabase}
            appearance = {{theme: ThemeSupa }}
            providers = {[]}
            />

        </Grid>
    )
}