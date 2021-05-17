window.onload = function(){
    document.getElementById("addButton").onclick = addTaskBtn;
}

function addTaskBtn(){

    let addTask = (<HTMLInputElement>document.getElementById("taskInput")).value;

    if(addTask == ""){
        alert("Excuse ME your task better not be empty!");
    }
    else{
        (<HTMLInputElement>document.getElementById("taskList")).innerHTML += `
            <div class="tasks">
                <input type="checkbox" id="done">
                <span id="taskName">
                    ${addTask}
                </span>
                <button id="deleteButton">
                    <i class="far fa-trash-alt">X</i>
                </button>
            </div>
        `;
    }
    document.getElementById("deleteButton").onclick = removeTaskBtn;
}

function removeTaskBtn(){
    alert("yup");
    // need to remove element. Only seems to work for top element.
}