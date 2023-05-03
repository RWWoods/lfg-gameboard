const { Tag } = require('../models')

const tagData = [
    {
        tag_name: 'Mobile Games'
    },
    {
        tag_name: 'MMOs'
    },
    {
        tag_name: 'SciFi'
    },
    {
        tag_name: 'Fantasy'
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
