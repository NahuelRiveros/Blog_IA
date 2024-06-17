import { tbUsuarioVotoInt } from "../Modules/module.js";

// POST /api/posts/:postId/vote
export const createVote = async (req, res) => {
  try {
    const { postId } = req.params;
    const { rating } = req.body;

    // Verifica si el usuario ya ha votado por este post
    const existingVote = await tbUsuarioVotoInt.findOne({ postId, userId: req.user.id });
    if (existingVote) {
      return res.status(400).json({ message: 'Ya has votado por este post' });
    }

    const newVote = await tbUsuarioVotoInt.create({ postId, userId: req.user.id, rating });
    res.status(201).json({ message: 'Voto registrado correctamente', vote: newVote });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al registrar el voto' });
  }
};

// GET /api/posts/:postId/votes (opcional)
export const getPostVotes = async (req, res) => {
  try {
    const { postId } = req.params;
    const votes = await tbUsuarioVotoInt.findAll({ where: { postId } });
    // Calcula el total de votos, promedio, etc.
    // ... 
    res.status(200).json(votes); // O devuelve los datos que necesitas
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener los votos' });
  }
};