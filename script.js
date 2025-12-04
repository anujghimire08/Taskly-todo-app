let taskList = [];
addList();

let addtaskEL = document.getElementById("add-task");
let tasksdivEL = document.querySelector(".tasks-div");

addtaskEL.addEventListener("click", () => {
    tasksdivEL.classList.toggle("active");
    document.querySelector(".input-div").classList.toggle("active");
  },
  { once: true }
);

function addList() {
  let tasklyTask = "";
  for (let i = 0; i < taskList.length; i++) {
    const { task, date } = taskList[i];
    const html = `
      <div class="task">
        <b id="task-name">${task}</b>
        <b class="date-input">${date}</b>
        <div class="btns">
          <button class="dlt-btn">
            <i class="ri-delete-bin-fill" onclick="taskList.splice(${i},1); addList();"></i>
          </button>
        </div>
      </div>
    `;
    tasklyTask += html;
  }
  document.querySelector(".tasks-div").innerHTML = tasklyTask;
}

function todo() {
  const addinputEL = document.getElementById("add-input");
  let tasktimeEL = document.getElementById("task-time");
  let date = tasktimeEL.value;
  let task = addinputEL.value;
  taskList.push({ task, date });
  addinputEL.value = "";
  tasktimeEL.value = "";
  addList();
}
