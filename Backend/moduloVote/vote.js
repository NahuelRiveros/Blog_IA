import { Sequelize, DataTypes } from 'sequelize';
import db from '../database/db';
// Define el modelo de datos 'Vote'

  export const Vote = db.define('Vote', 
    {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts', // Nombre de la tabla de Posts
        key: 'id' // Clave foránea que hace referencia a la tabla Posts
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // Nombre de la tabla de Users
        key: 'id' // Clave foránea que hace referencia a la tabla Users
      }
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 5
      }
    }
  }, {
    tableName: 'Votes', // Nombre de la tabla en la base de datos
  });

  // Define asociaciones si es necesario
  // Vote.belongsTo(Post); // Asocia Vote con Post
  // Vote.belongsTo(User); // Asocia Vote con User