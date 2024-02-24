import "./style.css";
import calendarToday from "./icons/calendar-today.svg";
import calendarUpcoming from "./icons/calendar-range.svg";
import { Dialog, createNavbar, createTopbar } from "./dom-functions"
import { TodoItem, Project } from "./todo"

const app = document.querySelector("#content");

let date = new Date(2024, 2, 19);
const shopping = new Project("Shopping");
shopping.pushToList();
shopping.addTodo(new TodoItem("tomatoes", "buy 0.5 kg of tomatoes", date, "high"));
console.log(Project);
let d = Dialog.create()
app.appendChild(d)

const contentWrapper = document.createElement("div");
contentWrapper.classList.add("contentWrapper");
app.appendChild(createTopbar())
app.appendChild(contentWrapper);
contentWrapper.appendChild(createNavbar(d))


