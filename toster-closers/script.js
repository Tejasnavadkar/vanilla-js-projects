
const createToaster = (config) =>{

    return function(notification){
     const toasterContainer = document.querySelector("#toasterContaner")
     const div = document.createElement("div")

     if(config.positionX !== "left" || config.positionY !== "top"){
        toasterContainer.className += `${config.positionX == "right" ? " right-5 " : ""} ${config.positionY == "bottom" ? " bottom-5 " : ""}`
     }

     div.className = ` px-4 py-2  ${config.theme === "dark" ? "text-white bg-gray-900" : " text-black bg-gray-100"}  `
     div.textContent = notification
     toasterContainer.appendChild(div)
     setTimeout(()=>{
        toasterContainer.removeChild(div)
     },3000)
    }
}

const toaster = createToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3
})
toaster("this is toaster")