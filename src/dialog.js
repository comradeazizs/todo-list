import { TodoItem, Project } from "./todo";
import { updateProjectsUl, updateTodoProjectsInput } from "./dom-functions";


class BaseDialog {
  constructor() {
    this.dialog = document.createElement("dialog");
    this.dialog.classList.add("dialog");

    this.form = document.createElement("form");
    this.form.action = "#";
    this.form.classList.add("form-container");
    this.dialog.appendChild(this.form);

    this.submit = document.createElement("button");
    this.submit.type = "submit";
    this.submit.classList.add("project-submit");

    this.form.appendChild(this.submit);
  }

  create() {
    document.body.appendChild(this.dialog);
  }

  close() {
    this.dialog.close();
  }

  showModal() {
    this.dialog.showModal();
  }
}

class CreateTodoDialog extends BaseDialog {
  constructor(id) {
    super();

    this.id = id;
    this.dialog.id = `${this.id}-todo-dialog`;

    let fragment = document.createDocumentFragment();

    for (let field of ["Title", "Description"]) {
      let input = document.createElement("input");
      if (field === "title") { input.setAttribute("required", ""); }
      input.type = "text";
      input.classList.add(`form-${field.toLowerCase()}`);
      input.name = field;
      input.placeholder = field;
      fragment.appendChild(input);
    }

    let div = document.createElement("div");
    let label = document.createElement("label");
    label.setAttribute("for", `${this.id}-due-date`);
    label.innerText = "Due date:";
    const date = document.createElement("input");
    date.type = "date";
    date.id = `${this.id}-due-date`;
    date.name = "date";
    div.appendChild(label);
    div.appendChild(date);
    fragment.appendChild(div);

    for (let field of ["priority", "project"]) {
      div = document.createElement("div");
      label = document.createElement("label");
      label.textContent = `${field}: `;
      label.setAttribute("for", `${this.id}-${field}-select`);

      const select = document.createElement("select");
      select.id = `${this.id}-${field}-select`;
      select.name = field;

      let options = ["low", "medium", "high"];
      if (field === "project") {
        const projects = JSON.parse(localStorage.getItem("projects"));
        if (projects) {
          options = projects.map(project => project.title);
        } else {
          options = [];
        }
      }

      for (let optionValue of options) {
        let option = document.createElement("option");
        option.value = optionValue;
        option.text = optionValue;
        select.appendChild(option);
      }

      div.appendChild(label);
      div.appendChild(select);
      fragment.appendChild(div);
    }
    this.form.appendChild(fragment);

    this.submit.addEventListener("click", this.formSubmit.bind(this));
    this.submit.textContent = "Add todo";
  }

  formSubmit(e) {
    e.preventDefault();
    let date = new Date(document.getElementById(`${this.id}-due-date`).valueAsNumber);
    let todo = new TodoItem(
      this.dialog.querySelector(".form-title").value,
      this.dialog.querySelector(".form-description").value,
      (date instanceof Date && !isNaN(date)) ? date : null,
      document.getElementById(`${this.id}-priority-select`).value,
    );

    let projectTitle = document.getElementById(`${this.id}-project-select`).value;
    document.getElementById(`${this.id}-project-select`).addEventListener("change", (e) => {
      projectTitle = e.target.value;
    });

    try {
      todo.addTodo(projectTitle);
    } catch (error) { // TODO improve
      alert("A todo with the same title already exists in this project. Please enter a different title.");
      return;
    }

    this.form.reset();
    this.dialog.close();
  }
}

class CreateProjectDialog extends BaseDialog {
  constructor() {
    super();

    this.dialog.id = "project-dialog";
    const input = document.createElement("input");
    input.setAttribute("required", "");
    input.type = "text";
    input.classList.add("project-title");
    input.name = "project-title";
    input.maxLength = 20;
    input.placeholder = "Project title";
    this.form.appendChild(input);

    this.submit.textContent = "Add project";
    this.submit.addEventListener("click", this.createProjectSubmit.bind(this));
  }

  createProjectSubmit(e) {
    e.preventDefault();
    let projectName = this.dialog.querySelector(".project-title").value;

    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    for (let project of projects) {
      if (project.title === projectName) {
        alert("A project with the same title already exists. Please enter a different title.");
        return;
      }
    }
    (new Project(projectName)).pushToStorage();
    this.close();
    this.form.reset();
    updateProjectsUl();
    updateTodoProjectsInput();
  }
}

class ModifyProjectDialog extends BaseDialog {
  constructor() {
    super();

    this.dialog.id = "modify-project-dialog";
    const input = document.createElement("input");
    input.setAttribute("required", "");
    input.type = "text";
    input.classList.add("modified-project-title");
    input.name = "modified-project-title";
    input.maxLength = 20;
    input.placeholder = "New project title";
    this.form.appendChild(input);

    this.submit.textContent = "Rename project";
    this.submit.addEventListener("click", this.ChangeProjectNameSubmit.bind(this));
  }

  ChangeProjectNameSubmit(e) {
    e.preventDefault();
    let modifiedProjectName = this.dialog.querySelector(".modified-project-title").value;
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    for (let project of projects) {
      if (project.title === modifiedProjectName) {
        alert("A project with the same title already exists. Please enter a different title.");
        return;
      }
    }
    // Update project name
    for (let project of projects) {
      if (project.title === this.previousName) {
        project.title = modifiedProjectName;
      }
    }

    localStorage.setItem("projects", JSON.stringify(projects));
    this.close();
    updateProjectsUl();
    updateTodoProjectsInput();
  }
}

export const createProjectDialog = new CreateProjectDialog();
createProjectDialog.create();
export const changeProjectDialog = new ModifyProjectDialog();
changeProjectDialog.create();
export const createTodoDialog = new CreateTodoDialog("create");
createTodoDialog.create();
