const mongoose = require('mongoose');
const { toJSON } = require('./ModelMapper');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    muscle: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Muscle'
    },
    type: {
        required: true,
        type: String
    },
    number_of_repeat: {
        required: true,
        type: Number
    },
    number_of_series: {
        required: true,
        type: Number
    },
    observation: {
        required: false,
        type: String
    },
    rest_time: {
        required: false,
        type: String
    }
})

dataSchema.set('toJSON', {
    transform: (doc,ret) => toJSON(doc,ret)
})

module.exports = mongoose.model('Exercise', dataSchema)