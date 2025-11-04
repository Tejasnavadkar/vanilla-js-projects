let initialCount = 0

const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")
const counter = document.querySelector("#counter")
const allBoxes = document.querySelectorAll(".box")
console.log("boxes--",allBoxes)

function updateActiveBox(count) {
    // First remove active class from all boxes
    allBoxes.forEach(box => {
        box.classList.remove('active');
    });
    
    // Add active class to the box at current count
    if (count >= 0 && count < allBoxes.length) {
        allBoxes[count].classList.add('active');
    }
}

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