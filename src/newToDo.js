import { DOM } from "./DOM";

const newToDo = (arr, number) => {
  const cont = document.querySelectorAll(".todos");
  const current = cont[number];
  const form = document.createElement("div");
  const question = document.createElement("span");
  question.textContent = "What would you like to do?";
  const name = document.createElement("input");
  const add = document.createElement("button");
  add.textContent = "Add";
  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.classList.add("cancel");
  form.append(question, name, add, cancel);
  current.append(form);
  add.addEventListener("click", () => {
    arr.push(name.value);
    DOM();
  });

  cancel.addEventListener("click", () => {
    DOM();  
  });
};

export { newToDo };
