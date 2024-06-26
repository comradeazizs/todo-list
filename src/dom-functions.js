import checkbox from "./icons/checkbox.png";
import xmark from "./icons/xmark-solid.svg";
import pen from "./icons/pen-to-square.svg";

import { Project, TodoItem } from './todo';

import { previousProjectName, previousTodoName, previousTodoProjectName, setPreviousProjectName, setPreviousTodoDetails } from "./dialog";


/**
 * Creates a top bar element for a to-do list.
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

export function createNavbar() {
  const navbar = document.createElement("div");
  navbar.setAttribute("id", "navbar");

  const createTodoBtn = document.createElement("button");
  createTodoBtn.textContent = "Create";
  createTodoBtn.classList.add("todo-create");

  const createTodoDialog = document.getElementById("create-todo-dialog");
  createTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createTodoDialog.showModal();
  });

  navbar.appendChild(createTodoBtn);

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

  const createProjectBtn = document.createElement("button");
  createProjectBtn.classList.add("create-project");
  createProjectBtn.textContent = "New project";

  const createProjectDialog = document.getElementById("create-project-dialog");
  createProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    createProjectDialog.showModal();
  });

  navbar.appendChild(createProjectBtn);

  const projectsUl = document.createElement("ul");
  projectsUl.id = "projects-ul";
  projectsUl.addEventListener("click", e => {
    if (e.target.hasAttribute("data-project-name") && e.target.id !== "active") {
      let previousProject = document.getElementById("active");
      if (previousProject) {
        previousProject.removeAttribute("id");
      }
      e.target.id = "active";

      showActiveProjectTodos();
    }
  });
  navbar.appendChild(projectsUl);


  return navbar;
};

export function showActiveProjectTodos() {
  const mainColumn = document.getElementById("main-column");
  while (mainColumn.firstChild) {
    mainColumn.removeChild(mainColumn.lastChild);
  }

  const activeProjectName = document.getElementById("active").dataset.projectName;

  const projects = JSON.parse(localStorage.getItem("projects"));
  const project = projects.find((p) => p.title === activeProjectName);
  for (let todo of project.todoList) {
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    todoContainer.dataset.todoProjectName = project.title;
    todoContainer.dataset.todoName = todo.title;

    const todoChekbox = document.createElement("input");
    todoChekbox.type = "checkbox";
    todoChekbox.addEventListener("click", (e) => {
      todo.completed = e.target.checked;
      localStorage.setItem("projects", JSON.stringify(projects));
      if (e.target.checked) {
        todoDiv.classList.add("completed");
      } else {
        todoDiv.classList.remove("completed");
      }
    });

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo", `todo-${todo.priority}`);
    if (todo.completed) {
      todoChekbox.checked = true;
      todoDiv.classList.add("completed");
    }

    const title = document.createElement("h3");
    title.textContent = todo.title;
    const desc = document.createElement("p");
    desc.textContent = todo.description;

    const timeText = document.createElement("p");
    if (todo.dueDate) {
      const time = new Date(todo.dueDate).toLocaleDateString("en-GB");
      timeText.textContent = time;
    }

    const icons = document.createElement("div");
    icons.classList.add("icons");

    const penIcon = document.createElement("img");
    penIcon.classList.add("edit-icon");
    penIcon.src = pen;

    const changeTodoDialog = document.getElementById("change-todo-dialog");

    penIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      setPreviousTodoDetails(
        e.target.parentElement.parentElement.dataset.todoName,
        e.target.parentElement.parentElement.dataset.todoProjectName
      );

      const projects = JSON.parse(localStorage.getItem("projects"));

      const project = projects.find((p) => p.title === previousTodoProjectName);
      console.log(project);
      const todo = project.todoList.find((t) => t.title === previousTodoName);

      document.getElementById("change-project-select").value = project.title;
      changeTodoDialog.querySelector(".form-title").value = todo.title;
      changeTodoDialog.querySelector(".form-description").value = todo.description;
      if (todo.dueDate) {
        document.getElementById("change-due-date").value = todo.dueDate.split("T")[0];
      }
      document.getElementById("change-priority-select").value = todo.priority;

      changeTodoDialog.showModal();
    });
    icons.appendChild(penIcon);

    const xIcon = document.createElement("img");
    xIcon.classList.add("delete-icon");
    xIcon.src = xmark;
    xIcon.addEventListener("click", (e) => {
      e.stopPropagation();

      let projectName = e.target.parentElement.parentElement.dataset.todoProjectName;
      let todoName = e.target.parentElement.parentElement.dataset.todoName;

      const projects = JSON.parse(localStorage.getItem("projects"));
      const project = projects.find((p) => p.title === projectName);

      let todoIndex = project.todoList.findIndex(todo => todo.title === todoName);
      if (todoIndex !== -1) {
        project.todoList.splice(todoIndex, 1);
        localStorage.setItem("projects", JSON.stringify(projects));
      }

      if (projectName === activeProjectName) {
        showActiveProjectTodos();
      }
    });
    icons.appendChild(xIcon);

    todoDiv.appendChild(title);
    todoDiv.appendChild(desc);
    todoDiv.appendChild(timeText);
    todoContainer.appendChild(todoChekbox);
    todoContainer.appendChild(todoDiv);
    todoContainer.appendChild(icons);
    mainColumn.appendChild(todoContainer);
  };
};


export function updateProjectsUl() {
  const projectsUl = document.querySelector("#projects-ul");
  while (projectsUl.firstChild) {
    projectsUl.removeChild(projectsUl.lastChild);
  };

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  const changeProjectDialog = document.getElementById("rename-project-dialog");

  for (let project of projects) {
    const li = document.createElement("li");
    const title = document.createElement("p");
    const icons = document.createElement("div");
    icons.classList.add("icons");

    const penIcon = document.createElement("img");
    penIcon.classList.add("edit-icon");
    penIcon.src = pen;
    penIcon.addEventListener("click", (e) => {
      e.stopPropagation();

      // save projectName on memory
      setPreviousProjectName(e.target.parentElement.parentElement.firstChild.textContent);

      // open dialog and set input value
      const input = changeProjectDialog.querySelector(".project-title");
      input.value = previousProjectName;
      changeProjectDialog.showModal();
    });
    icons.appendChild(penIcon);

    const xIcon = document.createElement("img");
    xIcon.classList.add("delete-icon");
    xIcon.src = xmark;
    xIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      Project.removeFromStorage(project.title);
      updateProjectsUl();
      updateTodoProjectsInput();
    });
    icons.appendChild(xIcon);

    li.dataset.projectName = project.title;
    title.textContent = project.title;
    li.appendChild(title);
    li.appendChild(icons);
    projectsUl.appendChild(li);
  };
};

export function updateTodoProjectsInput() {
  const projects = JSON.parse(localStorage.getItem("projects"));
  const projectSelect = ["#change-project-select", "#create-project-select"];

  if (projects.length) {
    for (let selector of projectSelect) {
      const input = document.querySelector(selector);
      while (input.firstChild) {
        input.removeChild(input.lastChild);
      };

      for (let p of projects) {
        const option = document.createElement("option");
        option.textContent = p["title"];
        input.appendChild(option);
      };
    };
  }
};