import { useState, useEffect } from 'react';

// db stuff
// import {test} from './db.js'
import axios from 'axios'

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


// require('dotenv').config();
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(
//     'free-the-seat',
//     process.env.REACT_APP_DB_USER,
//     process.env.REACT_APP_DB_PW,
//     {
//         host: 'aws.connect.psdb.cloud',
//         dialect: 'mysql',
//         dialectModule: require('mysql2'),
//         dialectOptions: {
//             ssl: {
//                 rejectUnauthorized: true,
//             }
//         }
//     });

// const User = sequelize.define('users', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     email: {
//         type: DataTypes.STRING,
//         unique: true
//     },
//     password_hash: {
//         type: DataTypes.TEXT
//     }
// }, {
//     timestamps: false
// })

// const Seat = sequelize.define('seats', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     occupancy: {
//         type: DataTypes.ENUM('Free', 'Occupied')
//     }
// }, {
//     timestamps: false
// })

// const Reservation = sequelize.define('reservations', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     start_time: {
//         type: DataTypes.INTEGER
//     },
//     end_time: {
//         type: DataTypes.INTEGER
//     },
//     date_created: {
//         type: DataTypes.DATE
//     },
//     user_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: User,
//             key: 'id'
//         }
//     },
//     seat_id: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Seat,
//             key: 'id'
//         }
//     }
// },
//     {
//         timestamps: false
//     })
// Reservation.User = Reservation.belongsTo(User, {
//     foreignKey: "user_id"
// })
// User.Reservation = User.hasMany(Reservation, {
//     foreignkey: "user_id"
// });

// Reservation.Seat = Reservation.belongsTo(Seat, {
//     foreignKey: "seat_id"
// })
// Seat.Reservation = Seat.hasMany(Reservation, {
//     foreignKey: "seat_id"
// });

export default function SignIn({handleSIU, handleLogIn}) {
    // sign in/up toggle
    const SIUtoggle = () => () => handleSIU()

    // log in state
    const logInToggle = () => () => handleLogIn()

    // ! integrate with sam
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    //     (async () => {
    //         const userLogin = await sequelize.query(
    //             'SELECT * FROM users WHERE email = :email AND password_hash = :password',
    //             {
    //                 replacements: {
    //                     email: data.get('email'),
    //                     password: data.get('password')
    //                 },
    //                 type: sequelize.QueryTypes.SELECT
    //             })[0].id
    //         if (userLogin.length !== 0) {
    //             alert("log in successful")
    //             //do something
    //         }
    //         else {
    //             alert("wrong credentials")
    //         }
    //     })()
    // }

    // const [creds, setCreds] = useState([])
    // useEffect(() => {
    //     const fetch = async () => {
    //         try {
    //             const res = await axios.get('/getuser')
    //             console.log(res)
    //         } catch(err) {
    //             console.log(err)
    //         }
    //     }
    //     fetch()
    // }, [])

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
                    {/* <Grid item>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid> */}
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