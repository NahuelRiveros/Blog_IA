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
    // finally {
    //     db.close();
    // }
}; 

createTables();

export default db;