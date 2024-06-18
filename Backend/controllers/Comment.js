import sequelize from 'sequelize';
import { tbComentarios, tbUsuarios, tbDebates, tbInteligenciaArtificial, tbTemas } from "../Modules/module.js";

export const registroComentario = async (req, res) => {
    try {
        const { usuario, debate, tituloCom, descripcionCom, fecha } = req.body
        const creandoComentarios = await tbComentarios.create({ idUsuario: usuario, idDebate: debate, tituloComentario: tituloCom, descripcionComentario: descripcionCom, fechaComentario: fecha, votoPositivo: 0, votoNegativo: 0 })
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        res.json({ error: err.message })
    }
}

// export const getComentario2 = async (req,res) => {
//     try {
//         const idComentario = req.params.id
//         console.log(req.params.id)
//         const getComentario = await tbComentarios.findByPk(idComentario)
//         res.json(getComentario)
//     } catch (err){
//         res.json({error: err.message})
//     }
// }

export const getComentario = async (req, res) => {
    try {
        const idComentario = req.params.id;
        console.log(req.params.id);

        const comentario = await tbComentarios.findOne({
            where: { idComentario },
            include: [
                {
                    model: tbUsuarios,
                    attributes: ['idUsuario', 'nombreUsuario']
                },
                {
                    model: tbDebates,
                    attributes: ['idDebate', 'tituloDebate'],
                    include: [
                        {
                            model: tbInteligenciaArtificial,
                            attributes: ['idIntArt', 'nombreIntArt']
                        },
                        {
                            model: tbTemas,
                            attributes: ['idTema', 'nombreTema']
                        }
                    ]
                }
            ]
        });

        if (comentario) {
            res.json({
                idComentario: comentario.idComentario,
                tituloComentario: comentario.tituloComentario,
                comentario: comentario.descripcionComentario,
                fechaComentario: comentario.fechaComentario,
                idUsuario: comentario.usuario.idUsuario,
                nombreUsuario: comentario.usuario.nombreUsuario,
                idIntArt: comentario.debate.inteligenciaArtificial.idIntArt,
                nombreIntArt: comentario.debate.inteligenciaArtificial.nombreIntArt,
                idTema: comentario.debate.tema.idTema,
                nombreTema: comentario.debate.tema.nombreTema,
                idDebate: comentario.debate.idDebate,
                tituloDebate: comentario.debate.tituloDebate,
                puntuacionPositiva: comentario.votoPositivo,
                puntuacionNegativa: comentario.votoNegativo
            });
        } else {
            res.status(404).json({ error: 'Comentario no encontrado' });
        }
    } catch (err) {
        res.json({ error: err.message });
    }
};