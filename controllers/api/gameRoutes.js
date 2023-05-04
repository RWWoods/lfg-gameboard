const router = require('express').Router();
const { Game, ForumPost } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbGameData = await Game.findAll();
    res.status(200).json(dbGameData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/:id', async (req, res) => {
  try {
    const dbGameData = await Game.findByPk(req.params.id, {
        include: [
          { 
            model: ForumPost,
            attributes: [
              'id',
              'title',
              'body',
              'user_id',
              'created_at',
            ]
          }]
      });

    res.status(200).json(dbGameData);
  } catch (err) {
    res.status(500).json(err);
  }
})
      
//   const game = dbGameData.get({ plain: true });
//       res.render('game-page', { game });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
// });

module.exports = router;