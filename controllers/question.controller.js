const Question = require('../models/question.model')

module.exports = {

    cerate: (req, res) => {
        Question.create(req.body, (err, question) => {
            res.json(question)
        })
    },

    deleteQuestion: (req, res) => {
        Question.findByIdAndDelete({ _id: req.params.id }, (err, question) => {
            res.json(question)
        })
    },


    getQuestionsBySurvey: (req, res) => {
        Question.find({ survey: req.params.survey }, (err, questions) => {
            res.json(questions)
        })
    }

    ,

    getQuestionById  :(req  ,res) => {
        Question.findById({ _id: req.params.id }, (err, questions) => {
            res.json(questions)
        })
    } 


}