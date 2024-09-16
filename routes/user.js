const express = require("express");
const router = express.Router();
const User = require("../models/users")

router.get("/users/", async (req, res) => {
    try{
        const allUsers = await User.find(); // Fetch all users from MongoDB
        res.render("users", { allUsers }); // Pass users data to the template
    }catch (err) {
    res.status(500).send("Server Error"); // Handle errors
  }
});

router.post("/user/", async (req, res) => {
    try{
        const { username, password } = req.body
        const newUser = new User({username, password})
        await newUser.save();
        // return res.status(201).json({"message": "User Created!", "user": newUser})
        // json api return
        res.redirect('/users');
    }catch (err) {
    res.status(500).send("Server Error"); // Handle errors
  }
});

module.exports = router; // Export the router