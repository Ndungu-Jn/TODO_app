// what features do I want to impliment
//1. Add todo using the text field
//2. Mark todo as completed
//3. Delete todo
//4.save the to dos to local storage
//5. Load todos from local storage when the page loads

const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let allTodos = [];
// Load todos from local storage when the page loads

todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  addTodo();
});

//The function ensures pushing of input text and also ensuring the field has something.
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    allTodos.push(todoText);
    console.log(allTodos);
    todoInput.value = "";
  }
}
