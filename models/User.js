const mongoose = require('mongoose')
const { toJSON } = require('./ModelMapper');
const bcrypt = require("bcryptjs")

const dataSchema = mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    createIndexes: { unique: true },
  },
  cellphone: {
    type: String,
  },
  password: {
    required: true,
    type: String
  },
  token: {
    type: String
  },
  auth: {
    type: Boolean
  },
  type: {
    type: String,
    enum: ['ADM', 'ALUNO', 'PERSONAL'],
    default: 'ALUNO',
    required: true
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  actual_planning: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Planning'
  },
  past_planning: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Planning' }
  ],
  personalId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

dataSchema.set('toJSON', {
  transform: (doc, ret) => toJSON(doc, ret)
})

dataSchema.pre('save', function (next) {
  const user = this
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, (saltError, salt) => {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError)
          }

          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }

})
module.exports = mongoose.model('User', dataSchema)