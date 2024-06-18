import sequelize from 'sequelize';
import { tbDebates, tbTemas, tbComentarios, tbInteligenciaArtificial } from "../Modules/module.js";

export const registroDebate = async (req, res) => {
    try {
        
        const {id, title, content, date } = req.body; // Obtén todos los datos del cuerpo de la solicitud
        console.log(id, title, content, date)
      if ( !id || !title || !content || !date) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
      }

        const creandoDebate = await tbDebates.create({ idIntArt: id, idTema: content,  tituloDebate: title , fechaDebate : date })
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        console.error('Error al crear el debate:', err);
        res.status(500).json({ error: err.message });
    }
}

// export const Debate2 = async (req,res) => {
//     try {
//         const idDebate = req.params.id
//         const Debate = await tbDebates.findByPk(idDebate)
//         res.json(Debate)
//     } catch (err){
//         res.json({error: err.message})
//     }
// }

export const getDebate = async (req, res) => {
    try {
        const idDebate = req.params.id;
        const Debate = await tbDebates.findByPk(idDebate, {
            include: [
                {
                    model: tbTemas,
                    attributes: ['idTema', 'nombreTema']
                },
                {
                    model: tbComentarios,
                    attributes: ['idComentario']
                },
                {
                    model: tbInteligenciaArtificial,
                    attributes: ['idIntArt', 'nombreIntArt']
                }
            ]
        });

        if (!Debate) {
            return res.status(404).json({ error: 'Debate no encontrado' });
        }

        // Contar el número de comentarios en el debate
        const numeroComentarios = Debate.comentarios ? Debate.comentarios.length : 0;

        // Formatear la respuesta JSON
        const response = {
            idDebate: Debate.idDebate,
            nombreDebate: Debate.tituloDebate,
            idTema: Debate.tema.idTema,
            nombreTema: Debate.tema.nombreTema,
            numeroComentarios,
            idIntArt: Debate.inteligenciaArtificial.idIntArt,
            nombreIntArt: Debate.inteligenciaArtificial.nombreIntArt
        };

        res.json(response);
    } catch (err) {
        res.json({ error: err.message });
    }
};