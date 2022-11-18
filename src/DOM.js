import { projects } from "./submit";
import { newToDo } from "./newToDo";
import { editToDo } from "./editToDo";

const DOM = () => {
  const div = document.querySelector("#content");
  div.innerHTML = "";
  for (let i = 0; i < projects().length; i++) {
    const project = projects()[i];
    const card = document.createElement("div");
    card.classList.add("card");
    if (project.urgency == "High") {
      card.classList.add("urgent");
    } else if (project.urgency == "Med") {
      card.classList.add("med");
    } else {
      card.classList.add("low");
    }

    const cont1 = document.createElement("div");
    const name = document.createElement("h1");
    name.textContent = `${project.name}`;
    cont1.append(name);

    const cont2 = document.createElement("div");
    const des = document.createElement("span");
    des.classList.add("description");
    des.textContent = `${project.description}`;
    cont2.append(des);

    const cont3 = document.createElement("div");
    const date = document.createElement("span");
    date.classList.add("date");
    date.textContent = `${project.date}`;
    cont3.append(date);

    const todo_cont = document.createElement("div");
    todo_cont.classList.add("todos");
    const add_todos = document.createElement("button");
    add_todos.textContent = "Add Todo";
    add_todos.setAttribute("count", i);
    add_todos.addEventListener("click", () => newToDo(project.todos, i));
    todo_cont.appendChild(add_todos);
    if (project.todos.length == 0) {
      todo_cont.textContent = "No todos lined up for this project...";
      todo_cont.appendChild(add_todos);
    }
    for (let j = 0; j < project.todos.length; j++) {
      const todo = document.createElement("div");
      todo.classList.add("todo");
      todo.textContent = `${project.todos[j]}`;

      const edit = document.createElement("button");
      edit.textContent = "Edit";
      edit.classList.add("edit");
      edit.setAttribute("number", j);

      const del = document.createElement("button");
      del.textContent = "Delete";
      del.classList.add("delete");
      del.setAttribute("num", j);

      del.addEventListener("click", () => {
        project.todos.splice(del.getAttribute("num"), 1);
        DOM();
      });

      todo.append(edit, del);
      todo_cont.appendChild(todo);
    }
    card.append(cont1, cont2, cont3, todo_cont);
    div.append(card);
  }
};

export { DOM };
