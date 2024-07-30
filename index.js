const express = require("express")
const app = express()
// const passport = require('passport');
// require('./config/passport'); // Adjust the path as needed

//app.use(passport.initialize());
const  connectDB = require('./config/db.js')
const routes = require('./routes/users.route.js')
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(routes)
connectDB()
app.listen(PORT,()=>{
    console.log("server running on 3000")
})

module.exports=app