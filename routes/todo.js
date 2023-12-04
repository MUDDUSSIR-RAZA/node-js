const express = require("express");
const router = express.Router();
const {
  deleteTodo,
  addTodo,
  getAlltodos,
  checkUpdate,
  todoUpdate,
} = require("../controllers/todo");

router.get("/", (req, res) => {
  res.render("todo", { todos: getAlltodos() });
});

router.get("/todoUpdate/:id", (req, res) => {
  const id = req.params.id;
  res.render("todoUpdate", { id });
});

router.post("/add", (req, res) => {
  addTodo(req.body.data);
  res.redirect("/todo");
});

router.post("/update/:id", (req, res) => {
  const id = req.params.id;
  const todo = req.body.data;
  todoUpdate(id , todo);
  res.redirect("/todo")
});

router.get("/delete/:id", (req, res) => {
  const { id } = req.params;
  deleteTodo(id);
  res.redirect("/todo");
});

router.post("/check/:id", (req, res) => {
  const { id } = req.params;
  const check = req.body.done;
  checkUpdate(id, check);
});

module.exports = router;
