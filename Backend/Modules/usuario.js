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