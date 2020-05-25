const router = require('express').Router()
const Exercise = require('../models/excercise.model')

// get all exercises
router.get('/' , (req,res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(error => res.status(400).json({msg: `Error ${error}`}))
})

// add exercise
router.post('/add', (req,res) => {
    let {username, description, duration, date , users} = req.body 
    duration = Number(duration)
    date = Date.parse(date)

    let newExercise = new Exercise({username, description, duration, date , users})

    newExercise.save()
        .then(exercise => res.json({msg: "Add Exercise Sucessful", exercise}))
        .catch(error => res.status(400).json({msg: `Error ${error}`}))
})

//get single exercise
router.get('/:id', (req,res)=>{
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(error => res.status(400).json({msg: 'Invalid Id'}))
})

//delete exercise 
router.delete('/:id' , (req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(error => res.status(400).json({msg: 'Invalid Id'}))
})

// update exercise 
router.patch('/:id' , (req,res) => {
    let {username, description , duration , date} = req.body 
    duration = Number(duration)
    date = Date.parse(date)
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = username
            exercise.description = description
            exercise.duration = duration
            exercise.date = date
            exercise.save()
                .then(exe => res.json(exe))
                .catch(error => res.status(400).json({msg: error.message}))
        })
        .catch(error => res.status(400).json({msg: 'Invalid Id'}))
})


module.exports = router