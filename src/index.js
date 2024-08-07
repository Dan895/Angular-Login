import app from './app.js';
import { sequelize } from './database/database.js';

// Models
// import './models/Rol.js';
// import './models/User.js';

const port = process.env.PORT || 3000;

async function main() {
    try {
        // prueba la conexion a la DB
        // await sequelize.authenticate();
        // console.log("Conectado a la base de datos.");
        // reinicia toda la configuracion de la DB, no deja registros:
        // await sequelize.sync({ alter: false })

        // Modifica la db respecto a lo que se indica en el modelo:
        await sequelize.sync({ force: true });

        app.listen(3000);
        console.log(`\nServidor corriendo en http://localhost:${port}`);
    } catch (error) {
        console.log("\nImposible conectar a la base de datos: ", error);
    }

}

main();


