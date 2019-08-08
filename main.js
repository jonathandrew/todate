let addButton = document.querySelector(".add-todo");
let addBar = document.querySelector(".todo-input");
let completeButton = document.querySelector(".mark-todo-complete")
function getCurrentDateAndTime() {
  return new Date().toLocaleString();
}


let todos = [
  [
    `Be able to mark todos "done".`,
    false,
    getCurrentDateAndTime(),
  ],
  [
    `Allow user interaction through the DOM`,
    false,
    getCurrentDateAndTime(),
  ],
  [
    `Add dates to todos.`,
    false,
    getCurrentDateAndTime(),
  ],
]
function printList(task /*true*, time*/) {
  let listingTasks = document.querySelector(".todo-list");
  let theTaskList = document.createElement("li");
  theTaskList.innerText = task;
  listingTasks.appendChild(theTaskList);
  let list = document.createElement("p")
  theTaskList.appendChild(list)
  addingtolist()
  console.log(task);
}
printList()


function addingtolist(task /* true, time*/) {
  let i = 0
  while(i > todos.length){
    todos.push(task[i][false][getCurrentDateAndTime])
    i = i + 1
  }
}

function makingTaskhave3items(task /* true, time*/){
  let i = 0 
  while(i >task.length){
    task.push[i][false][getCurrentDateAndTime]
    i = i +1
  }
}
addButton.addEventListener("click", function () {
  printList(addBar.value);
  addBar.value = "";
}
)
