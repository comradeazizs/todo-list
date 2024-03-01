import "./style.css";
import calendarToday from "./icons/calendar-today.svg";
import calendarUpcoming from "./icons/calendar-range.svg";
import { TodoDialog, ProjectDialog, createNavbar, createTopbar } from "./dom-functions"
import { TodoItem, Project } from "./todo"

const app = document.querySelector("#content");

let date = new Date(2024, 2, 19);
const shopping = new Project("Shopping");
shopping.pushToList();
shopping.addTodo(new TodoItem("tomatoes", "buy 0.5 kg of tomatoes", date, "high"));
let todoDial = TodoDialog.create()
let projDial = ProjectDialog.create()

app.appendChild(todoDial)
app.appendChild(projDial)

const contentWrapper = document.createElement("div");
contentWrapper.classList.add("contentWrapper");
app.appendChild(createTopbar())
app.appendChild(contentWrapper);
contentWrapper.appendChild(createNavbar(todoDial,projDial))


