const express = require("express")
const photoModel = require("../models/photomodel")
const photo = require("../models/photomodel")


let router = express.Router()

router.get("/photos", function(req,res){


    photoModel.find()
    .then(function(photo){
        return res.status(200).json(photo)
    })
    .catch(function(err){
        console.log(err)
        return res.status(500).json({"Message":"Internal server error"})
        })
    })  

router.post("/photos", function(req, res){
    if(!req.body){
        return res.status(400).json({"Message":"Bad request - check request TYPE "})
    }
   



    let photo = new photoModel({
        "url" : req.body.url,
        "resource_type": req.body.resource_type
    })
    photo.save()
    .then(function(photo){
        return res.status(201).json(photo)
    })
    .catch(function(err){
        console.log(err)
        return res.status(500).json({"Message":"Internal server error fron save auction"})
    })

})





module.exports = router