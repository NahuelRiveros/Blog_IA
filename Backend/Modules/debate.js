export const tbDebates = db.define(
    "debate",
    {
        idDebate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        idComentario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idTema: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idIntArt: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tituloDebate: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        fechaDebate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);