import { tbUsuarios } from '../Modules/module.js';

const getUser = async (req, res) => {
  

  const userID = req.params.id
  try {

    const user = await tbUsuarios.findOne({ where: {idUsuario : userID }});
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json({ msgUser : user.nombreUsuario})
    
  } catch(error) {
    console.error("error")
    res.status(500).json({msg:"Error"})
  }
 
}

export default getUser;