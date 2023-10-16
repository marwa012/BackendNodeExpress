const express = require("express")
const presencecontroller = require("../controllers/presence_controller")


const route = express.Router()
route.post("/create",presencecontroller.create)
route.get("/getAll",presencecontroller.getall)
route.get("/getbyid/:id",presencecontroller.getbyid)
route.get("/getbyname",presencecontroller.getbyname)
route.get("/getbyMem/:id",presencecontroller.getbyidmembre)
route.delete("/deletebyid/:id",presencecontroller.delete)
route.put("/update/:id",presencecontroller.updatepresence)
module.exports= route