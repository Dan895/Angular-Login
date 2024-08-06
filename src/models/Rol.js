import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { User } from "./User.js";


export const Rol = sequelize.define('Rol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rolName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // createdAt: {
    //     type: DataTypes.DATE,
    //     defaultValue: DataTypes.NOW
    // },
    // updatedAt: {
    //     type: DataTypes.DATE,
    //     defaultValue: DataTypes.NOW
    // }
},
    // en caso de no querer timestamps:
    {
        timestamps: false
    }
);


// Relacina de uno a muchos rol respecto a usuario
Rol.hasMany(User, {
    foreignKey: 'rolId',
    sourceKey: 'id'
});

User.belongsTo(Rol, {
    foreignKey: 'rolId',
    targetId: 'id'
});