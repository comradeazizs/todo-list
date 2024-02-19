/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jbGFzcyBUb2RvSXRlbSB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudG9kb0xpc3QgPSBbXTtcbiAgfVxuXG4gIGFkZFRvZG8odG9kb0l0ZW0pIHtcbiAgICBsZXQgaW5kZXggPSB0aGlzLnRvZG9MaXN0LmZpbmRJbmRleChpdGVtID0+IGl0ZW0udGl0bGUgPT09IHRvZG9JdGVtLnRpdGxlKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kb0l0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlRvZG8gd2l0aCB0aGF0IHRpdGxlIGFscmVhZHkgZXhpc3RzIGluIHRoaXMgUHJvamVjdFwiKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVUb2RvKHRpdGxlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy50b2RvTGlzdC5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnRpdGxlID09PSB0aXRsZSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy50b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbiAgfVxufVxuXG5sZXQgZGF0ZSA9IG5ldyBEYXRlKDIwMjQsIDIsIDE5KTtcbmNvbnN0IG15UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiTXkgUHJvamVjdFwiKTtcbm15UHJvamVjdC5hZGRUb2RvKG5ldyBUb2RvSXRlbShcIm15dG9kb1wiLCBcImxldHMgdG8gZG9cIiwgZGF0ZSwgXCJoaWdoXCIsIGZhbHNlKSk7XG5teVByb2plY3QuYWRkVG9kbyhuZXcgVG9kb0l0ZW0oXCJteXRvZG9cIiwgXCJsZXRzIHRvIGRvXCIsIGRhdGUsIFwiaGlnaFwiLCBmYWxzZSkpO1xuLy8gbXlQcm9qZWN0LnJlbW92ZVRvZG8oKTtcbmNvbnNvbGUubG9nKG15UHJvamVjdCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=