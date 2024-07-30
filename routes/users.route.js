const express = require("express")
const router = express.Router()
const User = require('../controller/users.js')
const authenticate = require('../middleware/auth.js');
const upload = require('../middleware/upload.js');
router.post('/register', User.registerUSer)
router.post( '/login', User.login)
router.post('/addProduct', authenticate, User.addProduct);
router.post('/upload', authenticate,  upload.array('files', 10),User.uploadFile);


module.exports = router;