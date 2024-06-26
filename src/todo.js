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
    let index = projects.findIndex((project) => project.title === projectTitle);
    let todoIndex = projects[index].todoList.findIndex(
      (todo) => todo.title === this.title
    );
    if (todoIndex === -1) {
      projects[index].todoList.push(this);
      localStorage.setItem("projects", JSON.stringify(projects));
    } else {
      throw new DuplicateTodoTitleError(
        "Todo with that title already exists in this Project"
      );
    }
  }
}

export class Project {
  static removeFromStorage(projectTitle) {
    const projects = JSON.parse(localStorage.getItem("projects"));
    let index = projects.findIndex((project) => project.title === projectTitle);
    if (index !== -1) {
      projects.splice(index, 1);
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }

  constructor(title) {
    this.title = title;
    this.todoList = [];
  }

  pushToStorage() {
    const projects = JSON.parse(localStorage.getItem("projects"));
    if (!projects || !projects.length) {
      localStorage.setItem("projects", JSON.stringify([this]));
    } else {
      if (projects.some((project) => project.title === this.title)) {
        throw new Error("Project title already exists");
      } else if (this.title.trim().length === 0) {
        throw new Error("A project must have a non-empty name");
      } else {
        projects.push(this);
        localStorage.setItem("projects", JSON.stringify(projects));
      }
    }
  }
}
