const mongoose = require("mongoose") 
const umbrellaSchema = mongoose.Schema({
    
    
        brand: String,     
        color:  String,
        cost: Number
        

}) 
 
module.exports = mongoose.model("umbrella", umbrellaSchema)