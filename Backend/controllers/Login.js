import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


// Datos de ejemplo de usuarios ( usar una base de datos)
export const users = [
    {
      username: 'user1',
      password: bcrypt.hashSync('password1', 10) 
    },
    {
      username: 'user2',
      password: bcrypt.hashSync('password2', 10) 
    }
  ];

const login = async (req, res) => {
    const { username, password } = req.body;
  
    // Busca al usuario en el array de usuarios pero tengo que buscar en la base de datos
    const user = users.find(user => user.username === username);
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Compara la contraseña proporcionada con la contraseña hasheada almacenada
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
  
    // Crea el token JWT
    const token = jwt.sign({ id: user.id }, 'secreto_super_seguro', { expiresIn: '1h' }); 
  
    // Envía el token JWT al cliente
    res.json({ token });
  };



export default login;