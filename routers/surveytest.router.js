const express = require('express')

const route = express.Router()

const surveyController = require('../controllers/surveytest.controller')
const statisticsController = require('../controllers/statistics.controller')

route.post('/', surveyController.create, statisticsController.incrementVoted)



module.exports = route