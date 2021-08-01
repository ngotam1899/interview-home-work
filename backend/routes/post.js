const router = require("express-promise-router")()

const postController = require('../controllers/post')

router.route('/')
  .get(postController.getAllPost)

  module.exports = router