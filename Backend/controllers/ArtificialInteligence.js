import sequelize from 'sequelize';
import { tbInteligenciaArtificial } from "../Modules/module.js";

export const registroInteligenciaArtificial = async (req, res) => {
    try {
        const { nombre, objetivo, link, ventaja, limitacion, tipoLicencia, añoLanz, autorRef, compromisoUso, descripcion, linkVid } = req.body
        const creandoIntArt = await tbInteligenciaArtificial.create({ nombreIntArt: nombre, objetivoIntArt: objetivo, linkIntArt: link, ventajaIntArt: ventaja, limitacionIntArt: limitacion, tipoLicenciaIntArt: tipoLicencia, añoLanzamientoIntArt: añoLanz, autorReferencia: autorRef, compromisoUsoIntArt: compromisoUso, descripcionIntArt: descripcion, linkVideoIntArt: linkVid, puntuacionGeneralIntArt:0 })
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        res.json({ error: err.message })
    }
}

export const getIntArt = async (req,res) => {
    try {
        const idIntArtificial = req.params.id
        console.log(req.params.id)
        const getInteligencia = await tbInteligenciaArtificial.findByPk(idIntArtificial)
        res.json(getInteligencia)
    } catch (err){
        res.json({error: err.message})
    }
}