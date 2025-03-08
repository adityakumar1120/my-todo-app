const taskInputElem = document.querySelector('.input')
const addBtn = document.querySelector('.add-btn')

const taskContainer = document.querySelector('.tasks-cont')
const mainTask = document.querySelector('.main-task')
const messageElem = document.querySelector('.message')

const err= document.querySelector('.err')
const addedTasks = JSON.parse(localStorage.getItem("tasks"))
let allTasksObj = addedTasks || []

if(allTasksObj.length === 0){
    messageElem.classList.add('block')
    messageElem.classList.remove('none')

} else{

    messageElem.classList.remove('block')
    messageElem.classList.add('none')
}
loopOverTasks()
// generating task and appending in the ui

window.addEventListener('keydown' ,(e)=>{
   if(e.key == 'Enter'){
    if(taskInputElem.value){
        messageElem.classList.add('none')
        generateTask(taskInputElem.value)
        allTasksObj.push(
            {task: taskInputElem.value, state: false}
        )
        localStorage.setItem("tasks", JSON.stringify(allTasksObj))
        taskInputElem.value = ''
        
        if(allTasksObj.length === 0){
            messageElem.classList.add('block')
            messageElem.classList.remove('none')

            console.log('chal gaya');
        } else{

            messageElem.classList.remove('block')
            messageElem.classList.add('none')
        }
        err.classList.add('hidden')
    } else{
        err.classList.remove('hidden')
    }
   }
})
addBtn.addEventListener('click' ,(e)=>{
    if(taskInputElem.value){
        messageElem.classList.add('none')
        generateTask(taskInputElem.value)
        allTasksObj.push(
            {task: taskInputElem.value, state: false}
        )
        localStorage.setItem("tasks", JSON.stringify(allTasksObj))
        taskInputElem.value = ''
        
        if(allTasksObj.length === 0){
            messageElem.classList.add('block')
            messageElem.classList.none('none')
        } else{

            messageElem.classList.remove('block')
            messageElem.classList.add('none')

        }
        err.classList.add('hidden')
    } else{
        err.classList.remove('hidden')
    }
})

function generateTask(task , state){

    const taskElem = document.createElement('div')
    taskElem.classList.add('task')
    if(state){
        taskElem.classList.add('completed')
    }
    taskElem.innerHTML = `       <div class="main-task flex align-center">
                        <div class="tick flex justify-center align-center">
                            <img src="tick.svg" class="check-icon" alt="">
                        </div>
                        <div class="task-text">
                            ${task}
                        </div>
                    </div>
                    <div class="icons cross-icon">
                    <i class="ri-add-line delete">
                    </i></div>` 
    taskContainer.append(taskElem)
    
}


taskContainer.addEventListener('click' , (event)=>{
    if(event.target.classList.contains('main-task')){
        event.target.classList.toggle('completed')
        const childrens = Array.from(taskContainer.children)
        const taskIndex = childrens.indexOf(event.target.parentElement)
        if(allTasksObj[taskIndex].state === true){
            allTasksObj[taskIndex].state = false
            localStorage.setItem('tasks', JSON.stringify(allTasksObj))
            taskContainer.innerHTML = ''
            loopOverTasks()
        } else{
            allTasksObj[taskIndex].state = true
            localStorage.setItem('tasks', JSON.stringify(allTasksObj))
            taskContainer.innerHTML = ''
            loopOverTasks()
        }
    } else if(event.target.classList.contains('delete')){
        console.dir(event.target.parentElement.parentElement);
        const childrens = Array.from(taskContainer.children)
        const taskIndex = childrens.indexOf(event.target.parentElement.parentElement)

        allTasksObj.splice(taskIndex, 1)
        localStorage.setItem("tasks", JSON.stringify(allTasksObj))
        
        taskContainer.innerHTML = '' //container ko empty karna 
        loopOverTasks()
        if(allTasksObj.length === 0){
            messageElem.classList.add('block')
            messageElem.classList.remove('none')
        } else{
    messageElem.classList.remove('block')
            messageElem.classList.add('none')

        }
       
    }
})



function loopOverTasks(){
    allTasksObj.forEach((e)=>{
        generateTask(e.task, e.state)
    })
}
