// Declaring variables
let tasks = [];

// Function that validates the completion of the field if it's empty
function valField() {
    return document.getElementById("task").value === "";
}

// Function that adds a task
function addTask() {
    // Creating a variable that will receive the tasks
    let lines = document.getElementById("task");

    if (valField()) {
        alert("Enter a task within the field");
    } else {
        // Adding the tasks
        tasks.push(lines.value);
        // Clearing the input field
        lines.value = "";
        // Calling the function that will show all of the tasks
        listTasks();
    }
    // Returning focus to the input field for the task
    document.getElementById("task").focus();
}

// Function to display tasks
function listTasks() {
    let value = "";
    for (let i = 0; i < tasks.length; i++) {
        value += tasks[i] + "<br>";
    }
    document.getElementById("taskList").innerHTML = value;
}
