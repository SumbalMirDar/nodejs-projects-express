const express = require("express")
const app = express()
const  connectDB = require('./config/db.js')
const routes = require('./routes/users.route.js')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger-output.json');
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(routes)
connectDB()
app.listen(PORT,()=>{
    console.log("server running on 3000")
})

module.exports=app