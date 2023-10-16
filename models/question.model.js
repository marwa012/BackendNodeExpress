const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: String,
    survey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'survey'
    },
    responseType: {
        type: String,
        enum: ['multiple', 'unique']
    }
})

module.exports = new mongoose.model('question', questionSchema)