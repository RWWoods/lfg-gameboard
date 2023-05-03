const { User } = require('../models')

const userData = [
    {
        name: 'Carol Perkins',
        email: 'cpbaby@gmail.com',
        password: 'abcd1234',
    },
    {
        name: 'Bobby Bobkins',
        email: 'bbkins@gmail.com',
        password: 'abcd1234',
    },
    {
        name: 'Goopy GilsCarbo',
        email: 'GoopyG@gmail.com',
        password: 'abcd1234',
    },
    {
        name: 'Hannah Montana',
        email: 'itsMiley@gmail.com',
        password: 'abcd1234',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

