export const tbTemas = db.define(
    "tema",
    {
        idTema: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        nombreTema: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    },
    { freezeTableName: true }
);
