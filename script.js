let arrayOfTodos = JSON.parse(localStorage.getItem("todoList")) || [];

const addTodo = (event) => {
  event.preventDefault();

  const todo = document.querySelector("#todoItem").value;
  arrayOfTodos.push(todo);
  localStorage.setItem("todoList", JSON.stringify(arrayOfTodos));

  document.querySelector("#todoList").innerHTML = ``;
  document.querySelector("#todoItem").value = ``;
  refresh();
};

const refresh = () => {
  arrayOfTodos.map((item, index) => {
    document.querySelector("#todoList").innerHTML += `<li>${item}</li>`;
  });
};
refresh();

const deleteTodo = () => {
  localStorage.clear();
  arrayOfTodos = [];
  document.querySelector("#todoList").innerHTML = ``;
};

document.querySelector("#todoList").addEventListener("click", (event) => {
  event.target.style.color = "red";

  if (event.target.style.textDecoration === "none") {
    event.target.style.textDecoration = "line-through";
  } else {
    event.target.style.textDecoration = "none";
  }
  console.log(event.target.style.textDecoration);
  //   event.target.style.decoration = "line-through";
});

//new API key 4719f247a38849138501b4bc9b42699e
