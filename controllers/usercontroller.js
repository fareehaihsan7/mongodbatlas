/*const users = require("../models/users");
let user=require("../models/users");
let usercontroller={
    
  create:async(req,res)=>{
    let newUser = new users(req.body);
    let savedUser=await newUser.save();
    res.json(savedUser);
  }
  
}
module.exports=usercontroller;*/
// controllers/userController.js
const users = require('../models/users');

exports.createUser = async (req, res) => {
  try {
    const { username, email,age } = req.body;
    const newusers = new users({ username, email,age });

    // Save the new user to the database
    await newusers.save();

    res.status(201).json(newusers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
};
