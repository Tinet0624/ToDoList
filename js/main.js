window.onload = function () {
    document.getElementById("addButton").onclick = addTaskBtn;
};
let taskNum = 0;
function incrementTaskNum() {
    taskNum++;
}
function addTaskBtn() {
    let addTask = document.getElementById("taskInput").value;
    if (addTask == "") {
        alert("Excuse ME your task better not be empty!");
    }
    else {
        document.getElementById("taskList").innerHTML +=
            `
            <div class="tasks">
                <input type="checkbox" id="done">
                <span id="taskName">
                    ${addTask}
                </span>
                <button id="deleteButton${taskNum}" 
                onclick="removeTaskBtn(deleteButton${taskNum})">X</button>
            </div>
        `;
    }
    incrementTaskNum();
}
function removeTaskBtn(id) {
    alert("yup");
    console.log(id);
}
