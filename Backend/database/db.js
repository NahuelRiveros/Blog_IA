import Sequelize from "sequelize";

const db = new Sequelize(
    "IABlog", 
    "postgres",
    "Hola1234",
    //"123456789",
    {
    host: "localhost",
    dialect:
        "postgres" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});

//Sincronizar base de datos

async function createTables() {
    try { 
        await db.sync({ alter: true }); //force alter
        console.log("Tablas creadas en la base de datos.");
    } catch (error) {
        console.error("Error al crear las tablas:", error);
    }
    finally {
        db.close();
    }
}; 

createTables();





// EL CODIGO DE ABAJO, SE DESCOMENTA SOLO PARA CREAR DATOS DE EJEMPLO PAR LA PRUEBA DE LA BASE DE DATOS


// import { tbRol, tbTemas, tbTags, tbImagenIntArt, tbEjemploIntArt, tbUsuarios, tbComentarios, tbDebates, tbInteligenciaArtificial, tbTagsIntArt, tbUsuarioVotoInt, tbUsuarioVotoComentario } from '../Modules/module.js'; // Asegúrate de ajustar la ruta de importación

// const insertSampleData = async () => {
//     try {
//         await db.sync({ force: true }); // Esto reiniciará la base de datos, asegúrate de no usarlo en producción

//         // Insertar roles
//         await tbRol.bulkCreate([
//             { nombreRol: 'Admin' },
//             { nombreRol: 'User' }
//         ]);

//         // Insertar temas
//         await tbTemas.bulkCreate([
//             { nombreTema: 'Ética' }, 
//             { nombreTema: 'Sesgo' }, 
//             { nombreTema: 'Beneficios' }, 
//             { nombreTema: 'Polémica' }, 
//             { nombreTema: 'Futuro' }
//         ]);

//          // Insertar Tags
//          await tbTags.bulkCreaate([
//             { nombreTag: 'Artificial Intelligence' }, 
//             { nombreTag: 'Robotics' }, 
//             { nombreTag: 'Machine Learning' },
//             { nombreTag: 'Autonomous' }, 
//             { nombreTag: 'Problem Solving' }, 
//             { nombreTag: 'Deep Learning' }, 
//             { nombreTag: 'Cybernetics' }, 
//             { nombreTag: 'Neural Networks' }
//          ]);

//         // Insertar inteligencia artificial
//         await tbInteligenciaArtificial.bulkCreate([
//             {
//                 nombreIntArt: 'AI 1',
//                 objetivoIntArt: 'Objetivo AI 1',
//                 linkIntArt: 'http://link1.com',
//                 ventajaIntArt: 'Ventaja AI 1',
//                 limitacionIntArt: 'Limitación AI 1',
//                 tipoLicenciaIntArt: 'Licencia AI 1',
//                 añoLanzamientoIntArt: 2021,
//                 autorReferencia: 'Autor AI 1',
//                 compromisoUsoIntArt: 'Compromiso AI 1',
//                 descripcionIntArt: 'Descripción AI 1',
//                 linkVideoIntArt: 'http://video1.com',
//                 puntuacionGeneralIntArt: 4.5
//             },
//             {
//                 nombreIntArt: 'AI 2',
//                 objetivoIntArt: 'Objetivo AI 2',
//                 linkIntArt: 'http://link2.com',
//                 ventajaIntArt: 'Ventaja AI 2',
//                 limitacionIntArt: 'Limitación AI 2',
//                 tipoLicenciaIntArt: 'Licencia AI 2',
//                 añoLanzamientoIntArt: 2022,
//                 autorReferencia: 'Autor AI 2',
//                 compromisoUsoIntArt: 'Compromiso AI 2',
//                 descripcionIntArt: 'Descripción AI 2',
//                 linkVideoIntArt: 'http://video2.com',
//                 puntuacionGeneralIntArt: 4.8
//             }
//         ]);

//         // Insertar usuarios
//         await tbUsuarios.bulkCreate([
//             { idRol: 1, nombreUsuario: 'Admin User', emailUsuario: 'admin@example.com', password: 'admin123' },
//             { idRol: 2, nombreUsuario: 'Regular User', emailUsuario: 'user@example.com', password: 'user123' }
//         ]);

//         // Insertar debates
//         await tbDebates.bulkCreate([
//             { idTema: 1, idIntArt: 1, tituloDebate: 'Debate 1', fechaDebate: new Date() },
//             { idTema: 2, idIntArt: 2, tituloDebate: 'Debate 2', fechaDebate: new Date() }
//         ]);

//         // Insertar comentarios
//         await tbComentarios.bulkCreate([
//             { idUsuario: 1, idDebate: 1, tituloComentario: 'Comentario 1', descripcionComentario: 'Descripción Comentario 1', fechaComentario: new Date(), votoPositivo: 10, votoNegativo: 2 },
//             { idUsuario: 1, idDebate: 1, tituloComentario: 'Comentario 1', descripcionComentario: 'Descripción Comentario 1', fechaComentario: new Date(), votoPositivo: 10, votoNegativo: 2 },
//             { idUsuario: 1, idDebate: 1, tituloComentario: 'Comentario 1', descripcionComentario: 'Descripción Comentario 1', fechaComentario: new Date(), votoPositivo: 10, votoNegativo: 2 },
//             { idUsuario: 2, idDebate: 2, tituloComentario: 'Comentario 2', descripcionComentario: 'Descripción Comentario 2', fechaComentario: new Date(), votoPositivo: 5, votoNegativo: 1 }
//         ]);


//         console.log('Datos de ejemplo insertados correctamente');
//     } catch (error) {
//         console.error('Error insertando datos de ejemplo:', error);
//     }
// };

// insertSampleData();

export default db;