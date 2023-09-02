const UserModel = require("../models/User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const ObjectId = require('mongoose').Types.ObjectId

const insert = async (user) => {
  const model = new UserModel(user)
  return await model.save()
}

const login = async (email, password) => {
  const user = await UserModel.findOne({ email: email })
  const crypt = new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (error, isMatch) => {
      if (error) {
        reject(error)
      } else if (!isMatch) {
        reject(new Error("user_password_incorrect","Senha ou usuario incorretos" ))
      } else {
        token = jwt.sign({id: user.id}, process.env.SECRET, {
          expiresIn: 7200
        })
        resolve({
          auth: true,
          message: "Login feito com sucesso",
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token,
            type: user.type,
            height: user.height,
            weight: user.weight 
        }})
      }
    })
  })

  return crypt
}

const getStudents = async (personalId) => {
  const students = await UserModel.find({ personalId: new ObjectId(personalId)})
  return students
}

module.exports = { insert, login, getStudents }
