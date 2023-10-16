const express = require('express')

const route = express.Router()

const questionController = require('../controllers/question.controller')


route.get('/question/:id', questionController.getQuestionById)
route.post('/', questionController.cerate)
route.delete('/:id', questionController.deleteQuestion)
route.get('/:survey', questionController.getQuestionsBySurvey)


module.exports = route