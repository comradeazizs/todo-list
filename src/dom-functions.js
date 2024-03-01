import checkbox from "./icons/checkbox.png";
import { Project, TodoItem } from './todo';


export class TodoDialog {
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

export class ProjectDialog {
  static create() {
    const dialog = document.createElement("dialog");
    dialog.classList.add("project-dialog");
    const form = document.createElement("form");
    form.action = "#";
    form.classList.add("form-container");
    const input = document.createElement("input");
    input.setAttribute("required", "");
    input.type = "text";
    input.classList.add("project-title");
    input.name = "project-title";
    input.placeholder = "Project title";;
    form.appendChild(input);

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Add project";
    submit.classList.add("project-submit");
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      let projectName = document.querySelector(".project-title").value;
      for (let i in Project.list) {
        if (Project.list[i].title === projectName) {
          alert("A project with the same title already exists. Please enter a different title.");
          return
        }
      }
      Project.list.push(new Project(projectName));
      console.log(Project.list);
      form.reset();
      dialog.close();
      updateProjectsUl();
      updateTodoProjectsInput();
    });
    form.appendChild(submit);

    dialog.appendChild(form);
    return dialog;
  }

  static close() {
    let dialog = document.querySelector(".project-dialog")
    dialog.close()
  }
}

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

export function createNavbar(todoDialog, projectDialog) {
  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  const create = document.createElement("button");
  create.textContent = "Create";
  create.classList.add("todo-create");
  create.addEventListener("click", (e) => {
    e.preventDefault();
    todoDialog.showModal();
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

  const projectHeader = document.createElement("h2");
  projectHeader.classList.add("project-header");
  projectHeader.textContent = "Projects: ";
  navbar.appendChild(projectHeader);


  const projectsUl = document.createElement("ul");
  projectsUl.id = "projects-ul";
  navbar.appendChild(projectsUl);

  Project.list.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    projectsUl.appendChild(li);
  });

  const createProject = document.createElement("div");
  createProject.classList.add("create-project");
  createProject.textContent = "Create new project";
  createProject.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialog.showModal();
  });

  navbar.appendChild(createProject);

  return navbar;
};

function updateProjectsUl() {
  const projectsUl = document.querySelector("#projects-ul");
  while (projectsUl.firstChild) {
    projectsUl.removeChild(projectsUl.lastChild);
  }
  Project.list.forEach((project) => {
    const li = document.createElement("li");
    li.textContent = project.title;
    projectsUl.appendChild(li);
  });
};

function updateTodoProjectsInput(){
  const projectSelect = document.querySelector("#project-select");
  while (projectSelect.firstChild) {
    projectSelect.removeChild(projectSelect.lastChild);
  }
  Project.list.forEach((project) => {
    const option = document.createElement("option");
    option.textContent = project.title;
    projectSelect.appendChild(option);
  });
}