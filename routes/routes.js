const express = require('express')
const trainingRoutes = require("./workout_routes")
const muscleRoutes = require("./muscle_routes")
const exercisesRoutes = require("./exercices_routes")
const planningRoute = require("./planning_routes")
const userRoute = require("./user_routes")

module.exports = (app) => {
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json());

  app.use('/api', planningRoute)
  app.use('/api', muscleRoutes)
  app.use('/api', exercisesRoutes)
  app.use('/api', userRoute)
  app.use('/api', trainingRoutes)
}