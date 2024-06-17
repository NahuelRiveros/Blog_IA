import sequelize from 'sequelize';
import { tbUsuarios } from "../Modules/module.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
//login test
// Codigo secreto del token
const secretKey = "mysecretkey";

export const registroUsuario = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const passwordBCrypt = bcryptjs.hashSync(password, 10)
        const creandousuario = await tbUsuarios.create({ idRol:2, nombreUsuario:name, emailUsuario:email, password:passwordBCrypt })
        res.json({ msg: "Creado correctamente" })
    } catch (err) {
        res.json({ error: err.message })
    }
}