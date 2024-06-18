import sequelize from 'sequelize';
import { tbInteligenciaArtificial, tbDebates } from "../Modules/module.js";

export const registroInteligenciaArtificial = async (req, res) => {
    try {
        
        const { nombre, objetivo, link, ventaja, limitacion, tipoLicencia, añoLanz, autorRef, compromisoUso, descripcion, linkVid } = req.body
        console.log({"dato body":req.body})
        const creandoIntArt = await tbInteligenciaArtificial.create({nombreIntArt: nombre, objetivoIntArt: objetivo, linkIntArt: link, ventajaIntArt: ventaja, limitacionIntArt: limitacion, tipoLicenciaIntArt: tipoLicencia, añoLanzamientoIntArt: añoLanz, autorReferencia: autorRef, compromisoUsoIntArt: compromisoUso, descripcionIntArt: descripcion, linkVideoIntArt: linkVid, puntuacionGeneralIntArt:0 })
        console.log(creandoIntArt)
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        res.json({ error: err.message })
    }
}

// export const getIntArt2 = async (req,res) => {
//     try {
//         const idIntArtificial = req.params.id
//         console.log(req.params.id)
//         const getInteligencia = await tbInteligenciaArtificial.findByPk(idIntArtificial)
//         res.json(getInteligencia)
//     } catch (err){
//         res.json({error: err.message})
//     }
// }

export const getIntArt = async (req, res) => {
    try {
        const idIntArtificial = req.params.id;
        const getInteligencia = await tbInteligenciaArtificial.findByPk(idIntArtificial, {
            include: [
                {
                    model: tbDebates,
                    attributes: ['idDebate']
                }
            ]
        });

        if (!getInteligencia) {
            return res.status(404).json({ error: 'Inteligencia Artificial no encontrada' });
        }

        // Contar el número de debates asociados a la IA
        const numeroDebates = getInteligencia.debates ? getInteligencia.debates.length : 0;

        // Formatear la respuesta JSON
        const response = {
            idIntArt: getInteligencia.idIntArt,
            nombreIntArt: getInteligencia.nombreIntArt,
            datos: {
                objetivo: getInteligencia.objetivoIntArt,
                link: getInteligencia.linkIntArt,
                ventaja: getInteligencia.ventajaIntArt,
                limitacion: getInteligencia.limitacionIntArt,
                tipoLicencia: getInteligencia.tipoLicenciaIntArt,
                añoLanz: getInteligencia.añoLanzamientoIntArt,
                autorRef: getInteligencia.autorReferencia,
                compromisoUso: getInteligencia.compromisoUsoIntArt,
                descripcion: getInteligencia.descripcionIntArt,
                linkVid: getInteligencia.linkVideoIntArt,
                prueba: getInteligencia.Debates
            },
            numeroDebates
        };

        res.json(response);
    } catch (err) {
        res.json({ error: err.message });
    }
};