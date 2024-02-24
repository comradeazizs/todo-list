export class TodoItem {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}

export class Project {
  static list = []

  constructor(title) {
    this.title = title;
    this.todoList = [];
  }

  pushToList() {
    Project.list.push(this)
  }

  addTodo(todoItem) {
    let index = this.todoList.findIndex(item => item.title === todoItem.title);
    if (index === -1) {
      this.todoList.push(todoItem);
    } else {
      throw new Error("Todo with that title already exists in this Project")
    }
  }

  removeTodo(title) {
    let index = this.todoList.findIndex(item => item.title === title);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
}