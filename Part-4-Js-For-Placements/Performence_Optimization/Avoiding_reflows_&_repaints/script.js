
const list = document.querySelector("#List")

// 1st way 

for(let i = 1 ; i<=100 ; i++){
   const listElement = document.createElement("li")
   listElement.innerText = i
   list.appendChild(listElement)
}

// in this above eg there is performance problem in js whenever hum dom me kuch bhi change karate hai to pura dom tree refresh hota hai so here hum jb bhi new list element ul list me append karenge tab tab dom tree reload hoga so its not a good way so deal with this we use documentfragment documentFragment ek memory space banata hai hum waha pe listElement ko append karenge and then eksath ek hi bar me dom me insert karenge becoz of that dom sirf ek hi bar reload hoga / dom repaint nahi hoga

const space = document.createDocumentFragment()  //A Document Fragment is a lightweight and efficient way to hold multiple DOM elements or nodes in memory without adding them directly to the main DOM tree.

for(let i = 1 ; i<=100 ; i++){
   const listElement = document.createElement("li")
   listElement.innerText = i
   space.appendChild(listElement)
}

list.appendChild(space)


// next concept : avoiding memory leaks : timers, eventListerns

// if i want to use intervel to print number within 5 milisecond but only 10

let count = 0
let timerId = setInterval(()=>{
    if(count<=10){
        console.log(count)
        count++
    } else{
       clearInterval(timerId)
       console.log("finish")
    }
},500)

// here count 10 tak print hoga but interval to chal raha hai abhi bhi to iske karan memory leaks hote hai hum iss manually rokana padata hai like this else{
    //    clearInterval(timerId)
    //    console.log("finish")
    // }


