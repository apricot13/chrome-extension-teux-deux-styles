const todoList = document.querySelectorAll(".todo__list-item");
const sectionTest = new RegExp("^---.*---$");
[...todoList].map((todoListItem, i) => {
  const todoListItemTitle = todoListItem.querySelector(".todo-content__text");
  if (
    todoListItemTitle &&
    todoListItemTitle.textContent &&
    sectionTest.test(todoListItemTitle.textContent)
  ) {
    todoListItem.classList.add("todo__list-item--section");
    // todoListItem.style.backgroundColor = "var(--custom-color-light)";
    // todoListItem.style.color = "var(--custom-color-light-text)";
    // todoListItem.style.textAlign = "center";
  }
});
