const router = require("express-promise-router")()

const commentController = require('../controllers/comment')

router.route('/')
  .get(commentController.getAllComment)

module.exports = router