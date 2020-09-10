const router = require('express').Router()
const { Workout} = require('../models')

// GET all workouts
router.get('/workouts', (req, res) => {
  Workout.find()
   
    .then(workouts => res.json(workouts))
    .catch(err => console.log(err))
})

// POST one workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    
        .then(workout => res.json(workout))
        .catch(err => console.log(err))
    })
//     .catch(err => console.log(err))
// })

// PUT one exercise
router.put('/workouts/:id', (req, res) => {
  workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
  .then(() => res.sendStatus(200))
  .catch(err => console.log(err))
})

// DELETE one exercise
router.delete('/workouts/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router