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