import { DOM } from "./DOM";

const newToDo = (arr, number) => {
  const cont = document.querySelectorAll(".todos");
  const current = cont[number];

  const form = document.createElement("div");
  const question = document.createElement("span");
  question.textContent = "What would you like to do?";

  const name = document.createElement("input");
  name.required = true;

  const add = document.createElement("button");
  add.textContent = "Add";
  add.classList.add("add");

  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.classList.add("delete");

  form.append(question, name, add, cancel);
  current.append(form);

  add.addEventListener("click", () => {
    if (name.value != "") {
      arr.push(name.value);
      DOM();
    }
  });

  cancel.addEventListener("click", () => {
    DOM();
  });
};

export { newToDo };
