window.onload = function(){
    (<HTMLButtonElement>document.getElementById("addButton")).onclick = addTaskBtn;
}

function addTaskBtn(){

    let addTask = (<HTMLInputElement>document.getElementById("taskInput")).value;

    if(addTask == ""){
        alert("Please enter a task.");
    }
    else{
        //create elements for tasks
        let taskDiv = createTaskDiv();
        let doneCheckbox = createInputTasks();
        let taskSpan = createTaskSpan(addTask);
        let deleteBtn = createDeleteButton();

        // assemble and display tasks on webpage
        createCustomDiv(taskDiv, doneCheckbox, taskSpan, deleteBtn);
        taskDivDisplay(taskDiv);

        //TODO Quality of life:
        //clear text box
        // give focus
    }
}

function taskDivDisplay(taskDiv: HTMLDivElement) {
    let taskList = document.getElementById("taskList");
    taskList.appendChild(taskDiv);
}

function createCustomDiv(taskDiv: HTMLDivElement, doneCheckbox: HTMLInputElement, taskSpan: HTMLSpanElement, deleteBtn: HTMLButtonElement) {
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

function createTaskSpan(addTask: string) {
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
    let taskDiv = (<HTMLDivElement>document.createElement("div"));
    taskDiv.classList.add("tasks");
    return taskDiv;
}

function removeTaskBtn(){
    let taskDiv = <HTMLElement>this.parentElement;
    taskDiv.remove();
}

// Old code ***************************************************************************
// let taskNum = 0;

// function incrementTaskNum(){
//     taskNum++;
// }
// (<HTMLElement>document.getElementById("taskList")).innerHTML += 
        // `
        //     <div class="tasks">
        //         <input type="checkbox" id="done">
        //         <span id="taskName">
        //             ${addTask}
        //         </span>
        //         <button id="deleteButton${taskNum}" 
        //         onclick="removeTaskBtn('deleteButton${taskNum}')">X</button>
        //     </div>
        // `;    
        // incrementTaskNum();
    //clear text box
    // give focus
    // function removeTaskBtn(id){
//     let deleteBtn = document.getElementById(id).parentElement;

//     deleteBtn.remove();
// }