const mongoose = require("mongoose");


const Schema = mongoose.Schema({
	username:{type:String,unique:true},
	password:String
})

module.exports = mongoose.model("User",Schema);