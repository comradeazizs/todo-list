import { TodoItem, Project } from "./todo";
import {
  updateProjectsUl,
  updateTodoProjectsInput,
  showActiveProjectTodos,
} from "./dom-functions";

// Variable to store the previous name of the project for renaming purposes
export let previousProjectName = null;

// Function to update the previous project name
export function setPreviousProjectName(name) {
  previousProjectName = name;
}

// Variables to store the previous names of a todo and its associated project for renaming purposes
export let previousTodoName = null;
export let previousTodoProjectName = null;

// Function to update the previous todo name and its associated project name
export function setPreviousTodoDetails(todoName, projectName) {
  previousTodoName = todoName;
  previousTodoProjectName = projectName;
}


function validateProjectName(projectName) {

  if (projectName.trim().length < 1) {
    alert("A project must have a non empty name");
    return false;
  }

  const projects = JSON.parse(localStorage.getItem("projects"));
  for (let project of projects) {
    if (project.title === projectName) {
      alert("A project with the same title already exists. Please enter a different title.");
      return false;
    }
  }

  return true;
}



const createProjectDialog = document.getElementById("create-project-dialog");
const createProjectSubmit = createProjectDialog.querySelector(".project-submit");
const createProjectForm = createProjectDialog.querySelector(".form-container");

createProjectSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let projectName = createProjectDialog.querySelector(".project-title").value;

  if (!validateProjectName(projectName)) {
    return;
  }

  new Project(projectName).pushToStorage();

  createProjectDialog.close();
  createProjectForm.reset();
  updateProjectsUl();
  updateTodoProjectsInput();
});


const renameProjectDialog = document.getElementById("rename-project-dialog");
const renameProjectSubmit = renameProjectDialog.querySelector(".project-submit");
const renameProjectForm = renameProjectDialog.querySelector(".form-container");

renameProjectSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let newProjectName = renameProjectDialog.querySelector(".project-title").value;

  if (!validateProjectName(newProjectName)) {
    return;
  }

  // Update project name
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  for (let project of projects) {
    if (project.title === previousProjectName) {
      project.title = newProjectName;
      localStorage.setItem("projects", JSON.stringify(projects));
      updateProjectsUl();
      updateTodoProjectsInput();
      break;
    }
  }

  renameProjectDialog.close();
  renameProjectForm.reset();
  updateProjectsUl();
  updateTodoProjectsInput();
  showActiveProjectTodos();
});



const createTodoDialog = document.getElementById("create-todo-dialog");
const createTodoSubmit = createTodoDialog.querySelector(".todo-submit");
const createTodoForm = createTodoDialog.querySelector(".form-container");

createTodoSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  let date = new Date(
    document.getElementById("create-due-date").valueAsNumber
  );

  let todo = new TodoItem(
    createTodoDialog.querySelector(".form-title").value,
    createTodoDialog.querySelector(".form-description").value,
    date instanceof Date && !isNaN(date) ? date : null,
    document.getElementById("create-priority-select").value
  );

  let projectTitle = document.getElementById("create-project-select").value;

  document
    .getElementById("create-project-select")
    .addEventListener("change", (e) => {
      projectTitle = e.target.value;
    });

  try {
    todo.addTodo(projectTitle);
  } catch (DuplicateTodoTitleError) {
    alert(
      "A todo with the same title already exists in this project. Please enter a different title."
    );
    return;
  }

  let activeProjectName = document.getElementById("active").dataset.projectName;

  if (activeProjectName === projectTitle) {
    showActiveProjectTodos();
  }

  createTodoForm.reset();
  createTodoDialog.close();
});


const changeTodoDialog = document.getElementById("change-todo-dialog");
const changeTodoSubmit = changeTodoDialog.querySelector(".todo-submit");
const changeTodoForm = changeTodoDialog.querySelector(".form-container");

changeTodoSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const projects = JSON.parse(localStorage.getItem("projects"));
  const project = projects.find(
    (project) => project.title === previousTodoProjectName
  );

  const todoIndex = project.todoList.findIndex(
    (todo) => todo.title === previousTodoName
  );

  let date = new Date(
    document.getElementById("change-due-date").valueAsNumber
  );
  let todo = new TodoItem(
    changeTodoDialog.querySelector(".form-title").value,
    changeTodoDialog.querySelector(".form-description").value,
    date instanceof Date && !isNaN(date) ? date : null,
    document.getElementById("change-priority-select").value
  );

  if (project.todoList[todoIndex].completed) {
    todo.completed = true;
  }

  let projectTitle = document.getElementById("change-project-select").value;

  if (projectTitle === previousTodoProjectName) {
    project.todoList.splice(todoIndex, 1, todo);
  } else {
    project.todoList.splice(todoIndex, 1);
    const newProject = projects.find(
      (project) => project.title === projectTitle
    );
    newProject.todoList.push(todo);
  }

  localStorage.setItem("projects", JSON.stringify(projects));

  showActiveProjectTodos();

  changeTodoForm.reset();
  changeTodoDialog.close();

});