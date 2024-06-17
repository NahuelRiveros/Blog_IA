import sequelize from 'sequelize';
import { tbDebates } from "../Modules/module.js";

export const registroDebate = async (req, res) => {
    try {
        const { tema, IntArt, titulo, fecha } = req.body
        const creandoDebate = await tbDebates.create({ idTema: tema, idIntArt: IntArt, tituloDebate: titulo, fechaDebate: fecha })
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        res.json({ error: err.message })
    }
}