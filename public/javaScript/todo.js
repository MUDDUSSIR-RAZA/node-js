const {deleteTodo} = require("../../controllers/todo")
const deleteButtons = document.querySelectorAll(".delete-button");


deleteButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const todoId = button.getAttribute("data-todo-id");
    alert(todoId);


    fetch(`/delete?index=${todoId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the server response
        // Optionally, update the UI on successful deletion
      })
      .catch((error) => console.error("Error:", error));
   });








   336
});

// document.addEventListener('DOMContentLoaded', function () {

//     deleteButtons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             const todoId = button.getAttribute('data-todo-id');
//             const todoIndex = button.getAttribute('data-todo-index');

//             // Send a request to the server to delete the todo
//             fetch(`/delete?index=${todoIndex}`, {
//                 method: 'GET',
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data); // Log the server response
//                 // Optionally, update the UI on successful deletion
//             })
//             .catch(error => console.error('Error:', error));
//         });
//     });
// });
