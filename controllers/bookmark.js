///////////////////////////////////////////////////////
// Import dependencies 
///////////////////////////////////////////////////////
const express = require("express"); // express for router
const Bookmark = require("../models/bookmark") // bookmark model 

///////////////////////////////////////////////////////
// Create Router
///////////////////////////////////////////////////////
const router = express.Router();

///////////////////////////////////////////////////////
// Routes
///////////////////////////////////////////////////////

// Index route - get request
router.get("/bookmarks", async (req,res)=>{
    try {
        res.json(await Bookmark.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create Route 
router.post("/bookmarks", async (req, res) =>{
    try {
        res.json(await Bookmark.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Update Route - put
router.put("/bookmarks/:id", async (req, res) =>{
    try{
        res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Destroy Route - delete
router.delete("/bookmarks/:id", async (req, res)=>{
    try{
        res.json(await Bookmark.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

///////////////////////////////////////////////////////
// Export Router
///////////////////////////////////////////////////////
module.exports = router