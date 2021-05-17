window.onload = function(){
    document.getElementById("addButton").onclick = addTaskBtn;
}

function addTaskBtn(){
    let task = <HTMLInputElement>document.getElementById("task");
    let addTask = task.value;
    if(addTask == ""){
        alert("Excuse ME your task better not be empty!");
    }
    else{
        alert("Bo YA! You addedd a task!");
    }
}