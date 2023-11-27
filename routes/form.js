const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.render("form" ,{user : req.query.name || "user"})
})

router.post("/submit", (req, res) => {
    res.send(req.body.data2);
})

module.exports = router;