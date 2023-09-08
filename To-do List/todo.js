let tasks = []; //array to add tasks
const tasksList = document.getElementById("list"); //main ul tag in which all li are added
const addTaskInput = document.getElementById("add"); //input box to write task name
const tasksCounter = document.getElementById("tasks-counter"); // a counter to count the number of tasks
const complete = document.getElementById("Complete_all"); // a button to complete all tasks
const completed_tasks = document.getElementById("completed"); // variable for all completed tasks
const uncompleted_tasks = document.getElementById("uncompleted"); // variable for all uncompleted tasks
const all = document.getElementById("all"); // variable for all tasks
const add_task_btn = document.getElementById("add_task_btn"); //add task button

// function for add task button
add_task_btn.addEventListener("click", function () {
  const text = addTaskInput.value;
  if (!text) {
    showNotification("Task text can't be empty");
    return;
  }
  const task = {
    text,
    id: Date.now().toString(),
    done: false,
  };
  task.text = text;
  addTaskInput.value = "";
  addTask(task);
});

// function for all button to show all taks on screen
all.addEventListener("click", function () {
  showList();
});

// function for uncompleted button to show all uncompleted taks on screen
uncompleted_tasks.addEventListener("click", function () {
  const not_done = tasks.filter((item) => {
    return item.done != true;
  });
  tasksList.innerHTML = "";
  for (let i = 0; i < not_done.length; i++) {
    addTaskToDOM(not_done[i]);
  }
});

// function for completed button to show all completed taks on screen
completed_tasks.addEventListener("click", function () {
  const done = tasks.filter((item) => {
    return item.done == true;
  });
  tasksList.innerHTML = "";
  for (let i = 0; i < done.length; i++) {
    addTaskToDOM(done[i]);
  }
});

// creating li tag on dom
function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.innerHTML = `
    <input type="checkbox" id="${task.id}" ${
    task.done ? "checked" : ""
  } class="custom-checkbox">
          <label for="${task.id}">${task.text}</label>
          <img src="bin.jfif" class="delete" data-id="${task.id}" />
    `;
  tasksList.append(li);
}

// to show tasks on ui
function showList() {
  tasksList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    addTaskToDOM(tasks[i]);
  }
  tasksCounter.innerHTML = tasks.length;
} //read

// function to a mark task completed or uncompleted
function toggleTask(taskId) {
  const task = tasks.filter(function (task) {
    return task.id === taskId;
  });

  if (task.length > 0) {
    const currentTask = task[0];
    currentTask.done = !currentTask.done;
    showList();
    return;
  }
  showNotification("Not Done");
} //update

// function to delete tasks
function deleteTask(taskId) {
  const newtask = tasks.filter(function (task) {
    return task.id != taskId;
  });

  tasks = newtask;
  showList();
  showNotification("Deleted");
} //delete

// to handle tasks addition
function addTask(task) {
  if (task) {
    tasks.push(task);
    showList();
    return;
  }
  showNotification("Task can't be added");
} //create

// function to show alert
function showNotification(text) {
  alert(text);
}

// on click of enter add tasks
function handleInputKeypress(e) {
  if (e.key === "Enter") {
    const text = e.target.value;
    if (!text) {
      showNotification("Task text can't be empty");
      return;
    }
    const task = {
      text,
      id: Date.now().toString(),
      done: false,
    };
    e.target.value = "";
    addTask(task);
  }
}

// to execute check and delete clicks
function handleClickListener(e) {
  const target = e.target;
  if (target.className == "delete") {
    const taskId = target.dataset.id;
    deleteTask(taskId);
    return;
  } else if (target.className == "custom-checkbox") {
    const taskId = target.id;
    toggleTask(taskId);
    return;
  }
}

// functions initialised in starting of app
function initializeApp() {
  addTaskInput.addEventListener("keyup", handleInputKeypress);
  document.addEventListener("click", handleClickListener);
}
initializeApp();

// function for clearing all tasks
function removeli() {
  tasksList.innerHTML = "";
  tasksCounter.innerHTML = tasks.length;
}

// for clear all tasks
document.getElementById("clear_btn").addEventListener("click", function () {
  tasks.splice(0, tasks.length);
  removeli();
});

let flag = 1;
// complete all tasks & uncomplete all tasks
complete.addEventListener("click", function () {
  switch (flag) {
    case 1: //for completeing all tasks
      console.log("imran");
      if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) {
          const currentTask = tasks[i];
          if (currentTask.done == true) {
            currentTask.done = currentTask.done;
          } else {
            currentTask.done = !currentTask.done;
          }
          showList();
        }
        showNotification("All Done");
        complete.innerHTML = '<i class="fa-solid fa-check-double"></i> Uncomplete All';
      }
      flag = 2;
      console.log(flag);
      break;
    case 2: //for uncompleting all tasks
      console.log(!flag);
      if (tasks.length > 0) {
        for (let i = 0; i < tasks.length; i++) {
          const currentTask = tasks[i];
          if (currentTask.done == true) {
            currentTask.done = !currentTask.done;
          }
          showList();
        }
        complete.innerHTML = '<i class="fa-solid fa-check-double"></i> Complete All';
      }

      flag = 1;
      break;
  }
});
