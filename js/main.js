window.onload = function () {
    document.getElementById("addButton").onclick = addTaskBtn;
};
function addTaskBtn() {
    let addTask = document.getElementById("taskInput").value;
    if (addTask == "") {
        alert("Please enter a task.");
    }
    else {
        let taskDiv = createTaskDiv();
        let doneCheckbox = createInputTasks();
        let taskSpan = createTaskSpan(addTask);
        let deleteBtn = createDeleteButton();
        createCustomDiv(taskDiv, doneCheckbox, taskSpan, deleteBtn);
        taskDivDisplay(taskDiv);
    }
}
function taskDivDisplay(taskDiv) {
    let taskList = document.getElementById("taskList");
    taskList.appendChild(taskDiv);
}
function createCustomDiv(taskDiv, doneCheckbox, taskSpan, deleteBtn) {
    taskDiv.appendChild(doneCheckbox);
    taskDiv.appendChild(taskSpan);
    taskDiv.appendChild(deleteBtn);
}
function createDeleteButton() {
    let deleteBtn = document.createElement("button");
    deleteBtn.onclick = removeTaskBtn;
    deleteBtn.innerText = "X";
    return deleteBtn;
}
function createTaskSpan(addTask) {
    let taskSpan = document.createElement("span");
    taskSpan.classList.add("taskName");
    taskSpan.innerText = addTask;
    return taskSpan;
}
function createInputTasks() {
    let doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.classList.add("done");
    return doneCheckbox;
}
function createTaskDiv() {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("tasks");
    return taskDiv;
}
function removeTaskBtn() {
    let taskDiv = this.parentElement;
    taskDiv.remove();
}
