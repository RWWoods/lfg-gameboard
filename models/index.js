const User = require('./User');
const ForumPost = require('./forumPost');
const Game = require('./game');
const Tag = require('./tag');
const GameTag = require('./gameTag')

ForumPost.belongsTo(User, {
    foreignKey: 'user_id',
});
User.hasMany(ForumPost, {
    foreignKey: 'user_id',
});
Game.belongsToMany(Tag, {
    through: {
        model: GameTag,
    },
});
Tag.belongsToMany(Game, {

    through: {
        model: GameTag,
    },

});

// TODO add comment relationships

module.exports = { User, ForumPost, Tag, Game };
