const router = require('express').Router();
const { Game, ForumPost } = require('../../models');

router.get('/:id', async (req, res) => {
  try {
    const dbGameData = await ForumPost.findAll()
    const posts = dbGameData.map((post) => post.get({ plain: true }))
    res.render("game", {
      posts
    })
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
})

  module.exports = router;