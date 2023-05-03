const User = require('./User');
const ForumPost = require('./forumPost');
const Game = require('./banana');
const Tag = require('./Tag');
const GameTag = require('./gameTag')
const Comment = require('./Comment')

ForumPost.belongsTo(User, {
    foreignKey: 'User_id',
});
User.hasMany(ForumPost, {
    foreignKey: 'User_id',
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

module.exports = { User, ForumPost, Tag, Game, Comment };
