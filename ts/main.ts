window.onload = function(){
    (<HTMLButtonElement>document.getElementById("addButton")).onclick = addTaskBtn;
}

let taskNum = 0;

function incrementTaskNum(){
    taskNum++;
}

function addTaskBtn(){

    let addTask = (<HTMLInputElement>document.getElementById("taskInput")).value;

    if(addTask == ""){
        alert("Excuse ME your task better not be empty!");
    }
    else{
        (<HTMLElement>document.getElementById("taskList")).innerHTML += 
        `
            <div class="tasks">
                <input type="checkbox" id="done">
                <span id="taskName">
                    ${addTask}
                </span>
                <button id="deleteButton${taskNum}" 
                onclick="removeTaskBtn('deleteButton${taskNum}')">X</button>
            </div>
        `;
    }
    incrementTaskNum();
    //(<HTMLButtonElement>document.getElementById("deleteButton")).onclick = removeTaskBtn;
}

function removeTaskBtn(id){
    let deleteBtn = document.getElementById(id).parentElement;

    deleteBtn.remove();
    // need to remove element. Only seems to work for top element.
}