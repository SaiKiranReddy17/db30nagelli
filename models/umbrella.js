const mongoose = require("mongoose")
const umbrellaSchema = mongoose.Schema({
    brand:{
        type: String,
        minLength: 3,
        maxLength: 50
    },
    
    color: String,
    
     cost: {
        type:Number,
        min:1,
        max:50
    }
    })
module.exports = mongoose.model("umbrella",
    umbrellaSchema)