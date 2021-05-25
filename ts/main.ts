window.onload = function(){
    (<HTMLButtonElement>document.getElementById("addButton")).onclick = addTaskBtn;
}

function addTaskBtn(){

    let addTask = (<HTMLInputElement>document.getElementById("taskInput")).value;

    if(addTask.trim() == ""){
        alert("Please enter a task.");
    }
    else{
        //create elements for tasks
        let cardDiv = createCardDiv();
        let headerDiv = createHeader();
        let groupDiv = groupTaskDiv();
        let doneCheckbox = createInputTasks();
        let taskSpan = createTaskLabel(addTask);
        let deleteBtn = createDeleteButton();

        // assemble and display tasks on webpage
        createCustomDiv(cardDiv, headerDiv, groupDiv, doneCheckbox, taskSpan, deleteBtn);
        taskDivDisplay(cardDiv);
    }
    clearAndFocus();
}

function taskDivDisplay(taskDiv: HTMLDivElement) {
    let taskList = document.getElementById("taskList");
    taskList.appendChild(taskDiv);
}

function createCustomDiv(cardDiv: HTMLDivElement, headerDiv: HTMLDivElement, groupDiv: HTMLDivElement, doneCheckbox: HTMLInputElement, 
                        taskLabel: HTMLSpanElement, deleteBtn: HTMLButtonElement) {

    cardDiv.appendChild(headerDiv);
    cardDiv.appendChild(groupDiv);
    groupDiv.appendChild(doneCheckbox);
    groupDiv.appendChild(taskLabel);
    groupDiv.appendChild(deleteBtn);
}

function createCardDiv() {
    let cardDiv = (<HTMLDivElement>document.createElement("div"));
    cardDiv.classList.add("card");
    return cardDiv;
}

function groupTaskDiv(){
    let groupDiv = (<HTMLDivElement>document.createElement("div"));
    groupDiv.classList.add("input-group");
    return groupDiv;
}

// header colored band for the click and draggable part of the card
function createHeader(){
    let headerDiv = (<HTMLDivElement>document.createElement("div"));
    headerDiv.classList.add("card-header");
    headerDiv.id = "cardHeaderOverride";
    return headerDiv;    
}

function createInputTasks() {
    // add div class="form-check"
    let doneCheckbox = document.createElement("input");
    doneCheckbox.type = "checkbox";
    doneCheckbox.classList.add("form-check-input");
    doneCheckbox.value = "";
    
    return doneCheckbox;
}

function createTaskLabel(addTask: string) {
    let taskP = document.createElement("label");
    taskP.classList.add("card-text");
    taskP.classList.add("form-check-label");
    taskP.setAttribute("for", "flexCheckDefault");
    taskP.setAttribute("contenteditable", "true");
    taskP.innerText = addTask;
    return taskP;
}

function createDeleteButton() {
    let deleteBtn = document.createElement("button");
    deleteBtn.onclick = removeTaskBtn;
    deleteBtn.type = "button";
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-primary"); //add takes one class at a time!
    deleteBtn.innerText = "X"

    return deleteBtn;
}

/**
 * Deletes the task group the delete button is in.
 */
function removeTaskBtn(){
    let groupDiv = <HTMLElement>this.parentElement.parentElement;
    groupDiv.remove();
}

function clearAndFocus(){
    (<HTMLInputElement>document.getElementById("taskInput")).focus();
    (<HTMLInputElement>document.getElementById("taskInput")).value = "";
}