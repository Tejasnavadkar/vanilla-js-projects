
class CreatePencil{

    constructor(name,company,price,color){ // invoke at the time instance creation generally used to set variables initially
        this.name = name;
        this.company = company
        this.price = price
        this.color = color
    }

    write(text){
     const div =  document.createElement("div")
     const body =  document.querySelector("body")
     div.innerText = text
     div.style.color = this.color
     body.appendChild(div)
    }

    erase(){
       const div = document.querySelectorAll("div")
       Array.from(div).forEach((elem)=>{
        if(elem.style.color === this.color){  // here we remove the elements from body based on there creation
            elem.remove()
        }
       })
    }
}

const p1 = new CreatePencil("nataraj","nataraj","10","red")
const p2 = new CreatePencil("apsara","apsara","10","black")