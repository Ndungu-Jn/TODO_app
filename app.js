// what features do I want to impliment
//1. Add todo using the text field
//2. Mark todo as completed
//3. Delete todo
//4.save the to dos to local storage
//5. Load todos from local storage when the page loads

const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");

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
    updateTodoList();
    console.log(allTodos);
    todoInput.value = "";
  }
}
//anytime the value inside the array changes, update the to do list
function updateTodoList() {
  todoListUL.innerHTML = "";
  allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex);
    todoListUL.append(todoItem);
  });
}

function createTodoItem(todo, todoIndex) {
  const todoId = "todo-" + todoIndex;
  const todoLi = document.createElement("li");
  todoLi.className = "todo";
  todoLi.innerHTML = ` <input type="checkbox" id="${todoId}" />
          <label class="custom-checkbox" for="${todoId}">
            <svg
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path
                d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"
              />
            </svg>
          </label>
          <label for="${todoId}" class="todo-text">
            ${todo}
          </label>
          <button class="delete-button">
            <svg
              fill="var(--secondary-color)"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
              />
            </svg>
          </button>`;
  return todoLi;
}
