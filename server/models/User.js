const { Schema, model} = require("mongoose")

const User = new Schema({
    login:{type: String, required:true, unique: true},
    password:{type: String, required:true},
    secretWorld:{type: String},
    answer:{type: String},

})

module.exports = model('User', User)