const { Game } = require('../models')

const gameData = [
    {
        title: 'Pokemon GO',
        similar_games: ['Ingress Prime', 'Jurrassic World Alive', 'Pikmin Bloom'],
        tag_id: 1,
    },
    {
        title: 'Destiny 2',
        similar_games: ['Warframe', 'Apex Legends', 'Anthem'],
        tag_id: [2, 3,],
    },
    {
        title: 'World of Warcraft',
        similar_games: ['Final Fantasy XIV', 'Runescape', 'Destiny 2'],
        tag_id: [2, 3],
    },
    {
        title: 'Final Fantasy XIV',
        similar_games: ['World of Warcraft', 'Runescape', 'Destiny 2'],
        tag_id:[2, 4],
    },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
