var tasks = [];
var inputName = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");
var btnValue = document.getElementById('mySubmit');
btnValue.addEventListener("click", function () {
    if (inputName.value.length > 0) {
        tasks.push(inputName.value);
        inputName.value = "";
        displayTasks(tasks);
        console.log(tasks);
    }
});
var displayTasks = function (container) {
    var innerContent = "";
    for (var i = 0; i < container.length; i++) {
        innerContent += "<div>\n        <li>".concat(container[i], "</li>\n        <button onclick=\"editTask(").concat(i, ")\">Edit</button>\n        <button onclick= \"deleteTask(").concat(i, ")\">Completed</button>\n\n        </div>");
    }
    taskList.innerHTML = innerContent;
};
var editTask = function (index) {
    if (inputName.value.length > 0) {
        tasks.splice(index, 1, inputName.value);
        displayTasks(tasks);
        inputName.value = "";
    }
};
var deleteTask = function (index) {
    tasks.splice(index, 1);
    displayTasks(tasks);
};
