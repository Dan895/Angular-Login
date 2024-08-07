import { User } from '../models/User.js';

export const getUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            where: {
                id
            }
        });

        if (!rol) return res.status(404).json({ message: 'Usuario no encontrado' })

        res.json(user);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const { username, password, name, lastname, rolId } = req.body;
        const newUser = await User.create({ username, password, name, lastname, rolId });
        res.json(newUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password, name, lastname } = req.body;

        const user = await User.findByPk(id);
        user.username = username;
        user.password = password;
        user.name = name;
        user.lastname = lastname;
        await user.save();

        res.json(user);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await User.destroy({
            where: {
                id,
            }
        });
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};