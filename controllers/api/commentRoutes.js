const router = require('express').Router();
const { ForumPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/:id',  async (req, res) => {
  try {
    // const newComment = await Comment.create({
    //   ...req.body,
    //   user_id: req.session.user_id,
    // });

    const post = await ForumPost.findOne({
      where: {
          id: req.params.id
      }
  })

  const newComment = await Comment.create({
    
      body: req.body.content, 
      user_id: "User_id", 
      created_at: "5"
  })
  

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
    console.log(req.body)
  }
});

  module.exports = router;