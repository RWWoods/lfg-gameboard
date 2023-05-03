const { Comment } = require('../models')

const commentData = [
    {
        body: 'Wow so cool!',
        user_id: 1,
        created_at: 'May 1, 2023 08:30:00',
    },
    {
        body: 'This is awesome!',
        user_id: 2,
        created_at: 'May 1, 2023 08:30:00',
    },
    {
        body: 'Sounds kind of boring',
        user_id: 3,
        created_at: 'May 1, 2023 08:30:00',
    },
    {
        body: 'Awesome, wanna join my raid team?',
        user_id: 4,
        created_at: 'May 1, 2023 08:30:00',
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
