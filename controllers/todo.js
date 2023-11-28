const { v4: uuidv4 } = require('uuid');

const todos = [];

const addTodo = (name) => {
  todos.push({ name, done: false , id:todos.length });
};

const deleteTodo = (index) => {
  console.log("deleted");
  todos.splice(index,1);
  return true;
};

const markAsDone = (index) => {
  todos[index].done = true;
  return true;
};


const getAlltodos = () => {
    return todos;
}

module.exports = {
    getAlltodos,
    addTodo,
    deleteTodo,
    markAsDone,
}