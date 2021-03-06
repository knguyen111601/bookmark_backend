//////////////////////////////////////////////////////////
// Import Dependencies
//////////////////////////////////////////////////////////
require("dotenv").config()
const express = require("express")
const mongoose = require("./db/connection")
const morgan = require("morgan")
const cors = require("cors")
const app = express()
const {PORT = 7777} = process.env

// Import Router
const BookmarkRouter = require("./controllers/bookmark")

//////////////////////////////////////////////////////////
// Middleware
//////////////////////////////////////////////////////////
app.use(cors()) // prevent cors errors, opens up access for frontend
app.use(morgan("dev")) // logging
app.use(express.json()) // parse json bodies

//////////////////////////////////////////////////////////
// Routes
//////////////////////////////////////////////////////////
app.use("/", BookmarkRouter)


//////////////////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////////////////
app.listen(PORT, ()=>{console.log(`Now listening on PORT ${PORT}`)})