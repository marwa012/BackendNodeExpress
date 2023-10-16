const mongoose = require("mongoose")
const prereservationSchema= new mongoose.Schema({
    Date_pres:{
        type:String,
       
    },
},{timestamps:true})

module.exports = mongoose.model("presence",prereservationSchema)
