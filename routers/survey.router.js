const express = require("express");
const route = express.Router();

const surveyController = require("../controllers/survey.controller");

route.post("/", surveyController.cerate);
route.delete("/:id", surveyController.deleteSurvey);
route.get("/byid/:id", surveyController.getSUurveyById);
route.get("/", surveyController.getAllSurveys);
route.get("/:searcher", surveyController.getSurveysBySearcher);
route.put("/:id", surveyController.voted);

module.exports = route;
