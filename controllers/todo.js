const { v4: uuidv4 } = require("uuid");

const todos = [];

const addTodo = (name) => {
  todos.push({ name, done: false, id: uuidv4() });
};

const deleteTodo = (id) => {
  let idIndex = findById(id);
  todos.splice(idIndex, 1);
  return true;
};

const markAsDone = (index) => {
  todos[index].done = true;
  return true;
};

const checkUpdate = (id, isCheck) => {
  const idIndex = findById(id);
  todos[idIndex].done = isCheck;
};

const todoUpdate = (id , todo) => {
  const idIndex = findById(id);
  todos[idIndex].name = todo;
}

const findById = (id) => {
  let idIndex = todos.findIndex((t) => t.id == id);
  return idIndex;
};

const getAlltodos = () => {
  return todos;
};


module.exports = {
  getAlltodos,
  addTodo,
  deleteTodo,
  markAsDone,
  checkUpdate,
  todoUpdate,
};
