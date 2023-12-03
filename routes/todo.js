const express = require("express");
const router = express.Router();
const {deleteTodo , addTodo, getAlltodos} = require("../controllers/todo");

router.get("/" , (req ,res) => {
    res.render("todo" , {todos : getAlltodos()});
})

router.post("/add" , (req ,res) => {
    addTodo(req.body.data);
    res.redirect("/todo");
})

router.get("/delete/:id", (req, res) => {
    const { id } = req.params;
    deleteTodo(id);
    res.redirect("/todo");
});

router.get("/check/:id", (req, res) => {
    const { id } = req.params;
    const check = req.body.data;
    
   console.log("id : " + id + " ischeck : " + check);
});



module.exports = router;