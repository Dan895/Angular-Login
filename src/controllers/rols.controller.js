// importa el modelo para guardar datos
import { Error } from 'sequelize';
import { Rol } from '../models/Rol.js';

export const getRols = async (req, res) => {

    try {
        // prueba el servidor:
        // throw new Error('Query failed');

        const rols = await Rol.findAll();
        // envia los datos al cliente
        res.json(rols);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


    // console.log(rols);
    // res.send('getting rols');
};

export const createRol = async (req, res) => {
    const { rolName, createdAt, updatedAt } = req.body

    try {
        const newRol = await Rol.create({ rolName, createdAt, updatedAt })
        res.json(newRol);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    // console.log(newRol)
    // res.send('creating rols');
};


export const updateRol = async (req, res) => {

}

export const deleteRol = async (req, res) => {
    await Rol
}
