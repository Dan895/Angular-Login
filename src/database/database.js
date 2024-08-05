import { Sequelize } from "sequelize";
import Credentials from "./credentials.js";

const credentials = new Credentials();

// Para usarlo desde otros archivos se debe exportar:
export const sequelize = new Sequelize(
    credentials.database,
    credentials.user,
    credentials.password,
    {
        host: credentials.host,
        port: credentials.port,
        dialect: credentials.dialect
    }
);