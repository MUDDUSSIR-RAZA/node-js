const todos = [];

const addTodo = (name) => {
  todos.push({ name, done: false });
};

const deleteTodo = (index) => {
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