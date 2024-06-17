export const tbEjemploIntArt = db.define(
    "ejemploIntArt",
    {
        idEjemplo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        idIntArt: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descripcionImagen: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);