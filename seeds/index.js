const sequelize = require('../config/connection');

const seedUsers = require('../seeds/userData');
const seedTags = require('../seeds/tagsData');
const seedPosts = require('../seeds/forumPosts');
const seedGames = require('../seeds/gamesData');
const seedComments = require('../seeds/commentsData');
const seedGameTag = require('../seeds/gameTagData')

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedGames();
  await seedUsers();
  await seedTags();
  await seedPosts();
  await seedComments();
  await seedGameTag();
  
  process.exit(0);
};

seedAll();
