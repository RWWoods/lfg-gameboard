const sequelize = require('../config/connection');
const { User, forumPost } = require('../models');

const userData = require('./userData.json');
const forumPosts = require('./forumPosts.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of forumPosts) {
    await forumPost.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
