let taskId = 0;

function addTask(columnId) {
  const input = document.getElementById(columnId + "-input");
  const text = input.value.trim();

  if (text === "") return;

  const task = document.createElement("div");
  task.className = "task";
  task.id = "task-" + taskId++;
  task.draggable = true;
  task.ondragstart = drag;

  task.innerText = text;

  document.querySelector("#" + columnId + " .task-list").appendChild(task);

  input.value = "";
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  const taskId = event.dataTransfer.getData("text");
  const task = document.getElementById(taskId);

  if (event.target.classList.contains("task-list")) {
    event.target.appendChild(task);
  }
}
