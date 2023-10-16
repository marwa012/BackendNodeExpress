const SurveyTest = require('../models/surveytest.model')


module.exports = {

    create: (req, res, next) => {
        SurveyTest.create(req.body, (err, test) => {
            if (err) {
                res.status(500).json('error' + err)
            } else {
                req.sid = req.body.survey
                next()
            }
        })
    }

}