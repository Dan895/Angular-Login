// importa el modelo para guardar datos
import { Error, where } from 'sequelize';
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

export const getRol = async (req, res) => {
    try {
        const { id } = req.params;
        const rol = await Rol.findOne({
            where: {
                id
            }
        });

        if (!rol) return res.status(404).json({ message: 'Rol no encontrado' });

        res.json(rol);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createRol = async (req, res) => {
    // En caso de ingresar los parametros de fecha a mano:
    // const { rolName, createdAt, updatedAt } = req.body
    const { rolName } = req.body

    try {
        // se colocan los parametros que ingresaron por req.body:
        // const newRol = await Rol.create({ rolName, createdAt, updatedAt })
        const newRol = await Rol.create({ rolName })
        res.json(newRol);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    // console.log(newRol)
    // res.send('creating rols');
};

export const updateRol = async (req, res) => {
    try {
        const { id } = req.params;
        const { rolName } = req.body;

        const rol = await Rol.findByPk(id);
        rol.rolName = rolName;
        await rol.save();

        res.json(rol);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteRol = async (req, res) => {
    try {
        const { id } = req.params

        await Rol.destroy({
            where: {
                // id: id se resume en:
                id,
            }
        });
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
