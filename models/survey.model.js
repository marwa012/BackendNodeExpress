const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
    title: String,
    description: String,
   
    voted: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = new mongoose.model('survey', surveySchema)