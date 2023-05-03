const { Game } = require('../models')

const gameData = [
    {
        title: 'Pokemon GO',
        similar_games: 'Ingress Prime',
    },
    {
        title: 'Destiny 2',
        similar_games: 'Warframe',
    },
    {
        title: 'World of Warcraft',
        similar_games: 'Final Fantasy XIV', 
    },
    {
        title: 'Final Fantasy XIV',
        similar_games: 'World of Warcraft',
    },
];

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
