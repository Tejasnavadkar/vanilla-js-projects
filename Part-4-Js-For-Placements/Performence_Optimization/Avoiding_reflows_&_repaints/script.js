
const list = document.querySelector("#List")

// 1st way 

for(let i = 1 ; i<=100 ; i++){
   const listElement = document.createElement("li")
   listElement.innerText = i
   list.appendChild(listElement)
}

// in this above eg there is performance problem in js whenever hum dom me kuch bhi change karate hai to pura dom tree refresh hota hai so here hum jb bhi new list element ul list me append karenge tab tab dom tree reload hoga so its not a good way so deal with this we use documentfragment documentFragment ek memory space banata hai hum waha pe listElement ko append karenge and then eksath ek hi bar me dom me insert karenge becoz of that dom sirf ek hi bar reload hoga

const space = document.createDocumentFragment()  //A Document Fragment is a lightweight and efficient way to hold multiple DOM elements or nodes in memory without adding them directly to the main DOM tree.

for(let i = 1 ; i<=100 ; i++){
   const listElement = document.createElement("li")
   listElement.innerText = i
   space.appendChild(listElement)
}

list.appendChild(space)



