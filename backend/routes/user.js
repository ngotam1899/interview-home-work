const router = require("express-promise-router")()

const userController = require('../controllers/user')

router.route('/')
  .get(userController.getAllUser)

module.exports = router