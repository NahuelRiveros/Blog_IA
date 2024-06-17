import { DataTypes } from 'sequelize';
import db from '../database/db.js';
// Define el modelo de datos 'Vote'

export const VoteInt = db.define(
  'usuarioVotoInt',
  {
    idUsuarioVotoInt: {
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
    idIntArt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'inteligenciaArtificial', // Nombre de la tabla de Posts
        key: 'idIntArt' // Clave foránea que hace referencia a la tabla Posts
      }
    },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5
      }
    }
  },
  { freezeTableName: true }
);

// Define asociaciones si es necesario
// Vote.belongsTo(Post); // Asocia Vote con Post
// Vote.belongsTo(User); // Asocia Vote con User