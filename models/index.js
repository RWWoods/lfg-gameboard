const User = require('./User');
const ForumPost = require('./forumPost');


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
module.exports = { User, ForumPost };
