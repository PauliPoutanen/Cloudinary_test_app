const mongoose = require("mongoose");

const Schema = mongoose.Schema({
    resource_type:String,
    url:String
})

module.exports = mongoose.model("Image", Schema)