const express = require('express')
const uuid = require('uuid')
const Joi = require('joi')
const router = express.Router()
let members = require('../../Members')
// get all members
router.get('/' , (req,res) => res.json(members))

//get single member 
router.get('/:id', (req,res) => {
    const found = members.find(m => m.id === parseInt(req.params.id))
    
    found ? res.json(found) : res.status(400).json({smg: `Can't found member with an  id of ${req.params.id}`})
})

//create members 
router.post('/' , (req,res) => {
    let {email,username} = req.body
    let newMember = {
        id: uuid.v4(),
        email,
        username
    }

    let newMemberSchema = Joi.object().keys({
        id: Joi.required(),
        email : Joi.string().trim().email().required(),
        username : Joi.string().trim().min(3).required()
    })

    Joi.validate(newMember , newMemberSchema , (error , result) => {
        if(error){
            console.log(error.details.map(e => e.message).join(",")),
            res.status(400).json({msg: error.details.map(e => e.message).join(",")})
        }else{
            members.push(result)
            res.json(members)
        }
    })
})

// Update members 
router.patch('/:id' , (req,res) => {
    let member = members.find(m => m.id === parseInt(req.params.id))
     
    if(member){
        let {username,email} = req.body

        let memberSchema = Joi.object().keys({
            id : Joi.required(),
            username : Joi.string().min(3).required(),
            email : Joi.string().email().required()
        })
        member.username  = username ? username : member.username
        member.email = email ? email : member.email 

        Joi.validate(member , memberSchema , (err , result) => {
            if(err){
                res.status(400).json({msg: err.details.map(e => e.message).join(",")})
            }
            res.json(result)
        })
    }else{
        res.status(400).json({msg: "Can't find member"})
    }
})

//Delete member 

router.delete('/:id' , (req,res) => {
    let dm = members.some(m => m.id === parseInt(req.params.id))
    if(dm){
        members = members.filter(m => m.id !== parseInt(req.params.id))
        res.json({msg: "Delete success", members})
    }else{
        res.json({msg: "This member not found!"})
    }

})

module.exports = router