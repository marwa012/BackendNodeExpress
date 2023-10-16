const express = require("express")
const route = require("express").Router()
const upload = require('../middleware/uploadFile')
const RessourceController = require("../controllers/resshum_controller")
route.post("/register",upload.single("photo"),RessourceController.register)
route.get("/getall",RessourceController.getall)
route.get("/getbyid/:id",RessourceController.getbyid)
// route.get("/getbyidrh/:id",RessourceController.getbyidrh)
route.get("/getbyname",RessourceController.getbyname)
route.put("/update/:id",upload.single("photo"),RessourceController.update)
route.delete("/delete/:id",RessourceController.delete)
module.exports=route