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
        let cardDiv = createCardDiv();
        let doneCheckbox = createInputTasks();
        let taskSpan = createTaskLabel(addTask);
        let deleteBtn = createDeleteButton();

        // assemble and display tasks on webpage
        createCustomDiv(cardDiv, doneCheckbox, taskSpan, deleteBtn);
        taskDivDisplay(cardDiv);
    }
    clearAndFocus();
}

//ToDO:
// group checkbox, text, and delete button so they will be inline
// add color band to the top of tasks for cuteness

function taskDivDisplay(taskDiv: HTMLDivElement) {
    let taskList = document.getElementById("taskList");
    taskList.appendChild(taskDiv);
}

function createCustomDiv(cardDiv: HTMLDivElement, doneCheckbox: HTMLInputElement, 
                        taskSpan: HTMLSpanElement, deleteBtn: HTMLButtonElement) {
    cardDiv.appendChild(doneCheckbox);
    cardDiv.appendChild(taskSpan);
    cardDiv.appendChild(deleteBtn);
}

function createCardDiv() {
    let cardDiv = (<HTMLDivElement>document.createElement("div"));
    cardDiv.classList.add("card");
    return cardDiv;
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
    taskP.innerText = addTask;
    return taskP;
}

function createDeleteButton() {
    let deleteBtn = document.createElement("button");
    deleteBtn.onclick = removeTaskBtn;
    deleteBtn.type = "button";
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-primary"); //add takes one at a time
    deleteBtn.innerText = "X"

    return deleteBtn;
}

function removeTaskBtn(){
    let taskDiv = <HTMLElement>this.parentElement;
    taskDiv.remove();
}

function clearAndFocus(){
    (<HTMLInputElement>document.getElementById("taskInput")).focus();
    (<HTMLInputElement>document.getElementById("taskInput")).value = "";
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