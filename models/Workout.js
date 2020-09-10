const { model, Schema } = require('mongoose')

const Workout = new Schema({
  name: {
    type: String,
    
    required: true
  },
  type: {
    type: String,
    
    required: true
  },
  weight: {
    type: Number,
    
    required: true
  },
  sets: {
    type: Number,
    
    required: true
  },
  reps: {
    type: Number,
    
    required: true
  },
  duration: {
    type: Number,
    
    required: true
  },
  distance: {
    type: Number,
    
    required: false
  },
  
}, { timestamps: true })

module.exports = model('Workout', Workout)