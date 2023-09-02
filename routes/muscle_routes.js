const express = require('express')
const muscleUseCase = require('../use_cases/muscles_usecase')
const router = express.Router()
const jwt = require('../core/jwt_request').jwtAuth

const musclePrefix = "/muscle"

//POST
router.post(`${musclePrefix}/register`,jwt , async (req, res) => {
  try {
    await muscleUseCase.insert({
      name: req.body.name,
      id: req.body.id
    })

    res.status(200).json({
      id: req.body.id,
      message: 'Músculo salvo com sucesso',
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get(`${musclePrefix}/byId`, jwt , async (req, res) => {
  try {
    const muscle = await muscleUseCase.getById(req.query.id)
    res.json(muscle)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get(`${musclePrefix}`,jwt , async (req, res) => {
  try {
    const list = await muscleUseCase.get()
    res.json(list)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.delete(`${musclePrefix}/delete`,jwt , async (req, res) => {
  try {
    await muscleUseCase.remove(req.body.id)

    res.send(`Musculo deletado com sucesso`)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router;
