const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tag extends Model {}

Tag.init(
    {
        id: {
            type:DataTypes.integer,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tag_name: {
           type: Datatypes.string,
           allowNull: false
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
}
);

module.exports = Tag;