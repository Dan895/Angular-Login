import app from './app.js';
import { sequelize } from './database/database.js';

// Models
// import './models/Rol.js';
// import './models/User.js';


async function main() {
    try {
        // prueba la conexion a la DB
        // await sequelize.authenticate();
        // console.log("Conectado a la base de datos.");

        await sequelize.sync({ force: false })

        app.listen(3000);
        console.log('Servidor corriendo en http://localhost:3000');
    } catch (error) {
        console.log("Imposible conectar a la base de datos: ", error);
    }

}

main();


