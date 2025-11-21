
// select elements
const board = document.querySelector(".board")
const startButton = document.querySelector("#startButton")
const reStartButton = document.querySelector("#restartButton")
const modal = document.querySelector(".modal")
const gameRestartModal = document.querySelector(".gameRestartModal")
const gameStartModal = document.querySelector(".gameStartModal")
const highScoreElement = document.querySelector("#high-score")
const scoreElement = document.querySelector("#score")
const timerElement = document.querySelector("#time")

// specify box size
const boxHeight = 50
const boxWidth = 50

// here we get board container's height and width to figurout how many box will come inside board 
const boardHeight = board.clientHeight 
const boardWidth = board.clientWidth
// console.log({boardHeight,boardWidth})

// here we write calculations ki kitne box ayenge coloms me and rows me according to the board height and width
const cols = Math.floor(boardWidth/boxWidth)  
const rows = Math.floor(boardHeight/boxHeight)

// boxes hum isme store karenge so we can get the box from here and perform action on it
const boxes = []
let snake = [{x:2,y:13}]   // ,{x:1,y:14},{x:1,y:15} snake coordinates
let direction = "right"    // kis direction me snake move karega

// create food box randomly in board
let food = {x:Math.floor(Math.random() * rows),y:Math.floor(Math.random()*cols)} 

//intervals
let intervalId = null;
let timerIntervalId = null;

// score and time variables
let score = 0;
let highScore = JSON.parse(localStorage.getItem("highScore")) || 0;
let timer = `00-00`

// old logic
//here we add boxes inside board accoording to the board height and width
// for(let i = 0 ; i < cols*rows ; i++){
//   const box = document.createElement('div')
//   box.classList.add("box")
//   board.appendChild(box)
// }

// here we add boxes inside board accoording to the board height and width
// write loop in different way so we can give coordinates to box like 0-0,0-1(0-row(x) 1-col(y))
for(let row = 0 ; row <rows ; row++){
    for(let col = 0 ; col < cols ; col++){
          const box = document.createElement('div')
          box.classList.add("box")
        //   box.innerText = `${row}-${col}`
          boxes[`${row}-${col}`] = box
          board.appendChild(box)
    }
}

// event listeners
addEventListener("keydown",directionHandler)
startButton.addEventListener("click",startGame)
reStartButton.addEventListener("click",reStartGame)


// handler functions
function render(){
 
    highScoreElement.innerText = highScore
    let head = null;
  // here we figureout snake direction
    if(direction === "left"){
        head = {x:snake[0].x,y:snake[0].y-1}
    //    snake = snake.map((elem)=>({x:elem.x,y:elem.y-1}))
    }else if(direction === "right"){
        head = {x:snake[0].x,y:snake[0].y+1}
        // snake = snake.map((elem)=>({x:elem.x,y:elem.y+1}))
    }else if(direction === "down"){
        head = {x:snake[0].x+1,y:snake[0].y}
    //    snake = snake.map((elem)=>({x:elem.x+1,y:elem.y}))
    }else if(direction === "up"){
        head = {x:snake[0].x-1,y:snake[0].y}
    //    snake = snake.map((elem)=>({x:elem.x-1,y:elem.y}))
    }

    // if snake hit the wall then stop the game
    if(head.x < 0 || head.x >= rows || head.y >=cols || head.y < 0){
        console.log(head)
        // alert("game over")
        modal.style.display = "flex"
        gameStartModal.style.display = "none"
        gameRestartModal.style.display = "inline-block"
        clearInterval(intervalId)
        // gameStartModal.style.display = "none"
        clearInterval(timerIntervalId)
        return
    }
    // render food in board
    boxes[`${food.x}-${food.y}`].classList.add("food") 

    //food consume logic
    if(head.x === food.x && head.y === food.y){ // that meanse food is consumed
        boxes[`${food.x}-${food.y}`].classList.remove("food")
        snake.unshift(food) // snake ke ander food ko jod do i.e snake length increases
        food = {x:Math.floor(Math.random() * rows),y:Math.floor(Math.random()*cols)} // recreate food in differnt place
        
        // increase score after consuming food
        score += 10
        scoreElement.innerText = score
        if(score > highScore){ // if score is greater than highscore then update the highscore with score
            console.log({score,highScore})
            localStorage.setItem("highScore",score)
        }
    }
    snake.forEach((elem)=>boxes[`${elem.x}-${elem.y}`].classList.remove("fill")) // initially remove all fills
    snake.unshift(head) // head ko front side place kiya
    snake.pop()

    snake.forEach((elem)=>boxes[`${elem.x}-${elem.y}`].classList.add("fill"))  // here we render the snake
}

