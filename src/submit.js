// Project constructor
const Project = (name, date = "", description, urgency, list = []) => {
  return { name, date, description, urgency, list };
};

const Submit = () => {
  const fname = document.querySelector("#fn").value;
  const descript = document.querySelector("#de").value;
  const pri = document.querySelector("#priority").value;
  const date = document.querySelector("#date").value;
  const body = document.querySelector("body");
  const form = document.querySelector("form");

  console.log("Clicked!");
  body.removeChild(form);
  console.log(Project(fname, date, descript, pri));
};

export { Submit };
