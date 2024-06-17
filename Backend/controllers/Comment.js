import sequelize from 'sequelize';
import { tbComentarios } from "../Modules/module.js";

export const registroComentario = async (req, res) => {
    try {
        const { usuario, debate, tituloCom, descripcionCom, fecha } = req.body
        const creandoComentarios = await tbComentarios.create({ idUsuario: usuario, idDebate: debate, tituloComentario: tituloCom, descripcionComentario: descripcionCom, fechaComentario: fecha, votoPositivo: 0, votoNegativo: 0 })
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        res.json({ error: err.message })
    }
}