function startGame(){
    // hide the modal 
     modal.style.display = "none"

     // here render function contneously run ho raha hai isiliye snake move hote hue dikh raha hai
     intervalId = setInterval(()=>{
    // 3fps(we execute render function 3 times per second) hum yaha pe sirf execute and box ki position plus and minus kar rahe and bohot hi fast kar rahe hai esiliye hum box move hote dikh rahe hai lekin real me wo move nahi ho rahe hai hum frequenly different img's dikha rahe hai isiliy wo move hoti dikh rahi hai
    render()
  },300)
   
// start the Timer
  startTimer()
}

// provide direction to the snake 
function directionHandler(e){
     // console.log(e.key)
    if(e.key === "ArrowUp"){
        direction = "up"
    }else if(e.key === "ArrowDown"){
          direction = "down" 
    }else if(e.key === "ArrowLeft"){
        direction = "left"
    }else if(e.key === "ArrowRight"){
        direction = "right"
    }
}

// restart game with new snake
function reStartGame(){
    
    //here we reset the score and time and update the ui 
    score = 0
    timer = `00-00`
    scoreElement.innerText = score
    timerElement.innerText = timer
    highScore = JSON.parse(localStorage.getItem("highScore")) || 0; // we get highscore from localstorage
    highScoreElement.innerText = highScore

    // hide the modal
    modal.style.display = "none"
     
    // timer start
    startTimer()

    // remove previous game ka food
    boxes[`${food.x}-${food.y}`].classList.remove("food") 

    // initially remove all fills (pehle wala snake remove)
    snake.forEach((elem)=>boxes[`${elem.x}-${elem.y}`].classList.remove("fill")) 
    
    // recalculate food and new snake
    food = {x:Math.floor(Math.random() * rows),y:Math.floor(Math.random()*cols)} 
    snake = [{x:2,y:13}] 

    // and start moving the snake
    intervalId = setInterval(()=>{
    // 3fps(we execute render function 3 times per second) hum yaha pe sirf execute fast kar rahe hai esiliye hum box move hote dikh rahe hai lekin real me wo move nahi ho rahe hai hum frequenly diffietn img dikha rahe hai isiliy wo move hoti dikh rahi hai
    render()
},300)
}

// start timer
function startTimer(){
    
   timerIntervalId = setInterval(()=>{
    

    let [min,sec] = timer.split("-").map(Number) // number me convert karake return karegaa and put in min and sec variables
    
    //jaise 59 hoga min badhega and second 0 hoga
    if(sec == 59){
        min +=1
        sec = 0
    }else{
        sec += 1
    }

  timer = `${min}-${sec}`  // 0-0 (min-sec)
  timerElement.innerText = timer
  },1000)
}

// bruteforce
// setInterval(()=>{
//     // 3fps(we execute render function 3 times per second) hum yaha pe sirf execute fast kar rahe hai esiliye hum box move hote dikh rahe hai lekin real me wo move nahi ho rahe hai hum frequenly diffietn img dikha rahe hai isiliy wo move hoti dikh rahi hai
    
//     snake.forEach((elem)=>boxes[`${elem.x}-${elem.y}`].classList.remove("fill"))
//     if(direction === "left"){
//        snake = snake.map((elem)=>({x:elem.x,y:elem.y-1}))
//     //    console.log("snake-",snake)
//     }else if(direction === "right"){
//         snake = snake.map((elem)=>({x:elem.x,y:elem.y+1}))
//     }else if(direction === "down"){
//        snake = snake.map((elem)=>({x:elem.x+1,y:elem.y}))
//     }else if(direction === "up"){
//        snake = snake.map((elem)=>({x:elem.x-1,y:elem.y}))
//     }
   
//     render()
// },300)

// intervalId = setInterval(()=>{
//     // 3fps(we execute render function 3 times per second) hum yaha pe sirf execute fast kar rahe hai esiliye hum box move hote dikh rahe hai lekin real me wo move nahi ho rahe hai hum frequenly diffietn img dikha rahe hai isiliy wo move hoti dikh rahi hai
//     render()
// },300)


