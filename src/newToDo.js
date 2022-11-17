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
  form.append(question, name, add);
  current.append(form);
  add.addEventListener("click", () => {
    arr.push(name.value);
    DOM();
  });
};

export { newToDo };
