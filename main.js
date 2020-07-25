let addBtn = document.getElementById("addBtn")
let taskTxt = document.getElementById("taskTxt")
let tasksList = document.getElementById("tasklist")

let tasks = []

class task {

    constructor (text, isDone) {
        
        let taskBody = document.createElement("div")
        let taskText = document.createElement("div")
        let taskAction = document.createElement("div")
        let doneIcon = document.createElement("i")
        let deleteIcon = document.createElement("i")

        taskBody.classList.add("task")
        taskText.classList.add("task-text")
        taskAction.classList.add("task-action")

        doneIcon.classList.add("fa")
        doneIcon.classList.add("fa-check")
        doneIcon.classList.add("fa-lg")
        doneIcon.classList.add("my-btn")
        doneIcon.classList.add("done-btn")

        deleteIcon.classList.add("fa")
        deleteIcon.classList.add("fa-trash")
        deleteIcon.classList.add("fa-lg")
        deleteIcon.classList.add("my-btn")
        deleteIcon.classList.add("delete-btn")

        taskText.innerText = text
        
        let opacity = 0;
        taskBody.style.opacity = opacity;
        let fadeIn = setInterval(() => {
            if (opacity == 0.9999999999999999) {
                clearInterval(fadeIn)
            } else {
                taskBody.style.opacity = opacity
                opacity = opacity + 0.1
            } 
        }, 25)
        
        if(isDone) {
            taskBody.classList.add("task-done")
            taskText.classList.add("line-through")
        }

        doneIcon.addEventListener('click', () => {
            
            taskBody.classList.add("task-done")
            taskText.classList.add("line-through")
            let element = tasks.find(e => e.text == text && e.isDone == false)
            element.isDone = true
            window.localStorage.setItem("tasks", JSON.stringify(tasks))

        })
        
        deleteIcon.addEventListener('click', () => {
            let position = 0
            opacity = 1
            taskBody.style.opacity = opacity

            let fadeOut = setInterval(() => {

                if (position == 400) {
                    tasksList.removeChild(taskBody)
                    tasks.splice(tasks.indexOf(text), 1)

                    window.localStorage.setItem("tasks", JSON.stringify(tasks))
                    clearInterval(fadeOut)

                } else {
                    taskBody.style.left = position + 'px'
                    taskBody.style.opacity = opacity
                    position = position + 25
                    opacity = opacity - 0.1
                } 
            }, 50)
        })

        taskAction.appendChild(doneIcon)
        taskAction.appendChild(deleteIcon)
        taskBody.appendChild(taskText)
        taskBody.appendChild(taskAction)
        tasksList.prepend(taskBody)

    }

}


let validate = () => {
    if (taskTxt.value == "") {
        taskTxt.style.boxShadow = "0px 0px 15px #a31d1d"
        taskTxt.placeholder = "Type your todo here!"
    }
    else {
        new task(taskTxt.value, false)
        tasks.push({
            text: taskTxt.value,
            isDone: false
        })
        window.localStorage.setItem("tasks", JSON.stringify(tasks))
        taskTxt.value = ""
    } 
}

if(window.localStorage.getItem("tasks") == undefined){
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
}
else {
    tasks = JSON.parse(window.localStorage.getItem("tasks"))
    tasks.forEach(e => {
        new task(e.text, e.isDone)
    })
}


addBtn.addEventListener("click", validate)
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) validate()
})


