const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: true,
        unique: true,
    },
    price: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },


})

module.exports = mongoose.model("Product", productSchema)