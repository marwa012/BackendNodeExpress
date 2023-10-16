const Survey = require('../models/survey.model')
const SurveyTest = require("../models/surveytest.model")


module.exports = {

    CountSurveys: async (req, res) => {

        let query = req.body.role === 'admin' ? {} : {searcher : req.body.id} 

        Survey.find(query, function (err, count) {
            if (err) {
                res.status(200).json(0)
            } else {
                res.status(200).json(count.length)
            }
        });


    },

    countServiesTests: async (req, res) => {

        let query = req.body.role === 'admin' ? {} : {searcher : req.body.id} 
        SurveyTest.find(query, function (err, count) {
            if (err) {
                res.status(200).json(0)
            } else {
                res.status(200).json(count.length)
            }
        });
    },

    incrementVoted: (req, res) => {
        Survey.findByIdAndUpdate({ _id: req.sid }, { $inc: { voted: 1 } }, function (err, data) {
            res.status(200).json('succcess')
        })
    }
    ,

    SurviesEveryMonth: (req, res) => {
        const data = Survey.aggregate([{
            $group: {
                _id: {

                    month: { $month: "$createdAt" }
                },
                Total: { $sum: 1 }
            }
        }])

        res.status(200).json(data)
    },

    statisticPerQuestion: async (req, res) => {

        let qid = req.params.id

        const tests = await SurveyTest.find({})
        const questions = await tests.filter(t => t.results.find(r => r.question.toHexString() === qid))

        const surviedquestions = []

        for (let item of questions) {
            for (let el of item.results) {
                if (el.question.toHexString() === qid)
                    surviedquestions.push(el)
            }
        }

        let answers = []

        for (let item of surviedquestions) {
            answers = [...answers, ...item.answers]
        }
        const counts = {};
        answers.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

        res.status(200).json({
            question: qid,
            counts: counts
        })

    }
}