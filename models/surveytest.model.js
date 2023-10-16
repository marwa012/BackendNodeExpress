const mongoose = require('mongoose')
const { mongo } = require('../config/database')

const shcema = new mongoose.Schema({
    survey: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'survey'
    },
    searcher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    results: [
        {
            question: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'question'
            },
            answers: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'answer'
                }
            ]
        }
    ],
    email : String,
    feedback : String
}, { timestamps: true })

module.exports = new mongoose.model('surveytest', shcema)