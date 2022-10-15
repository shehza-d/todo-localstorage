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


document.querySelector("#todoList").addEventListener('click',(i)=>{
console.log(i)
body.style.color= red;
})

//new API key 4719f247a38849138501b4bc9b42699e
