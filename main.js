let addBtn = document.getElementById("addBtn")
let taskTxt = document.getElementById("taskTxt")
let tasksList = document.getElementById("tasklist")

let addTask = () => {

    if (taskTxt.value == "") {
        
        taskTxt.style.boxShadow = "0px 0px 15px #a31d1d"
        taskTxt.placeholder = "Type your todo here!"

    }
    else {

        let myTask = document.createElement("div")
        let myTaskText = document.createElement("div")
        let myTaskAction = document.createElement("div")
        let myDoneIcon = document.createElement("i")
        let myDeleteIcon = document.createElement("i")

        myTask.classList.add("task")
        myTaskText.classList.add("task-text")
        myTaskAction.classList.add("task-action")

        myDoneIcon.classList.add("fa")
        myDoneIcon.classList.add("fa-check")
        myDoneIcon.classList.add("fa-lg")
        myDoneIcon.classList.add("my-btn")
        myDoneIcon.classList.add("done-btn")

        myDeleteIcon.classList.add("fa")
        myDeleteIcon.classList.add("fa-trash")
        myDeleteIcon.classList.add("fa-lg")
        myDeleteIcon.classList.add("my-btn")
        myDeleteIcon.classList.add("delete-btn")

        myTaskText.innerText = taskTxt.value
        
        myDoneIcon.addEventListener('click', (e) => {
            
            myTaskText.style.textDecoration = "line-through"
            // myTask.style.backgroundColor = "#f33e59"
            // myDoneIcon.style.color = "#20CC82"
            myTask.style.backgroundColor = "#f33e59"

        })
        
        myDeleteIcon.addEventListener('click', (e) => {
            let position = 0
            opacity = 1
            myTask.style.opacity = opacity

            let fadeOut = setInterval(() => {

                if (position == 400) {
                    tasksList.removeChild(myTask)
                    clearInterval(fadeOut)
                } else {
                    // console.log(fadeInOpacity)
                    myTask.style.left = position + 'px'
                    myTask.style.opacity = opacity
                    position = position + 25
                    opacity = opacity - 0.1
                } 

            }, 50)

        })

        myTaskAction.appendChild(myDoneIcon)
        myTaskAction.appendChild(myDeleteIcon)

        myTask.appendChild(myTaskText);
        myTask.appendChild(myTaskAction);

        tasksList.prepend(myTask)

        let opacity = 0;
        myTask.style.opacity = opacity;

        let fadeIn = setInterval(() => {
            if (opacity == 0.9999999999999999) {
                clearInterval(fadeIn)
            } else {
                myTask.style.opacity = opacity
                opacity = opacity + 0.1
            } 
        }, 25)

        taskTxt.value = ""
    }

}

addBtn.addEventListener("click", () => addTask())
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) addTask()
})



