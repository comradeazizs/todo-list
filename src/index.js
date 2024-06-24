import "./style.css";
import calendarToday from "./icons/calendar-today.svg";
import calendarUpcoming from "./icons/calendar-range.svg";
import { createNavbar, createTopbar, updateProjectsUl, updateTodoProjectsInput } from "./dom-functions";

const app = document.querySelector("#content");

const projects = JSON.parse(localStorage.getItem("projects"));
if (!projects) {
  localStorage.setItem("projects", JSON.stringify([
    {
      title: "Shopping",
      todoList: [{
        title: "Tomatoes",
        description: "buy 0.5 kg of tomatoes",
        dueDate: "2024-02-24T00:00:00.000Z",
        priority: "high",
        completed: false
      }]
    }
  ]));
}



const contentWrapper = document.createElement("div");
contentWrapper.classList.add("contentWrapper");
app.appendChild(createTopbar());
app.appendChild(contentWrapper);
contentWrapper.appendChild(createNavbar());
const mainColumn = document.createElement("div");
mainColumn.id = "main-column";
contentWrapper.appendChild(mainColumn);

updateProjectsUl();
updateTodoProjectsInput();