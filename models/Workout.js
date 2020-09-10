const { model, Schema } = require('mongoose')

const Workout = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  type: {
    type: String,
    unique: true,
    required: true
  },
  weight: {
    type: Number,
    unique: true,
    required: true
  },
  sets: {
    type: Number,
    unique: true,
    required: true
  },
  reps: {
    type: Number,
    unique: true,
    required: true
  },
  duration: {
    type: Number,
    unique: true,
    required: true
  },
  distance: {
    type: Number,
    unique: true,
    required: false
  },
  
}, { timestamps: true })

module.exports = model('Workout', Workout)