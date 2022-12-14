const Router = require('express')
const router = new Router()

const UserController = require('../controllers/user_controller')

router.post('./user', UserController.createUser)
router.get('./user', UserController.getUsers)
router.get('./user/:id', UserController.getOneUser)




module.exports = router