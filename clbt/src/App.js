import './css/App.css'

import {useState, useEffect} from 'react'
import {supabase} from "./supabase"

// components
import Welcome from "./components/welcome.js"
import Main from './components/main.js'
import LoginScreen from './components/loginscreen.js'

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

// app
function App() {
    // log in state
    const [log, setLog] = useState(false)
    const [session, setSession] = useState(null);

    useEffect(() => {
        const subscription = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })
        return () => subscription.data.subscription.unsubscribe();
    }, []);

    // const logInToggle = (event) => {
    //     setLog(!log)
    // }

    // user id state
    const [userid, setUserid] = useState(12)
    
    
    return (
        <>
        <ThemeProvider theme={main}>
        <CssBaseline />

        {session ?
             <Main user={session.user}/> : <LoginScreen/>
}
        {/* {session ?
            <Main userid={userid}/> : <LoginScreen/>
        } */}



        </ThemeProvider>
        </>
    );
}

export default App;