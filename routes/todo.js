const express = require("express");
const router = express.Router();
const { addTodo, getAlltodos} = require("../controllers/todo");

router.get("/" , (req ,res) => {
    res.render("todo" , {todos : getAlltodos()});
})

router.post("/add" , (req ,res) => {
    addTodo(req.body.data);
    res.send("Todo Added");
})


module.exports = router;