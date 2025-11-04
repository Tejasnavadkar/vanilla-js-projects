let initialCount = 0

const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")
const counter = document.querySelector("#counter")
const allBoxes = document.querySelectorAll(".box")
console.log("boxes--",allBoxes)

allBoxes.forEach((box, idx) => {
    if (idx > 0) box.classList.add('left')
    if (idx < allBoxes.length - 1) box.classList.add('right')
})
function updateActiveBox(activeCount) {
    // remove/clear classes and set new ones according to count
    allBoxes.forEach((box, idx) => {
        // active only for the current box  
        box.classList.toggle('active', idx === activeCount)  // here toogle meanse agar true hai to hi active set karna otherwise not
        // completed (or visited) for all boxes before the current one
        box.classList.toggle('completed', idx < activeCount)
    })
}
// function updateActiveBox(activeCount) {
//     // First remove active class from all boxes
//     allBoxes.forEach(box => {
//         box.classList.remove('active');
//     });
    
//     // Add active class to the box at current count
//     if (activeCount >= 0 && activeCount < allBoxes.length) {
//         // allBoxes[activeCount].classList.add('active');
//         allBoxes.forEach((box,idx)=>{
           
//         })
//     }
// }

// Initialize the first state
updateActiveBox(initialCount);
counter.innerHTML = initialCount;

nextBtn.addEventListener("click", () => {
    if (initialCount < 4) {
        initialCount = initialCount + 1;
        counter.innerHTML = initialCount;
        updateActiveBox(initialCount)
    }
});

prevBtn.addEventListener("click", () => {
    if (initialCount > 0) {
        initialCount = initialCount - 1;
        counter.innerHTML = initialCount;
        updateActiveBox(initialCount)
    }
});