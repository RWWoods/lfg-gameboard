const router = require('express').Router();
const { forumPost, Comment } = require('../models');

router.get('/forumPost/:id', async (req, res) => {
    try {
      const dbPostData = await forumPost.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
            attributes: [
              'id',
              'body',
              'user_id',
              'created_at',
            ],
          },
        ],
      });
  
      const post = dbPostData.get({ plain: true });
      res.render('main', { forumPost });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });