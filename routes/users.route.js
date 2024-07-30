const express = require("express")
const router = express.Router()
const User = require('../controller/users.js')
const authenticate = require('../middleware/auth.js');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type'), false);
    }
    cb(null, true);
  };
  
const upload = multer({ storage: storage , fileFilter: fileFilter}); 
router.post('/register', User.registerUSer)
router.post( '/login', User.login)
router.post('/addProduct', authenticate, User.addProduct);
router.post('/upload', authenticate,  upload.array('files', 10),User.uploadFile);


module.exports = router;