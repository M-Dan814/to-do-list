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
    cont1.classList.add("header")
    cont1.textContent = `${project.name}`;

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
    add_todos.classList.add("add")
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

      edit.addEventListener("click", () => {
        todo_cont.append(editToDo(j, project.todos));
      });

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

    const del_project = document.createElement("span");
    del_project.textContent = "Delete Project";
    del_project.setAttribute("num", i);
    del_project.classList.add("delete");
    del_project.addEventListener("click", () => {
      projects().splice(i, 1);
      DOM();
    });
    card.append(cont1, cont2, cont3, todo_cont, del_project);
    div.append(card);
  }
};

export { DOM };
