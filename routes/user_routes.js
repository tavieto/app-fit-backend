const express = require('express')
const userUsecase = require('../use_cases/user_usecase')
const router = express.Router()
const jwt = require('../core/jwt_request').jwtAuth

const userPrefix = "/user"

router.post(`${userPrefix}/register`, async (req, res) => {
  console.log(req.body)
  try {
    await userUsecase.insert(req.body)
    res.send({ sucess: true, message: "Usuário cadastrado com sucesso" })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: error.message })
  }
})

router.post(`${userPrefix}/login`, async (req, res) => {
  try {
    const response = await userUsecase.login(req.body.email, req.body.password)
    res.send(response)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.get(`${userPrefix}/students`,jwt , async (req, res) => {
  try {
    const response = await userUsecase.getStudents(req.query.personalId)
    res.send(response)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

module.exports = router