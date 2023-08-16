const express = require('express')
const User = require('../models/userModel');
const bcrypt = require('bcryptjs')
// SIGN UP
const register = async (req, res) => {
    try {
        const {email, username, password} = req.body;
        const hashPassword = bcrypt.hashSync(password);
        const user = new User({email, username, password: hashPassword});
        await user.save().then( () => {
            res.status(201).json({user: user});
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({message: 'User Already exists'})
    }
}
// SIGN IN 
const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) {
            res.status(400).json({
                message: "Please Register First"
            })
        }
        const isPassword = bcrypt.compareSync(req.body.password, user.password)
        if(!isPassword) {
            res.status(400).json({
                message: "Password not Correct"
            })
        }
        const { password, ...others} = user._doc;
        res.status(200).json({others})
    } catch (error) {
        
    }
}
module.exports = {
    register,
    login
}