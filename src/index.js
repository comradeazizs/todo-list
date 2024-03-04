import "./style.css";
import calendarToday from "./icons/calendar-today.svg";
import calendarUpcoming from "./icons/calendar-range.svg";
import { TodoDialog, createNavbar, createTopbar, updateProjectsUl } from "./dom-functions";
import { TodoItem, Project } from "./todo";

const app = document.querySelector("#content");

const projects = JSON.parse(localStorage.getItem("projects"));
if (!projects) {
  const shopping = new Project("Shopping");
  shopping.pushToStorage();
  (new TodoItem("tomatoes", "buy 0.5 kg of tomatoes", new Date(2024, 2, 19), "high").addTodo(shopping.title));
}

let todoDial = TodoDialog.create();

app.appendChild(todoDial);

const contentWrapper = document.createElement("div");
contentWrapper.classList.add("contentWrapper");
app.appendChild(createTopbar());
app.appendChild(contentWrapper);
contentWrapper.appendChild(createNavbar(todoDial));
const mainColumn = document.createElement("div");
mainColumn.id = "main-column";
contentWrapper.appendChild(mainColumn);

updateProjectsUl();
