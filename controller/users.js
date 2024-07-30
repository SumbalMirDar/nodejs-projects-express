require('dotenv').config();
const User = require('../models/users.model')
const secret = process.env.JWT_SECRET; 
const Product = require('../models/products.model')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');
const registerUSer = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "field missing" });
    }

    try {
        const existingUser = await User.findOne({ email }).exec();

        if (existingUser) {
            return res.status(400).json({ message: "email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(200).json({ message: "user saved successfully" });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    // Verify email and password (this part is simplified)
    const user = await User.findOne({ email });
  
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  
    // Generate JWT token
    const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: '1h' });
    res.json({ token });
  };

const addProduct  = async(req, res)=>{
    try{
        console.log("within try block of addproduct")

        const {productName , price, quantity} = req.body
        if(!productName || !price  || !quantity){
            res.status(400).json({message:"all fields are required"})
        } 
        let product = await Product.findOne({productName}).exec()
        if(product){
            res.status(400).json({message:"product already added in records"})
        }else{
            product = new Product({
                productName,
                price,
                quantity
            })
            await product.save()
            res.status(201).json({
                message: "product added successfully",
                record: product
              });        
            }
    }catch(e){
        console.log("eror", e)
    }
}

module.exports = {
    registerUSer,
    login,
    addProduct
}
