const WorkoutModel = require("../models/Workout")

const insert = async (training) => {
  const model = new WorkoutModel(training)
  model.save()
}

const get = async () => {
  const model = await WorkoutModel
    .find()
    .populate({
      path: 'exercises',
      model: 'Exercise',
      populate: {
        path: 'muscle',
        model: "Muscle"
      }
    }).populate({
      path: 'muscles',
      model: "Muscle"
    })
  
  return model
}

const remove = async (id) => {
  return await WorkoutModel.findByIdAndDelete(id)
}

const update = async (id, training) => {
  return await WorkoutModel.findByIdAndUpdate(id, training, { new: true })
}

const getById = async (id) => await WorkoutModel.findById(id)

module.exports = { insert, get, remove, update, getById}