export const tbInteligenciaArtificial = db.define(
    "inteligenciaArtificial",
    {
        idIntArt: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        nombreIntArt: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        objetivoIntArt: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        linkIntArt: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        ventajaIntArt: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        limitacionIntArt: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        tipoLicenciaIntArt: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        añoLanzamientoIntArt: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        autorReferencia: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        compromisoUsoIntArt: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        descripcionIntArt: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        linkVideoIntArt: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        puntuacionIntArt: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);