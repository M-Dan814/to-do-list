import { DOM } from "./DOM";

const editToDo = (num, arr) => {
  const form = document.createElement("div");
  const name = document.createElement("input");
  const confirm = document.createElement("button");
  confirm.textContent = "Confirm";
  const cancel = document.createElement("button");
  cancel.textContent = "Cancel";
  cancel.classList.add("cancel");
  form.append(name, confirm, cancel);
  confirm.addEventListener("click", () => {
    arr.splice(num, 1, name.value);
    DOM();
  });

  cancel.addEventListener("click", () => {
    DOM();
  });
  return form;
};

export { editToDo };
