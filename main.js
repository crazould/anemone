let taskBtn = document.getElementById("taskBtn")
let taskTxt = document.getElementById("taskTxt")
let tasks = document.getElementById("tasklist")
let taskList = []


taskBtn.addEventListener("click", (e) => {

    if (taskTxt.value == "") {
        // taskBtn.style.boxShadow = "none"
        taskTxt.style.boxShadow = "0px 0px 15px #a31d1d"
        taskTxt.placeholder = "Type your todo here!"
        console.log(taskBtn.style.boxShadow)
    }
    else {

        let task = 
        `<div class= "task"> 
            <div class="task-text">
                ${taskTxt.value} 
            </div>
            <div class="task-action">
                <i class="fa fa-check fa-lg my-btn" id="editBtn" aria-hidden="true"></i>
                <i class="fa fa-trash fa-lg my-btn" id="deleteBtn" aria-hidden="true"></i>
            </div>
        </div>`

        taskList.push(task)
        tasks.innerHTML = taskList.join(" ")
	taskTxt.value = ""

    }


})