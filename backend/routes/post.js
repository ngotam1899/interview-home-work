const router = require("express-promise-router")()

const postController = require('../controllers/post')
const commentController = require('../controllers/comment')

router.route('/')
  .get(postController.getAllPost)

router.route('/:IDPost')
  .get(postController.getDetailPost)

router.route('/:IDPost/comments')
  .get(commentController.getCommentByPost)

module.exports = router