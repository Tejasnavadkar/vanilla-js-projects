//  list selectors
const todoList = document.querySelector("#todo-list")
const inProgressList = document.querySelector("#inProgress-list")
const doneList = document.querySelector("#done-list")

// container selectors 
const todoListContainer = document.querySelector("#todo-container")
const inProgressListContainer = document.querySelector("#inProgress-container")
const doneListContainer = document.querySelector("#done-container")

// count selector
const todoCount = document.querySelector("#todo-count")
const inProgressCount = document.querySelector("#inProgress-count")
const doneCount = document.querySelector("#done-count")

// modal related selectors
const addTaskToggleButton = document.querySelector("#add-task-toggle")
const createTaskModal = document.querySelector(".modal")
const modalBg = document.querySelector(".bg")
const createTaskButton = document.querySelector(".create-button")

// form inputs selector
const titleInput = document.querySelector("#title")
const descriptionInput = document.querySelector("#description")

// current drag element drag event se set hoga
let draggedItem = null

// const elementContainer = {
//     todoList:todoListContainer,
//     inProgressList:inProgressListContainer,
//     doneList:doneListContainer
// }


// console.log("inprogresslist--",inProgressList)

// task selector
const allTaskItems = document.querySelectorAll(".task-item")


// here we set draggable attribute and drag listener to every task item
allTaskItems.forEach((item)=>{
    item.setAttribute("draggable",true)
    item.addEventListener("drag",(e)=>{
        console.log("dragged-item:",e.target)
        draggedItem = e.target
    })
})

// Function to update task counts
function updateTaskCounts() {
    //todoList/inProgressList/doneList me jitene bhi task-item hai uski length
    const todoTaskCount = todoList.querySelectorAll('.task-item').length
    const inProgressTaskCount = inProgressList.querySelectorAll('.task-item').length
    const doneTaskCount = doneList.querySelectorAll('.task-item').length

    todoCount.textContent = todoTaskCount
    inProgressCount.textContent = inProgressTaskCount
    doneCount.textContent = doneTaskCount
}


// funtion for to add events each list  
function addEvents(listElement){

     // The closest() method searches up the DOM tree for elements which matches a specified CSS selector.
     // The closest() method starts at the element itself, then the anchestors (parent, grandparent, ...) until a match is found.
     // The closest() method returns null() if no match is found.

    const container = listElement.closest('.list')   // find the parent container element which has list class using .closest()

    // dragenter event jaise hi drag list ke top pe aye then it will execute
    listElement.addEventListener("dragenter", (e) => {
        e.preventDefault()
        container?.classList.add("list-Hover")
    })
    
    // dragleave event jaise hi drag list ke top se hat jaye then it will execute
    listElement.addEventListener("dragleave", (e) => {
        e.preventDefault()
        container?.classList.remove("list-Hover")
    })

    //   MUST handle dragover and preventDefault to allow drop
    //   listen for "dragover" and call e.preventDefault() on the target. Without that the browser will not allow drop, so "drop" won't fire.
    listElement.addEventListener("dragover", (e) => {
        e.preventDefault()
        // console.log(e)
    })

     // drop event
       listElement.addEventListener("drop", (e) => {
        let destination = e.target
        e.preventDefault()
        console.log({
            draggedItem,
            destination
        })
          
        // destination list me drop kar diya 
        destination.append(draggedItem)

        // find parent list element and remove list-Hover class 
        const container = destination.closest('.list') 
        container.classList.remove("list-Hover")
        updateTaskCounts()
    })
}

// function to create taskItem 
function createTaskItem(title,description){

       // Create main task-item div
const taskItem = document.createElement("div");
taskItem.className = "task-item";

// Create task-title div
const taskTitle = document.createElement("div");
taskTitle.className = "task-title";
taskTitle.textContent = title;

// Create task-description div
const taskDescription = document.createElement("div");
taskDescription.className = "task-description";
taskDescription.textContent = description;

// Create Delete-button wrapper div
const deleteBtnWrapper = document.createElement("div");
deleteBtnWrapper.className = "Delete-button";

// Create delete button
const deleteButton = document.createElement("button");
deleteButton.className = "task-delete-button";
deleteButton.textContent = "Delete";

// Append delete button inside wrapper
deleteBtnWrapper.appendChild(deleteButton);

// Append all children to task-item
taskItem.appendChild(taskTitle);
taskItem.appendChild(taskDescription);
taskItem.appendChild(deleteBtnWrapper);

return taskItem
}

//event listeners
addTaskToggleButton.addEventListener("click",()=>{
   createTaskModal.classList.toggle("active-Modal")
})

// on bg click modal get close
modalBg.addEventListener("click",()=>{
    createTaskModal.classList.toggle("active-Modal")
})

// form handler
createTaskButton.addEventListener("click",()=>{
    // console.log({titleInput:titleInput.value,descriptionInput:descriptionInput.value})
    let title = titleInput.value
    let description = descriptionInput.value

    const taskItem = createTaskItem(title,description)

    todoList.appendChild(taskItem)

// here we set draggable attribute and drag event to new task
taskItem.setAttribute("draggable",true)
taskItem.addEventListener("drag",(e)=>{
        console.log("dragged-item:",e.target)
        draggedItem = e.target
    })

 //close the modal
 createTaskModal.classList.toggle("active-Modal")

 titleInput.value = ""
 descriptionInput.value = ""

})




addEvents(todoList)
addEvents(inProgressList)
addEvents(doneList)
updateTaskCounts()

