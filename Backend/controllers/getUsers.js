import { users } from '../controllers/Login.js'; // Importa el array de usuarios

const getUser = (req, res) => {
  const user = users.find(user => user.id === req.userId);

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  console.log(user.username + " getUser Line 10")//BORAR 

  res.json({ username: user.username });
};

export default getUser;