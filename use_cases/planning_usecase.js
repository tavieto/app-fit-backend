const PlanningModel = require('../models/Planning')

const insert = async (planning) => {
  const model = new PlanningModel(planning)
  model.save()
}

const get = async () => {
  const model = await PlanningModel
    .find()
    .populate({
      path: 'workouts',
      model: 'Workout',
      populate: [
        {
          path: 'exercises',
          model: 'Exercise'
        },
        {
          path: 'muscles',
          model: 'Muscle'
        }
      ]
    })

  return model
}

module.exports = { insert, get }