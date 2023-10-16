const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
    answer: String,
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'question'
    }
})

module.exports = new mongoose.model('answer', answerSchema)