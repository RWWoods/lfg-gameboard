const sequelize = require('../config/connection');

const seedUsers = require('../seeds/userData');
const seedTags = require('../seeds/tagsData');
const seedPosts = require('../seeds/forumPosts');
const seedGames = require('../seeds/gamesData');
const seedComments = require('../seeds/commentsData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedTags();
  await seedPosts();
  await seedGames();
  await seedComments();
  
  process.exit(0);
};

seedAll();
