const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('../models/users.model')

router.get('/' , (req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json({msg: err}))
}) 

router.post('/login' , (req,res) => {
    let {email,password} = req.body     
    User.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err , result) => {
                if(err) throw err 
                result ? res.json(user) : res.status(400).json({msg: "Invalid input!"})
            })
        }else{
            res.status(400).json({msg: "Invalid input!"})
        }
    })
    .catch(err => res.status(400).json({msg: err}))
})

router.post('/register', (req,res) => {
    let {username , email , password} = req.body    

    User.findOne({email : email})
    .then(user => {
        if(user){
            res.status(400).json({error: "This email is already register!"})
        }else{
            bcrypt.genSalt(10, (err , salt) => {
                bcrypt.hash(password, salt , (error , hash) => {
                    if(error) throw error 
                    let newUser = new User({username , email , password: hash})
                    newUser.save()
                    .then(user => res.json(user))
                    .catch(err => res.status(400).json({msg: err}))
                })
            })
        }
    })
    .catch(err => res.status(400).json({msg: err}))
})

module.exports = router