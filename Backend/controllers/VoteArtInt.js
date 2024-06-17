import sequelize from 'sequelize';
import { tbUsuarioVotoInt } from "../Modules/module.js";

export const registroVotoInteligenciaArtificial = async (req, res) => {
    try {
        const { usuario, intArt, puntuacion } = req.body
        const creandoVotoIntArt = await tbUsuarioVotoInt.create({ idUsuario: usuario, idIntArt: intArt, puntuacionUsuario: puntuacion })
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        res.json({ error: err.message })
    }
}