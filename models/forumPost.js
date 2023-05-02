const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class forumPost extends Model { }

forumPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        created_at: {
            type: DataTypes.TIMESTAMP,
            allowNull: false,
        },
        game_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'game',
                key: 'id',
            },
        },
    }
)

module.exports = forumPost;
