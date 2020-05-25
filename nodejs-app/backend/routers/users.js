const router = require('express').Router()
const User = require('../models/user.model')

// get all users
router.get('/' , (req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json({smg: `Error ${error}`}))
})

// create user
router.post('/add', (req,res) => {
    let {username} = req.body

    let newUser = new User({username})

    newUser.save()
    .then(user => res.json({msg: "User add success" , user}))
    .catch(error => res.status(400).json({msg: `Error ${error}`}))
})

module.exports = router 