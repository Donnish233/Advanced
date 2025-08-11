const taskInput = document.getElementById("task-input");
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const allBtn = document.getElementById("all");
const completedBtn = document.getElementById("completed-btn");
const pendingBtn = document.getElementById("pending-btn");

let tasks = JSON.parse(localStorage.getItem("tasks"));

function tasksOutput(filter) {
  taskList.innerHTML = "";

  const filterList = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  filterList.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="flex bg-gray-400 w-full justify-between p-2 my-2">
        <span class = "${task.completed ? "line-through" : " "}">
        ${task.text}
        </span>
        <span class="flex justify-between gap-4">
        <button onclick ="toggleTask(${task.id})" class ="${
      task.completed ? "text-blue-500" : " text-green-600"
    }">${task.completed ? "Undo" : "Completed"}</button>
        <button onclick = "deleteTask(${
          task.id
        })" class ="text-red-500"> Delete </button>
        </span>
        </div>`;

    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Please enter a task!");
    return;
  } else {
    const task = {
      id: Date.now(),
      text,
      completed: false,
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    if (taskList.classList.contains("comp")) {
      tasksOutput("completed");
    } else if (taskList.classList.contains("pend")) {
      tasksOutput("pending");
    } else {
      tasksOutput("all");
    }
  }
});

function toggleTask(id) {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
  if (taskList.classList.contains("comp")) {
    tasksOutput("completed");
  } else if (taskList.classList.contains("pend")) {
    tasksOutput("pending");
  } else {
    tasksOutput("all");
  }
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  if (taskList.classList.contains("comp")) {
    tasksOutput("completed");
  } else if (taskList.classList.contains("pend")) {
    tasksOutput("pending");
  } else {
    tasksOutput("all");
  }
}
allBtn.addEventListener("click", () => {
  taskList.classList.remove("comp");
  taskList.classList.remove("pend");
  taskList.classList.add("all");
  allBtn.classList.add("border", "border-4", "border-green-500");
  completedBtn.classList.remove("border", "border-4", "border-green-500");
  pendingBtn.classList.remove("border", "border-4", "border-green-500");
  tasksOutput("all");
});
completedBtn.addEventListener("click", () => {
  taskList.classList.remove("all");
  taskList.classList.remove("pend");
  taskList.classList.add("comp");
  completedBtn.classList.add("border", "border-4", "border-green-500");
  allBtn.classList.remove("border", "border-4", "border-green-500");
  pendingBtn.classList.remove("border", "border-4", "border-green-500");
  tasksOutput("completed");
});
pendingBtn.addEventListener("click", () => {
  taskList.classList.remove("all");
  taskList.classList.remove("comp");
  taskList.classList.add("pend");
  pendingBtn.classList.add("border", "border-4", "border-green-500");
  allBtn.classList.remove("border", "border-4", "border-green-500");
  completedBtn.classList.remove("border", "border-4", "border-green-500");
  tasksOutput("pending");
});
