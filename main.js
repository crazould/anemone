let taskBtn = document.getElementById("taskBtn")
let taskTxt = document.getElementById("taskTxt")
let tasks = document.getElementById("tasklist")
let taskList = []


taskBtn.addEventListener("click", (e) => {

    let task = '<div class= "task">' + taskTxt.value + '</div>'


    taskList.push(task)

    tasks.innerHTML = taskList.join(" ")


})