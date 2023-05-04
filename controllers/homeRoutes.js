const router = require('express').Router();
const { ForumPost, User, } = require('../models')

// HOME PAGE GET ROUTE
router.get('/', async (req, res) => {
    try {

        res.render('homepage', {
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GAMES FORUM PAGE GET ROUTE
router.get('/games', async (req, res) => {
    try {
        const forumData = await ForumPost.findAll({

            include: [{ model: User }],
        });

        const forum = forumData.map((post) => post.get({ plain: true }));
        res.render('gamepage', {
            forum,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// READ POST PAGE GET ROUTE
router.get('/post/:id', async (req, res) => {
    try {
        const forumData = await ForumPost.findByPk(req.params.id, {
            include: [{ model: User }],
        })
        const forum = forumData.get({ plain: true });
        res.render('readpost', {
            ...forum,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// WRITE POST PAGE GET ROUTE
router.get('/newpost', async (req, res) => {
    try {

        res.render('writepost', {
            // logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// router.get('/newpost', /* withAuth, */ async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User.findByPk(req.session.id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: ForumPost }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('writepost', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//         console.log(err);
//     }
// });



















// LOGIN PAGE GET ROUTE
router.get('/login', async (req, res) => {
    try {
        res.render("login")
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.get('/:id', async (req, res) => {
//     try {
//       const dbForumData = await ForumPost.findAll({
//       include: [{ model: ForumPost }],
//     });
//         const forum = dbForumData.map((post) => post.get({ plain: true}));


//         res.render('gamepage', {
//             forum,
//             logged_in: req.session.logged_in,
//         });
//             } catch (err) {
//                 console.log(err);
//                 res.status(500).json(err);
//             }
//         });



module.exports = router;