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
      res.render('main', { post });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });