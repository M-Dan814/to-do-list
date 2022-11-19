import format from "date-fns/format";
import { DOM } from "./DOM";
let projects_list = [];

// Project constructor
const Project = (name, date, description, urgency, todos = []) => {
  return { name, date, description, urgency, todos };
};

// Functionality for Submit button
const Submit = () => {
  const fname = document.querySelector("#fn").value;
  const descript = document.querySelector("#de").value;
  const pri = document.querySelector("#priority").value;
  const date = format(
    new Date(document.querySelector("#date").value),
    "yyyy-MM-dd"
  );
  const body = document.querySelector("#proj-form");
  const form = document.querySelector("form");

  if (fname != "" && date != "") {
    body.removeChild(form);
    projects_list.push(Project(fname, date, descript, pri));
    console.log(projects_list);
  }
  DOM();
};

// Function to export projects list
const projects = () => projects_list;

export { Submit, projects };
