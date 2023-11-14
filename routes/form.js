const express = require("express");
const router = express.Router();
const path = require("path")

router.get("/", (req, res) => {
    res.send(` 
`)
})

router.post("/submit" , (req, res) => {
    res.sendFile(path.join(process.cwd() , views , form.html));
})

module.exports = router;