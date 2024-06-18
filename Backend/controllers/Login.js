import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { tbUsuarios } from '../Modules/module.js';

const login = async (req, res) => {
    const { username, password } = req.body;
    console.log( username, password)
  
    // Busca al usuario en el array de usuarios pero tengo que buscar en la base de datos
    const userSearch = await tbUsuarios.findOne({where: {nombreUsuario : username}})
    if (!userSearch) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Compara la contraseña proporcionada con la contraseña hasheada almacenada
    const isValidPassword = await bcrypt.compare(password, userSearch.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
  
    // Crea el token JWT
    const token = jwt.sign({ id: userSearch.id }, 'secreto_super_seguro', { expiresIn: '1h' }); 
  
    // Envía el token JWT al cliente
    // res.json({ token : token , id:userSearch.id });
    res.json({token , id : userSearch.idUsuario });
  };



export default login;