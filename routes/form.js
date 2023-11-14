const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(`  
    <form action="/form/submit" method="POST">
    <input name="data"/>
    <button>Submit</button>
    </form>
`)
})

router.post("/submit" , (req, res) => {
    res.send(req.body);
})

module.exports = router;