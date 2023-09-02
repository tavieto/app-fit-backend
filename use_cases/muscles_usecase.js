const Muscle = require('../models/Muscle');

const remove = async(id) =>  await Muscle.findByIdAndDelete(id)

const insert = async (muscle) => {
  const muscleEntity = new Muscle({
    name: muscle.name.toLowerCase()
  })

  return muscleEntity.save()
}

const get = async () =>  await Muscle.find()

const getById = async (id) => await Muscle.findById(id)


module.exports = { get, insert, remove, getById, }