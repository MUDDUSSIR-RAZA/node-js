const { v4: uuidv4 } = require("uuid");

const todos = [];

const addTodo = (name) => {
  todos.push({ name, done: false, id: uuidv4() });
};

const deleteTodo = (id) => {
  let idIndex = findById(id);
  todos.splice(idIndex,1);
  return true;
};

const markAsDone = (index) => {
  todos[index].done = true;
  return true;
};

const getAlltodos = () => {
  return todos;
};

const findById = (id) => {
  let idIndex = todos.findIndex((t) => t.id == id);
  return idIndex;
};

module.exports = {
  getAlltodos,
  addTodo,
  deleteTodo,
  markAsDone,
};
