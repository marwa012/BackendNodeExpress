const express = require('express')

const route = express.Router()

const answersController = require('../controllers/answer.controller')


route.post('/', answersController.cerate)
route.delete('/:id', answersController.deleteAnswer)
route.get('/:question', answersController.getAnswersByQuestion)


module.exports = route