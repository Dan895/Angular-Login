import express from "express";
import rolsRoutes from "./routes/rols.routes.js";
import usersRoutes from "./routes/users.routes.js";


const app = express();

// Middlewares
app.use(express.json());



// Instance the routes
app.use(rolsRoutes);
app.use(usersRoutes);



export default app;