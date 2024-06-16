import jwt from 'jsonwebtoken'; 

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  // Extrae el token usando substring()
  const token = authHeader.substring(7); // "Bearer ".length === 7 

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, 'secreto_super_seguro', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token no válido' });
    }

    req.userId = user.id;
    next();
  });
};

export default authenticateToken;