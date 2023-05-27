require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    'free-the-seat',
    process.env.USER_ID,
    process.env.PASSWORD,
    {
        host: 'aws.connect.psdb.cloud',
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
            }
        }
    });

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    username: {
        type: DataTypes.TEXT
    },
    password_has: {
        type: DataTypes.TEXT
    }
}, {
    timestamps: false
})

const Seat = sequelize.define('seats', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    occupancy: {
        type : DataTypes.ENUM('Free', 'Occupied')
    }
}, {
    timestamps: false
})

const Reservation = sequelize.define('reservations', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    start_time: {
        type: DataTypes.INTEGER
    },
    end_time: {
        type: DataTypes.INTEGER
    },
    date_created: {
        type: DataTypes.DATE
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    seat_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Seat,
            key: 'id'
        }
    }
},
    {
        timestamps: false
    })
Reservation.User = Reservation.belongsTo(User, {
    foreignKey: "user_id"
})
User.Reservation = User.hasMany(Reservation, {
    foreignkey: "user_id"
});

Reservation.Seat = Reservation.belongsTo(Seat, {
    foreignKey: "seat_id"
})
Seat.Reservation = Seat.hasMany(Reservation, {
    foreignKey: "seat_id"
});

(async () => {
    // Dependency-less insert
    const jane = await User.create({
        email: "pete@gmail.com",
        username: "petegrif",
        password_hash: "itshashed"
    }, { fields: ['email', 'username', 'password_hash'] })

    console.log(jane)
})()