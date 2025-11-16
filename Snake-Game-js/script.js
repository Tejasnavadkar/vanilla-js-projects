
const board = document.querySelector(".board")
const boxHeight = 30
const boxWidth = 30
const boardHeight = board.clientHeight // here we get board height and width
const boardWidth = board.clientWidth

console.log({boardHeight,boardWidth})

const cols = Math.floor(boardWidth/boxWidth)  // here we write calculations ki kitne box ayenge coloms me and rows me according to the board height and width
const rows = Math.floor(boardHeight/boxHeight)

//here we add boxes inside board accoording to the board height and width
for(let i = 0 ; i < cols*rows ; i++){
  const box = document.createElement('div')
  box.classList.add("box")
  board.appendChild(box)
}

