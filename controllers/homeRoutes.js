const router = require('express').Router();
const {ForumPost, User, } = require('../models')

router.get('/', async (req, res) => {
    try {
const forumData = await ForumPost.findAll({

    include: [
        {
            model: User,
        }
    ]
})
const forum= forumData.map((post) => post.get({ plain: true}));
res.render('homepage', {
    forum,
    logged_in: req.session.logged_in
});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router