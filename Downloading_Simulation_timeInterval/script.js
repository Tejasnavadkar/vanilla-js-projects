
const btn = document.querySelector("#btn")
const progressBar = document.querySelector("#progressBar")
const percentage = document.querySelector("#percentage")

btn.addEventListener("click",()=>{
    let count = 0
    let seconds = 3 // i want to complete this progress bar in 3 sec
   const timerId = setInterval(()=>{
       if(count <=99){
           count++
           console.log(count)
           progressBar.style.width = `${count}%`
           percentage.textContent = `${count}%`
        }else clearInterval(timerId)
    },(seconds * 1000)/100)
})