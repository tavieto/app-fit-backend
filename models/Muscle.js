const mongoose = require('mongoose')
const { toJSON } = require('./ModelMapper');

const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  }
})

dataSchema.set('toJSON', {
  transform: (doc,ret) => toJSON(doc,ret)
})

module.exports = mongoose.model('Muscle', dataSchema)