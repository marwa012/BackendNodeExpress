const express = require('express')

const route = express.Router()

const StatisticController = require('../controllers/statistics.controller')

route.post('/count/survies', StatisticController.CountSurveys)
route.post('/count/surviestests', StatisticController.countServiesTests)
route.get('/survieseverymonth', StatisticController.SurviesEveryMonth)
route.get('/perQuestion/:id', StatisticController.statisticPerQuestion)

module.exports = route