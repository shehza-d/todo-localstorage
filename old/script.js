let arrayOfTodos = JSON.parse(localStorage.getItem("todoList")) || [];

//date function
(() => {
  document.querySelector("#date").textContent = `${moment().format(
    "D MMM YYYY"
  )}`;
  let time = moment().format("h:mm:s a");
  const timeDiv = document.querySelector("#time");
  timeDiv.textContent = time;
  setInterval(() => {
    time = moment().format("h:mm:s a");
    timeDiv.textContent = time;
  }, 1000);
})();

const addTodo = (event) => {
  event.preventDefault();

  const todo = document.querySelector("#todoItem").value;
  todo.trim();
  if (todo.length > 40) {
    alert("string can't be greater then 40");
    return;
  }
  // if(!todo) console.log(`emty str`)
  if (todo === "") return;
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
  //   event.target.style.color = "red";

  if (event.target.style.textDecoration === "none") {
    event.target.style.textDecoration = "line-through";
  } else {
    event.target.style.textDecoration = "none";
  }
  console.log(event.target.style.textDecoration);
  //   event.target.style.decoration = "line-through";
});

//theme function
const themeChange = () => {
  if (document.body.classList == "lightMode") {
    document.body.classList.add("darkMode");
    document.body.classList.remove("lightMode");
  } else {
    document.body.classList.add("lightMode");
    document.body.classList.remove("darkMode");
  }
};

//new API key 4719f247a38849138501b4bc9b42699e
