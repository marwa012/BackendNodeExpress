const Survey = require("../models/survey.model");

module.exports = {
  cerate: (req, res) => {

    
   
    Survey.create(req.body, (err, survey) => {
      res.json(survey);
    });
  },

  deleteSurvey: (req, res) => {
    Survey.findByIdAndDelete({ _id: req.params.id }, (err, survey) => {
      res.json(survey);
    });
  },

  getAllSurveys: (req, res) => {
    Survey.find({})
      .populate("searcher")
      .then((survies) => {
        res.status(200).json(survies);
      });
  },

  getSurveysBySearcher: (req, res) => {
    Survey.find({ searcher: req.params.searcher })
      .populate("searcher")
      .then((survies) => {
        res.status(200).json(survies);
      });
  },

  voted: (req, res) => {
    Survey.findByIdAndUpdate(
      { _id: req.params.id },
      { $inc: { voted: 1 } },
      { new: true },
      (err, survey) => {
        if (err) {
          res.status(500).json("error increment survey ");
        } else {
          res.status(200).json(survey);
        }
      }
    );
  },

  getSUurveyById: (req, res) => {
    Survey.findById({ _id: req.params.id })
      .populate("searcher")
      .then((survey) => {
        res.status(200).json(survey);
      });
  },
};
