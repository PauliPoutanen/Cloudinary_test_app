const express = require("express")
const mongoose =require("mongoose")
const photoRoute = require("./routes/photoroute")


let app = express()
app.use(express.json())

const url = "mongodb+srv://alppilanmies:huutokauppasalasana@cluster0.woiu5mj.mongodb.net/pilvikuvadatabase?retryWrites=true&w=majority"
console.log(url)


let port = process.env.PORT || 3001



mongoose.connect(url)
.then(
  ()=> console.log("Yhteys MongoDB-tietokantaan muodostettu // Connected to Mongo DB"),
  (error) => 
  console.log("Ei yhteyttä MongoDB-tietokantaan // No connection to Mongo DB", error)
)

app.use("/api", photoRoute)
app.listen(port)
console.log("Cloudinary-testi-backline OK portissa: ", port)