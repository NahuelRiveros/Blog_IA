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