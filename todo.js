function newElement() {
  let myInput = document.getElementById("myInput");
  let lists = document.getElementById("lists");

  if (myInput.value !== "") {
    let newTask = document.createElement("ul");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      newTask.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });
    let taskLabel = document.createElement("label");
    taskLabel.textContent = myInput.value;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function () {
      lists.removeChild(newTask);
    });
    newTask.appendChild(checkbox);
    newTask.appendChild(taskLabel);
    newTask.appendChild(deleteButton);

    lists.appendChild(newTask);
    myInput.value = "";
  }
}
