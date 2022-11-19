import { Submit } from "./submit";
import { DOM } from "./DOM";
import { ca } from "date-fns/locale";

const NewProj = () => {
  var element = document.querySelector(".form");
  if (typeof element != "undefined" && element == null) {
    const br = document.createElement("br");
    var form = document.createElement("form");
    form.classList.add("form");

    // Project Name
    const FN_label = document.createElement("label");
    FN_label.setAttribute("for", "fn");
    FN_label.textContent = "Project Name";

    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.id = "fn";
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Project Name");
    FN.required = true;

    // Description
    const DE_label = document.createElement("label");
    DE_label.setAttribute("for", "de");
    DE_label.textContent = "Project Description";

    var DE = document.createElement("input");
    DE.setAttribute("type", "textarea");
    DE.setAttribute("name", "Description");
    DE.id = "de";
    DE.setAttribute("placeholder", "Description (optional)");
    DE.setAttribute("rows", "5");
    DE.setAttribute("cols", "40");

    // Date added
    const date_label = document.createElement("label");
    date_label.textContent = "Date";
    date_label.setAttribute("for", "date");

    var date = document.createElement("input");
    date.setAttribute("type", "date");
    date.id = "date";
    date.required = true;

    // Priority
    const Prio_label = document.createElement("label");
    Prio_label.setAttribute("for", "priority");
    Prio_label.textContent = "Priority";

    var Prio = document.createElement("select");
    Prio.id = "priority";
    Prio.required = true;

    const Option1 = document.createElement("option");
    const optionText1 = document.createTextNode("Low");

    Option1.appendChild(optionText1);
    Option1.setAttribute("value", "Low");

    const Option2 = document.createElement("option");
    const optionText2 = document.createTextNode("Normal");

    Option2.appendChild(optionText2);
    Option2.setAttribute("value", "Med");

    const Option3 = document.createElement("option");
    const optionText3 = document.createTextNode("Urgent");

    Option3.appendChild(optionText3);
    Option3.setAttribute("value", "High");

    Prio.appendChild(Option1);
    Prio.appendChild(Option2);
    Prio.appendChild(Option3);

    // create a submit button
    var s = document.createElement("button");
    s.textContent = "Create";
    s.addEventListener("click", Submit);
    s.classList.add("submit");

    const cancel = document.createElement("button");
    cancel.classList.add("delete");
    cancel.textContent = "Cancel";
    cancel.addEventListener("click", () => {
      document.querySelector("#proj-form").removeChild(form);
    });

    const buttons = document.createElement("div");
    buttons.classList.add("buttons")
    buttons.append(s, cancel);

    form.appendChild(FN_label);
    form.appendChild(FN);
    form.appendChild(br.cloneNode());
    form.appendChild(DE_label);
    form.appendChild(DE);
    form.appendChild(br.cloneNode());
    form.appendChild(date_label);
    form.appendChild(date);
    form.appendChild(br.cloneNode());
    form.appendChild(Prio_label);
    form.appendChild(Prio);
    form.appendChild(br.cloneNode());
    form.appendChild(buttons);

    document.querySelector("#proj-form").appendChild(form);
  }
};

export { NewProj };
