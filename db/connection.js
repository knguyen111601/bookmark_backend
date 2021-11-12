require("dotenv").config()
const mongoose = require("mongoose")

const {DATABASE_URL} = process.env

// Connect
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

// Messages
mongoose.connection
.on("open", ()=>{console.log("Connected to Mongo")})
.on("close", ()=>{console.log("Disconnected from Mongo")})
.on("error", (error)=>{console.log(error)})

module.exports = mongoose