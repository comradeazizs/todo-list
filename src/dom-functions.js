import checkbox from "./icons/checkbox.png";
import { Project, TodoItem } from './todo';


export class Dialog {
  static create() {
    const dialog = document.createElement("dialog");
    dialog.classList.add("dialog");

    const form = document.createElement("form");
    form.action = "#";
    form.classList.add("form-container");

    let fragment = document.createDocumentFragment();

    let label, div;

    ["title", "description"].forEach((field) => {
      let input = document.createElement("input");
      if (field === "title") { input.setAttribute("required", ""); };
      input.type = "text";
      input.classList.add(`form-${field}`)
      input.name = field;
      input.placeholder = field[0].toUpperCase() + field.slice(1);
      fragment.appendChild(input);
    })

    div = document.createElement("div");
    label = document.createElement("label");
    label.setAttribute("for", "due-date");
    label.innerText = "Due date:";
    const date = document.createElement("input");
    date.type = "date";
    date.id = "due-date";
    date.name = "date";
    div.appendChild(label);
    div.appendChild(date);
    fragment.appendChild(div);

    ["priority", "project"].forEach((field) => {
      div = document.createElement("div");
      label = document.createElement("label");
      label.textContent = `${field}: `;
      label.setAttribute("for", `${field}-select`);
      const select = document.createElement("select");
      select.id = `${field}-select`;
      select.name = field;

      let options = ["low", "medium", "high"];
      if (field === "project") {
        options = Project.list.map(project => project.title);
      };
      options.forEach(optionValue => {
        let option = document.createElement("option");
        option.value = optionValue;
        option.text = optionValue;
        select.appendChild(option);
      });
      div.appendChild(label);
      div.appendChild(select);
      fragment.appendChild(div);
    });

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Add todo";
    submit.classList.add("dialog-submit");
    fragment.appendChild(submit);

    form.appendChild(fragment);
    form.addEventListener("submit", formSubmit);
    dialog.appendChild(form);

    return dialog;
  };

  static close() {
    let dialog = document.querySelector(".dialog")
    dialog.close()
  }
};


function formSubmit(event) {
  event.preventDefault();
  let date = new Date(document.querySelector("#due-date").valueAsNumber);
  let todo = new TodoItem(
    document.querySelector(".form-title").value,
    document.querySelector(".form-description").value,
    (date instanceof Date && !isNaN(date)) ? date : null,
    document.querySelector("#priority-select").value,
  );

  let project = Project.list.find(
    (p) => p.title = document.querySelector("#project-select").value
  )

  try {
    project.addTodo(todo);
    console.log(project);
  } catch (error) { // TODO improve
    alert("A todo with the same title already exists in this project. Please enter a different title.");
    return
  }

  let form = document.querySelector(".form-container");
  form.reset();
  Dialog.close();
};


/**
 * Creates a top bar element for a to-do list.
 * @param {string} checkbox - The URL or path to the checkbox image.
 * @returns {HTMLElement} The top bar element containing an icon and a title.
 */
export function createTopbar() {
  const topbar = document.createElement("div");
  topbar.setAttribute("id", "topbar");

  const icon = new Image();
  icon.src = checkbox;
  topbar.appendChild(icon);

  const h1 = document.createElement("h1");
  h1.appendChild(document.createTextNode("TO DO"));
  topbar.appendChild(h1);

  return topbar;
};

export function createNavbar(dialog) {
  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  const create = document.createElement("button");
  create.textContent = "Create";
  create.classList.add("todo-create");
  create.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  })

  navbar.appendChild(create);

  const primaryUl = document.createElement("ul");
  primaryUl.setAttribute("id", "primary-ul");

  const filters = ["Today", "Upcoming", "Important",];

  filters.forEach((filter) => {
    const li = document.createElement("li");
    li.textContent = filter;
    li.classList.add(filter.toLowerCase());
    primaryUl.appendChild(li);
  });
  navbar.appendChild(primaryUl);

  const projectUl = document.createElement("ul");
  Project.list.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    projectUl.appendChild(li);
  });
  navbar.appendChild(projectUl);

  return navbar;
};