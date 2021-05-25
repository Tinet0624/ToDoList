window.onload = function () {
    document.getElementById("addButton").onclick = addTaskBtn;
};
function addTaskBtn() {
    let addTask = document.getElementById("taskInput").value;
    if (addTask.trim() == "") {
        alert("Please enter a task.");
    }
    else {
        let cardDiv = createCardDiv();
        let groupDiv = groupTaskDiv();
        let doneCheckbox = createInputTasks();
        let taskSpan = createTaskLabel(addTask);
        let deleteBtn = createDeleteButton();
        createCustomDiv(cardDiv, groupDiv, doneCheckbox, taskSpan, deleteBtn);
        taskDivDisplay(cardDiv);
    }
    clearAndFocus();
}
function taskDivDisplay(taskDiv) {
    let taskList = document.getElementById("taskList");
    taskList.appendChild(taskDiv);
}
function createCustomDiv(cardDiv, groupDiv, doneCheckbox, taskLabel, deleteBtn) {
    cardDiv.appendChild(groupDiv);
    groupDiv.appendChild(doneCheckbox);
    groupDiv.appendChild(taskLabel);
    groupDiv.appendChild(deleteBtn);
}
function createCardDiv() {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    return cardDiv;
}
function groupTaskDiv() {
    let groupDiv = document.createElement("div");
    groupDiv.classList.add("input-group");
    return groupDiv;
}
function createInputTasks() {
    let doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.classList.add("form-check-input");
    doneCheckbox.value = "";
    return doneCheckbox;
}
function createTaskLabel(addTask) {
    let taskP = document.createElement("label");
    taskP.classList.add("card-text");
    taskP.classList.add("form-check-label");
    taskP.setAttribute("for", "flexCheckDefault");
    taskP.innerText = addTask;
    return taskP;
}
function createDeleteButton() {
    let deleteBtn = document.createElement("button");
    deleteBtn.onclick = removeTaskBtn;
    deleteBtn.type = "button";
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-primary");
    deleteBtn.innerText = "X";
    return deleteBtn;
}
function removeTaskBtn() {
    let groupDiv = this.parentElement.parentElement;
    groupDiv.remove();
}
function clearAndFocus() {
    document.getElementById("taskInput").focus();
    document.getElementById("taskInput").value = "";
}
