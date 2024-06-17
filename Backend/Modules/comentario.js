export const tbComentarios = db.define(
    "comentario",
    {
        idComentario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tituloComentario: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        descripcionComentario: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        fechaComentario: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);