const express = require('express')
const planningUsecase = require('../use_cases/planning_usecase')
const router = express.Router()
const jwt = require('../core/jwt_request').jwtAuth

const planningPrefix = "/planning"

router.post(`${planningPrefix}/register`,jwt , async (req, res) => {
  try {
   await planningUsecase.insert(req.body)
   res.send({ sucess: true, message: "Planjeamento cadastrado com sucesso"})
  } catch (error) {
   res.status(400).json({ message: error.message })
  }
})

router.get(`${planningPrefix}`,jwt ,async (req,res) => {
  try {
    const list = await planningUsecase.get()

    res.json(list)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router