const Answer = require('../models/answer.model')

module.exports = {

    cerate: (req, res) => {
        Answer.create(req.body, (err, question) => {
            res.json(question)
        })
    },

    deleteAnswer: (req, res) => {
        Answer.findByIdAndDelete({ _id: req.params.id }, (err, question) => {
            res.json(question)
        })
    },


    getAnswersByQuestion: (req, res) => {
        Answer.find({ question: req.params.question }, (err, answers) => {
            res.json(answers)
        })
    }


}