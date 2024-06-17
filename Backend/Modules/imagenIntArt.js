export const tbImagenIntArt = db.define(
    "imagenIntArt",
    {
        idImagen: {
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
        binarioImagen: {
            type: DataTypes.BLOB('long'),
            allowNull: false,
        },
        descripcionImagen: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    },
    { freezeTableName: true }
);