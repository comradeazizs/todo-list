export class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  addTodo(projectTitle) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    let index = projects.findIndex(project => project.title === projectTitle);
    let todoIndex = projects[index].todoList.findIndex(todo => todo.title === this.title);
    if (todoIndex === -1) {
      projects[index].todoList.push(this);
      localStorage.setItem("projects", JSON.stringify(projects));
    } else {
      throw new Error("Todo with that title already exists in this Project");
    }
  }
}

export class Project {
  constructor(title) {
    this.title = title;
    this.todoList = [];
  }

  pushToStorage() {
    const projects = JSON.parse(localStorage.getItem("projects"));
    if (!projects) {
      localStorage.setItem("projects", JSON.stringify([this]));
    } else {
      projects.push(this);
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }

  removeTodo(title) {
    let index = this.todoList.findIndex(item => item.title === title);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
}