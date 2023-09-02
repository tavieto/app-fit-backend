const ExerciseModel = require('../models/Exercise')

const insert = async (exercise) => {
  const exerciseEntity = new ExerciseModel({
    name: exercise.name,
    muscle: exercise.muscle,
    type: exercise.type,
    number_of_repeat: exercise.number_of_repeat,
    number_of_series: exercise.number_of_series,
    observation: exercise.observation,
    rest_time: exercise.rest_time
  })
  return exerciseEntity.save()
}

const get = async () => {
  return await ExerciseModel.find().populate('muscle')
}

const remove = async (id) => {
  return await ExerciseModel.findByIdAndDelete(id)
}

const update = async (id, exercise) => {
  return await ExerciseModel.findByIdAndUpdate(id, exercise, { new: true })
}

module.exports = { insert, get, remove, update }