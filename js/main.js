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
        let doneCheckbox = createInputTasks();
        let taskSpan = createTaskLabel(addTask);
        let deleteBtn = createDeleteButton();
        createCustomDiv(cardDiv, doneCheckbox, taskSpan, deleteBtn);
        taskDivDisplay(cardDiv);
    }
    clearAndFocus();
}
function taskDivDisplay(taskDiv) {
    let taskList = document.getElementById("taskList");
    taskList.appendChild(taskDiv);
}
function createCustomDiv(cardDiv, doneCheckbox, taskSpan, deleteBtn) {
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
    let taskDiv = this.parentElement;
    taskDiv.remove();
}
function clearAndFocus() {
    document.getElementById("taskInput").focus();
    document.getElementById("taskInput").value = "";
}
