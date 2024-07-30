const mongoose = require("mongoose")

const dbURL = 'mongodb://localhost:27017/practiceDB';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const connectDB = async ()=>{
    try{
        await mongoose.connect(dbURL, options)
        console.log(`${dbURL} connected`)
    }catch(e){
        console.log(e)
    }
  }

  module.exports = connectDB