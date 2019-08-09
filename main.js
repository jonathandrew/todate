let addButton = document.querySelector(".add-todo");
let addBar = document.querySelector(".todo-input");
let completeButton = document.querySelector(".mark-todo-complete");
function getCurrentDateAndTime() {
  return new Date().toLocaleString();
}
let todos = [
  [`Be able to mark todos "done".`, false, getCurrentDateAndTime()],
  [`Allow user interaction through the DOM`, false, getCurrentDateAndTime()],
  [`Add dates to todos.`, false, getCurrentDateAndTime()]
];

// # Todate

// A todo app challenge.

// ### Setup

// We're going to be adding a third todo property, the date. We're going to need * three * arrays, * or * a third thing in our sub - arrays.Whew!

// We're also going to implement the ability to just directly click on what we want marked complete. Much harder for us, but much *much* better for the user.

// ### Steps

//   * We'll start with our function for printing a todo, which is going to go from one of the easier functions to one of the hardest functions in this app, if not the absolute hardest. You're going to need to grab your`ol` and make your`li`, just like before.But to get the name of the task * and * the date it was added * and * make it all look good, we're going to need to make those two things separate elements that are children of our `li`. Let's do it!

//     * First, our function needs to take in a task name * and * a date, so we'll need two parameters.

//       * After we grab our`ol` and make our`li`, let's create two `p` tags, one for each bit of data we have. Give each of them the relevant data as an `innerText`.

//         * Now we'll have to append both of those elements to our `li`.

//           * Then append that`li` to your ol like always and you're good to go! Our css will take care of the layout, though feel free to tinker with it. Or redo it entirely!

let todoList = document.querySelector(".todo-list");
printList();

function printTodo(taskName, taskDate) {
  let todo = document.createElement("li");

  let p1 = document.createElement("p");
  p1.innerText = taskName;
  let p2 = document.createElement("p");
  p2.innerText = taskDate;

  p1.addEventListener("click", setComplete);
  p2.addEventListener("click", setComplete);
  todo.appendChild(p1);
  todo.appendChild(p2);
  todoList.appendChild(todo);
}
//             * Now let's write a function that prints all our todos out to the dom. Remember to pass in both the name *and* the date. Our single-todo-printing function is expecting them!
function printList() {
  let i = 0;
  while (i < todos.length) {
    let currentTodo = todos[i];
    printTodo(currentTodo[0], currentTodo[2]);
    i++;
  }
  // todos.forEach(function(todo) {
  //   printTodo(todo[0], todo[2]);
  // });
}
//               * Once you have both those functions, call the list - printing one and see if it displays our hard - coded data to the dom.If so, congrats!

//                 * Now write a helper function that will add one todo to our data.It should take in a task name and add it to our todos, along with a`false` value for its completeness(it's not done if it was just added!) and the result of a call to our helper function `getCurrentDateAndTime` for its date.
function addTodoToData(taskName) {
  todos.push([taskName, false, getCurrentDateAndTime()]);
}
//                   * Next is a nice helper function to * remove * a todo from our data, given a specific index.Don't forget to remove it from other arrays if you're storing them that way!
function removeTodo(index) {
  // loop and replace
  // let newTodos = [];
  // let i = 0;
  // while (i < todos.length) {
  //   if (index !== i) {
  //     newTodos.push(todos[i]);
  //   }
  //   i++;
  // }
  // todos = newTodos;

  let newTodos = [];

  function foo(todo, currentIndex) {
    if (currentIndex !== index) {
      newTodos.push(todo);
    }
  }

  todos.forEach(foo);
  todos = newTodos;

  // todos.splice(index, 1);
}
//                   *

// * Now our function for actually taking user input and making a task out of it.It should be pretty easy given our helper functions:

//   * Grab the user's input.

//   * Call your function to add that task to our data.
//   * And call your function to print one task to the dom.
function addTodo() {
  let todoInput = document.querySelector(".todo-input");
  addTodoToData(todoInput.value);
  printTodo(todoInput.value, getCurrentDateAndTime());
}

//   * Add an event listener to run that whole thing when the user presses ADD, and try it out!

addButton.addEventListener("click", addTodo);

//   * Write a helper function to clear the list.Don't just copy-paste from earlier work, though you can refer back to it while typing if you need to.
function clearList() {
  // todoList.innerHTML = "";
  while (todoList.hasChildNodes()) {
    todoList.removeChild(todoList.firstChild);
  }
}

//     * Now we need a helper function to mark a todo in our data complete, given an index.It only needs to handle those booleans!
function markComplete(index) {
  todos[index][1] = true;
}

//       * Now a helper function that changes the style of the dom given an index.You can either adjust for the off - by - one error here or when the function is called, but make sure you do it somewhere!
function completetodo(index) {
  let li = document.querySelector("li:nth-child(" + (index + 1) + ")");
  li.style.textDecoration = "line-through";
}
//         * Okay, we're ready to mark things complete. Set up an event listener to run our function. But that event listener needs to run when _any_ `li` is clicked... Where can we add it? When the todo is added to the dom! Add it to the paragraph tags we made for the todo name and date elements, way back where we were printing a todo on the dom.

//           * Now for the function.How can we tell which li was clicked ? Well, when our browser detects an event and calls the function we told it to call, it actually passes us in a thing called an`event` as a parameter. (You'll see the parameter called `e` in a lot of tutorials, but do you really need to save four letters? Call it whatever you want though, it's * your * parameter!) If we take it in as a parameter and look at`event.target`, we'll get the node element that the event acted upon; in this case, it's the paragraph element that was clicked.To get the li, so we can act upon it, we'll need to dig deeper and use `event.target.parentNode`. Now you've got the correct`li`!

//             * Now we need its index so we can change it on the dom and in our data.One way to do this is to go back up to when we made the`li` and give it an`id`, which we can grab again now(making sure to convert it to a number, because all css values are strings in JavaScript).But if you want a harder challenge, you can grab all the children of our ol with `.childNodes`, convert it to an array with `Array.from`, and use`indexOf` to find the index of our`li` within that array.

// console.log(array)


// completetodo(index)


// * Now that we've got an index, we can call our helper functions to mark it complete in the data and style it on the dom! (Again, make sure you're correcting for any off - by - one errors.Lists on the dom are 1 - based counting!)
function setComplete(event) {
let selectedLi = event.target.parentNode;

  let liList = todoList.childNodes;

  let array = Array.from(liList);

  let index = array.indexOf(selectedLi);

  completetodo(index)
  markComplete(index)
}

// * We'll need a helper function for our deletion: one that deletes everything on the list.

//   * Now for deleting the completed items.Add an event listener for our deletion handling function.Now write a function that builds new data * without * the completed ones, then uses our helper function to clear the list, and our helper function to print the list again based on our data(which will now * not * have completed items in it).

// * And you're done!

// ### Stretch Goals:

// Coming soon!

// function addingtolist(task /* true, time*/) {
//   let i = 0;
//   while (i > todos.length) {
//     todos.push(task[i][false][getCurrentDateAndTime]);
//     i = i + 1;
//   }
// }

// function makingTaskhave3items(task /* true, time*/) {
//   let i = 0;
//   while (i > task.length) {
//     task.push[i][false][getCurrentDateAndTime];
//     i = i + 1;
//   }
// }
