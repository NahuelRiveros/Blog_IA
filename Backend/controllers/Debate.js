import sequelize from 'sequelize';
import { tbDebates, tbTemas, tbComentarios, tbInteligenciaArtificial } from "../Modules/module.js";

export const registroDebate = async (req, res) => {
    try {
        const { tema, IntArt, titulo, fecha } = req.body
        const creandoDebate = await tbDebates.create({ idTema: tema, idIntArt: IntArt, tituloDebate: titulo, fechaDebate: fecha })
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        res.json({ error: err.message })
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