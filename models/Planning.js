const mongoose = require('mongoose')
const { toJSON } = require('./ModelMapper');

const dataSchema = new mongoose.Schema({
  start_date: {
    required: true,
    type: Date
  },
  end_date: {
    required: true,
    type: Date
  },
  workouts: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'Workout'
  }]
})

dataSchema.set('toJSON', {
  transform: (doc,ret) => toJSON(doc,ret)
})

module.exports = mongoose.model('Planning', dataSchema)