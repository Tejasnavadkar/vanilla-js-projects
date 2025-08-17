
// class inheritence

class User{
    constructor(name){
        this.name = name
    }
    write(){
        console.log(`your name is ${this.name}`)
    }
}

class Admin extends User{
    constructor(name){
        super(name)   // if we use constructor in child then we have call parent constructor using super()
        console.log("cns-",this.name)
    }
     create(){
        console.log(`log-${this.name}`)
     }
}

let u1 = new User("tejas")
let a1 = new Admin("admin") // o/p cns-admin

//prototypal inheritence (it only works with obj)

let obj = {
    color:"white",
    getColor:function(){
        console.log(`color is ${this.color}`)
    }
}

let obj2 = Object.create(obj) // now obj2 inherit prop and methods from obj
