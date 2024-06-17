import db from "../database/db.js";
import { DataTypes } from 'sequelize';

export const tbRol = db.define(
    "rol",
    {
        idRol: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        nombreRol: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

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

export const tbTags = db.define(
    "tag",
    {
        idTag: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        nombreTag: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

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

export const tbUsuarios = db.define(
    "usuario",
    {
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        idRol: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nombreUsuario: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        emailUsuario: {
            type: DataTypes.STRING(500),
            allowNull: false,
            unique: true, 
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

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

export const tbTagsIntArt = db.define(
    "tagIntArt",
    {
        idTagIntArt: {
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
        idTag: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

//Rol a Usuario
tbRol.belongsTo(tbUsuarios, { foreignKey: { name: 'idRol' } });
tbUsuarios.hasMany(tbRol, { foreignKey: { name: 'idRol' } });

//Usuario a Comentario
tbUsuarios.belongsTo(tbComentarios, { foreignKey: { name: 'idUsuario' } });
tbComentarios.hasMany(tbUsuarios, { foreignKey: { name: 'idUsuario' } });

//Comentario a Debate
tbComentarios.belongsTo(tbDebates, { foreignKey: { name: 'idComentario' } });
tbDebates.hasMany(tbComentarios, { foreignKey: { name: 'idComentario' } });

//Tema a Debate
tbTemas.belongsTo(tbDebates, { foreignKey: { name: 'idTema' } });
tbDebates.hasMany(tbTemas, { foreignKey: { name: 'idTema' } });

//Inteligencia Artificial a Debate
tbInteligenciaArtificial.belongsTo(tbDebates, { foreignKey: { name: 'idIntArt' } });
tbDebates.hasMany(tbInteligenciaArtificial, { foreignKey: { name: 'idIntArt' } });

//Inteligencia Artificial a Imagen
tbInteligenciaArtificial.belongsTo(tbImagenIntArt, { foreignKey: { name: 'idIntArt' } });
tbImagenIntArt.hasMany(tbInteligenciaArtificial, { foreignKey: { name: 'idIntArt' } });

//Inteligencia Artificial a Ejemplo
tbInteligenciaArtificial.belongsTo(tbEjemploIntArt, { foreignKey: { name: 'idIntArt' } });
tbEjemploIntArt.hasMany(tbInteligenciaArtificial, { foreignKey: { name: 'idIntArt' } });

//Inteligencia Artificial a TablaIntermedia Tag Inteligencia Artificial
tbInteligenciaArtificial.belongsTo(tbTagsIntArt, { foreignKey: { name: 'idIntArt' } });
tbTagsIntArt.hasMany(tbInteligenciaArtificial, { foreignKey: { name: 'idIntArt' } });

//Tag a TablaIntermedia Tag Inteligencia Artificial
tbTags.belongsTo(tbTagsIntArt, { foreignKey: { name: 'idTag' } });
tbTagsIntArt.hasMany(tbTags, { foreignKey: { name: 'idTag' } });