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
        votoPositivo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        votoNegativo: {
            type: DataTypes.INTEGER,
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
        puntuacionGeneralIntArt: {
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

export const tbUsuarioVotoInt = db.define(
    "usuarioVotoInt",
    {
        idUsuarioVotoInt: {
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
        idIntArt: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        puntuacionUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

export const tbUsuarioVotoComentario = db.define(
    "usuarioVotoComentario",
    {
        idUsuarioVotoComentario: {
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
        idComentario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        votoUsuario: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    { freezeTableName: true }
);

//Rol a Usuario
tbUsuarios.belongsTo(tbRol, { foreignKey: { name: 'idRol' } });
tbRol.hasMany(tbUsuarios, { foreignKey: { name: 'idRol' } });

//Usuario a Comentario
tbComentarios.belongsTo(tbUsuarios, { foreignKey: { name: 'idUsuario' } });
tbUsuarios.hasMany(tbComentarios, { foreignKey: { name: 'idUsuario' } });

//Usuario a TablaIntermedia Usuario Comentario
tbUsuarioVotoComentario.belongsTo(tbUsuarios, { foreignKey: { name: 'idUsuario' } });
tbUsuarios.hasMany(tbUsuarioVotoComentario, { foreignKey: { name: 'idUsuario' } });

//Comentario a TablaIntermedia Usuario Comentario
tbUsuarioVotoComentario.belongsTo(tbComentarios, { foreignKey: { name: 'idComentario' } });
tbComentarios.hasMany(tbUsuarioVotoComentario, { foreignKey: { name: 'idComentario' } });

//Comentario a Debate
tbDebates.belongsTo(tbComentarios, { foreignKey: { name: 'idComentario' } });
tbComentarios.hasMany(tbDebates, { foreignKey: { name: 'idComentario' } });

//Tema a Debate
tbDebates.belongsTo(tbTemas, { foreignKey: { name: 'idTema' } });
tbTemas.hasMany(tbDebates, { foreignKey: { name: 'idTema' } });

//Usuario a TablaIntermedia Usuario Inteligencia Artificial
tbUsuarioVotoInt.belongsTo(tbUsuarios, { foreignKey: { name: 'idUsuario' } });
tbUsuarios.hasMany(tbUsuarioVotoInt, { foreignKey: { name: 'idUsuario' } });

//Inteligencia Artificial a Debate
tbDebates.belongsTo(tbInteligenciaArtificial, { foreignKey: { name: 'idIntArt' } });
tbInteligenciaArtificial.hasMany(tbDebates, { foreignKey: { name: 'idIntArt' } });

//Inteligencia Artificial a Imagen
tbImagenIntArt.belongsTo(tbInteligenciaArtificial, { foreignKey: { name: 'idIntArt' } });
tbInteligenciaArtificial.hasMany(tbImagenIntArt, { foreignKey: { name: 'idIntArt' } });

//Inteligencia Artificial a Ejemplo
tbEjemploIntArt.belongsTo(tbInteligenciaArtificial, { foreignKey: { name: 'idIntArt' } });
tbInteligenciaArtificial.hasMany(tbEjemploIntArt, { foreignKey: { name: 'idIntArt' } });

//Inteligencia Artificial a TablaIntermedia Usuario Inteligencia Artificial
tbUsuarioVotoInt.belongsTo(tbInteligenciaArtificial, { foreignKey: { name: 'idIntArt' } });
tbInteligenciaArtificial.hasMany(tbUsuarioVotoInt, { foreignKey: { name: 'idIntArt' } });

//Inteligencia Artificial a TablaIntermedia Tag Inteligencia Artificial
tbTagsIntArt.belongsTo(tbInteligenciaArtificial, { foreignKey: { name: 'idIntArt' } });
tbInteligenciaArtificial.hasMany(tbTagsIntArt, { foreignKey: { name: 'idIntArt' } });

//Tag a TablaIntermedia Tag Inteligencia Artificial
tbTagsIntArt.belongsTo(tbTags, { foreignKey: { name: 'idTag' } });
tbTags.hasMany(tbTagsIntArt, { foreignKey: { name: 'idTag' } });