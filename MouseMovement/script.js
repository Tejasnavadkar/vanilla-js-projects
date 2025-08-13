
const box = document.querySelector(".box")

window.addEventListener("mousemove",(e)=>{
    // console.log(e.clientX,e.clientY)
    box.style.top = `${e.clientY - 100}px` // here substract half height to make the arrow center
    box.style.left = `${e.clientX - 100}px` // here substract half width
})