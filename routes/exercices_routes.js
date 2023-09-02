const express = require('express');

const router = express.Router()
const exerciseUsecase = require('../use_cases/execises_usecase')
const jwt = require('../core/jwt_request').jwtAuth

const exercisePrefix = "/exercise"

//Post Method
router.post(`${exercisePrefix}/register`, jwt, async (req, res) => {
  try {
    const exerciseEntity = await exerciseUsecase.insert({
      name: req.body.name,
      muscle: req.body.muscle,
      type: req.body.type,
      number_of_repeat: req.body.number_of_repeat,
      number_of_series: req.body.number_of_series,
      observation: req.body.observation,
      rest_time: req.body.rest_time
    })

    res.status(200).json({
      message: "Exercício registrado com sucesso"
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// router.get
router.get(`${exercisePrefix}`,jwt , async (req, res) => {
  try {
    const list = await exerciseUsecase.get()
    res.json(list)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// router.patch
router.patch(`${exercisePrefix}/update/:id`,jwt , async (req,res) => {
    try {
      const id = req.params.id
      const updatedData = req.body
      await exerciseUsecase.update(id,updatedData)

      res.send({ message: 'Exercicio atualizado com sucesso' })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
})

// router.delete
router.delete(`${exercisePrefix}/delete`,jwt , async (req, res) => {
  try {
    await exerciseUsecase.remove(req.query.id)

    res.send({ message: 'Exercicio deletado com sucesso' })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router;
