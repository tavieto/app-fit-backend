const express = require('express')
const workoutUsecase = require('../use_cases/workout_usecase')
const router = express.Router()

const jwt = require('../core/jwt_request').jwtAuth

const trainingPrefix = "/workout"

router.post(`${trainingPrefix}/register`,jwt , async (req, res) => {
   try {
    await workoutUsecase.insert(req.body)
    res.send({ sucess: true, message: "Treino cadastrado com sucesso"})
   } catch (error) {
    res.status(400).json({ message: error.message })
   }
})

router.get(`${trainingPrefix}`,jwt , async (req,res) => {
  try {
    const list = await workoutUsecase.get()

    res.json(list)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})


module.exports = router;