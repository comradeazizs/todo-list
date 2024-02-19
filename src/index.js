const app = document.querySelector("#content");

class TodoItem {
  constructor(title, description, dueDate, priority, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }
}

class Project {
  constructor(title) {
    this.title = title;
    this.todoList = [];
  }

  addTodo(todoItem) {
    let index = this.todoList.findIndex(item => item.title === todoItem.title);
    if (index === -1) {
      this.todoList.push(todoItem);
    } else {
      console.log("Todo with that title already exists in this Project");
    }
  }

  removeTodo(title) {
    let index = this.todoList.findIndex(item => item.title === title);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
}

let date = new Date(2024, 2, 19);
const myProject = new Project("My Project");
myProject.addTodo(new TodoItem("mytodo", "lets to do", date, "high", false));
myProject.addTodo(new TodoItem("mytodo", "lets to do", date, "high", false));
// myProject.removeTodo();
console.log(myProject);
