const { GameTag } = require('../models')

const gameTagData = [
    {
        game_id: 1,
        tag_id: 1,
    },
    {
        game_id: 2,
        tag_id: 2,
    },
    {
        game_id: 3,
        tag_id: 3, 
    },
    {
        game_id: 4,
        tag_id: 4,
    },
];

const seedGameTag = () => GameTag.bulkCreate(gameTagData);

module.exports = seedGameTag;