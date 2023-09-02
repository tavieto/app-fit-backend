const mongoose = require('mongoose')
const { toJSON } = require('./ModelMapper');

const dataSchema = new mongoose.Schema({
   muscles : [{
      type: mongoose.Schema.Types.ObjectId, ref: 'Muscle'
   }],
   day_of_week: {
      type: String,
      enum: ['SEG','TER','QUA','QUI','SEX','SAB','DOM']
   },
   exercises: [{
     type: mongoose.Schema.Types.ObjectId, ref: 'Exercise'
   }]
})

dataSchema.set('toJSON', {
   transform: (doc,ret) => toJSON(doc,ret)
})

module.exports = mongoose.model('Workout', dataSchema)