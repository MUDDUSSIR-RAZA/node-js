const checkboxes = document.querySelectorAll(".other");


checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function () {
    var todoId = checkbox.getAttribute("data-id");
    var isChecked = checkbox.checked;
   // console.log("id : " + todoId + " ischeck : " + isChecked);

   requestUpdate(todoId , isChecked)
  });
});

const requestUpdate = async (todoId , isChecked) => {
  try {
    const response = await fetch("/todo/check/" +todoId , {
      method: "POST",
      body: JSON.stringify({
        done :isChecked 
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw("Error deleting Blog: " + error.message);
  }
};