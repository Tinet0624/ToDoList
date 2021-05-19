window.onload = function () {
    document.getElementById("addButton").onclick = addTaskBtn;
};
function addTaskBtn() {
    let addTask = document.getElementById("taskInput").value;
    if (addTask == "") {
        alert("Please enter a task.");
    }
    else {
        let cardDiv = createCardDiv();
        let taskDiv = createTaskDiv();
        let doneCheckbox = createInputTasks();
        let taskSpan = createTaskP(addTask);
        let deleteBtn = createDeleteButton();
        createCustomDiv(cardDiv, taskDiv, doneCheckbox, taskSpan, deleteBtn);
        taskDivDisplay(cardDiv);
    }
    clearAndFocus();
}
function taskDivDisplay(taskDiv) {
    let taskList = document.getElementById("taskList");
    taskList.appendChild(taskDiv);
}
function createCustomDiv(cardDiv, taskDiv, doneCheckbox, taskSpan, deleteBtn) {
    cardDiv.appendChild(taskDiv);
    cardDiv.appendChild(doneCheckbox);
    cardDiv.appendChild(taskSpan);
    cardDiv.appendChild(deleteBtn);
}
function createCardDiv() {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    return cardDiv;
}
function createInputTasks() {
    let doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.classList.add("done");
    return doneCheckbox;
}
function createTaskDiv() {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("card-body");
    return taskDiv;
}
function createTaskP(addTask) {
    let taskP = document.createElement("p");
    taskP.classList.add("card-text");
    taskP.innerText = addTask;
    return taskP;
}
function createDeleteButton() {
    let deleteBtn = document.createElement("button");
    deleteBtn.onclick = removeTaskBtn;
    deleteBtn.innerText = "Delete";
    return deleteBtn;
}
function removeTaskBtn() {
    let taskDiv = this.parentElement;
    taskDiv.remove();
}
function clearAndFocus() {
    document.getElementById("taskInput").focus();
    document.getElementById("taskInput").value = "";
}
