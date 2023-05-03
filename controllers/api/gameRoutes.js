const router = require('express').Router();
const { Game, forumPost } = require('../models');

router.get('/games/:id', async (req, res) => {
    try {
      const dbGameData = await Game.findByPk(req.params.id, {
        include: [
          {
            model: forumPost,
            attributes: [
              'id',
              'title',
              'body',
              'user_id',
              'created_at',
            ],
          },
        ],
      });
  
      const game = dbGameData.get({ plain: true });
      res.render('game-page', { game });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });