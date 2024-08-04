import { Sequelize } from "sequelize";
import { Credentials } from "./credentials";

const credentials = Credentials();

const sequelize = new Sequelize(credentials.database, credentials.username, credentials.password, {
    host: credentials.host,
    dialect: credentials.dialect,
    port: credentials.port,
})