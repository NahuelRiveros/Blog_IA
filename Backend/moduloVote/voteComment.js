import { DataTypes } from 'sequelize';
import db from '../database/db.js';
// Define el modelo de datos 'Vote'

export const VoteInt = db.define(
  'usuarioVotoComentario',
  {
    idUsuarioVotoComentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario', // Nombre de la tabla de Users
        key: 'idUsuario' // Clave foránea que hace referencia a la tabla Users
      }
    },
    idComentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comentario', // Nombre de la tabla de Posts
        key: 'idComentario' // Clave foránea que hace referencia a la tabla Posts
      }
    },
    votoUsuario: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  },
  { freezeTableName: true }
);

// Define asociaciones si es necesario
// Vote.belongsTo(Post); // Asocia Vote con Post
// Vote.belongsTo(User); // Asocia Vote con User