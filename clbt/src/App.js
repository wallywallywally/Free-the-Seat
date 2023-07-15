import './css/App.css'

import {useState, useEffect} from 'react'
import {supabase} from "./supabase"

// components
import LoginScreen from './components/loginscreen.js'
import Main from './components/main.js'

// mui
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

// font - Inter/
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';


// main theme
const main = createTheme({
    typography: {
        fontFamily: [
            'Inter',
            'sans-serif'
        ].join(',')
    }
})


function App() {
    // log in state
    const [session, setSession] = useState(null)
    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })
        return () => subscription.data.subscription.unsubscribe();
    }, []);

    let params = new URLSearchParams(window.location.search);

    return (
        <>
        <ThemeProvider theme={main}>
        <CssBaseline /> 
            {session ?
                // another parameter to check for staff - staff={session.staff} ?
                <Main user={session.user} checkInSeat={params.get('seat')}/> : <LoginScreen/>
            }
        </ThemeProvider>
        </>
    );
}

export default App;