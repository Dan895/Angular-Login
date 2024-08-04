import { Sequelize, DataTypes } from 'sequelize';
import Credentials from './credentials.js';

const credentials = new Credentials();

const sequelize = new Sequelize('postgres://' + credentials.user + ':' + credentials.password + '@' + credentials.host + ':' + credentials.host + '/' + credentials.database);


const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

sequelize.sync().then(() => console.log('Database & tables created!')).catch(err => console.error('Unable to connect to the database: ', err))

module.exports = { User };