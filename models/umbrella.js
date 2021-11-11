const mongoose = require("mongoose") 
const umbrellaSchema = mongoose.Schema({
    
    brand: {
        type: String,
        minlength: 3
},
    color: {
        type:  String,
        minLength: 3
},
    cost: {
        type: Number,
        minLength: 5
}
}) 
 
module.exports = mongoose.model("umbrella", umbrellaSchema)