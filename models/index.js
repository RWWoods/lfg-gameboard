const User = require('./User');
const ForumPost = require('./ForumPost');
const Game = require('./Game');
const Tag = require('./Tag');
const GameTag = require('./gameTag')
const Comment = require('./Comment')

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

Comment.belongsTo(ForumPost, {
    foreignKey: 'ForumPost_id',
});

ForumPost.hasMany(Comment, {
    foreignKey: 'ForumPost_id',
});

// -----added the forumpost to game relationship--------
Game.hasMany(ForumPost, {
    foreignKey: 'game_id'
});

ForumPost.belongsTo(Game, {
    foreignKey: 'game_id,'
});
// -------------------------------------------------------

module.exports = { User, ForumPost, Tag, Game, Comment, GameTag };
