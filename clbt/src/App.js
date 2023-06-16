import './css/App.css'

import {useState} from 'react'

// components
import Welcome from "./components/welcome.js"
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

// app
function App() {
    // log in state
    const [log, setLog] = useState(false)
    const logInToggle = (event) => {
        setLog(!log)
    }

    // !! to implement database stuff
    // user id state
    const [userid, setUserid] = useState(598)
    
    
    return (
        <>
        <ThemeProvider theme={main}>
        <CssBaseline />

        {log === false ?
            <Welcome handleLogIn={logInToggle} />
            : <Main userid={userid} />
        }

        </ThemeProvider>
        </>
    );
}

export default App;