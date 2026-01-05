const inputtext = document.querySelector("#text");
const addBtn = document.querySelector("#add-todo");
const todocontainer = document.querySelector(".todo-list");

addBtn.addEventListener("click", function () {
  //console.dir(inputtext.value);
  const tododiv = document.createElement("div");
  tododiv.className = "todolist-container";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";

  const todosname = document.createElement("h3");
  todosname.id = "todosname";
  todosname.innerText = inputtext.value;

  const deletebtn = document.createElement("button");
  deletebtn.id = "deletetodosname";
  deletebtn.innerText = "Delete";

  deletebtn.addEventListener("click", function () {
    tododiv.remove();
  });

  tododiv.append(checkbox, todosname, deletebtn);
  todocontainer.append(tododiv);

  inputtext.value = "";
});

const completedbtn = document.querySelector(".completedbtn");
completedbtn.addEventListener("click", function () {
  const alltodos = document.querySelectorAll(".todolist-container");
  alltodos.forEach((todo) => {
    const checkbox = todo.querySelector("input[type='checkbox']");
    todo.style.display = checkbox.checked ? "flex" : "none";
  });
});

const yettodo = document.querySelector(".yettodobtn");
yettodo.addEventListener("click", function () {
  const alltodos = document.querySelectorAll(".todolist-container");
  alltodos.forEach((todo) => {
    const checkbox = todo.querySelector("input[type='checkbox']");
    todo.style.display = !checkbox.checked ? "flex" : "none";
  });
});
const alltodosbtn = document.querySelector(".alltodosbtn");
alltodosbtn.addEventListener("click", function () {
  const alltasks = document.querySelectorAll(".todolist-container");
  alltasks.forEach((todo) => {
    todo.style.display = "flex";
  });
});

inputtext.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addBtn.click();
  }
});
