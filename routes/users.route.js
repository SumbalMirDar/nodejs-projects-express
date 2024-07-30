const express = require("express")
const router = express.Router()
const User = require('../controller/users.js')
const authenticate = require('../middleware/auth.js');

router.post('/register', User.registerUSer)
router.post( '/login', User.login)
//router.post( '/addProduct', User.addProduct)
router.post('/addProduct', authenticate, User.addProduct);


module.exports = router;