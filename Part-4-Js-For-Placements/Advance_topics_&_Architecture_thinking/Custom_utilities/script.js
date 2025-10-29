
// 1] map 
// what map actully do : 

// map -> ek array ke top pe chalta hai and us array ke
// sabhi members us map function ke andar aate hai and map
// function ek naya array return krta hai and us naye array
// mein jo bhi map ne return kiya hoga wahi placed hota hai

const arr = [1,2,3,4,5]

const myMap = (arr,callback) =>{

    let newArray = []
    for(let i = 0 ; i < arr.length ; i++){
        newArray.push(callback(arr[i],i,arr))  // humane yaha pe i and arr bhi bheja coz real .map() me pehla parameter element hota hai, 2nd index & 3rd actual array hota hai
    }
    return newArray
}

const newArr = myMap(arr,(elem)=>elem + 1)
console.log(newArr)

// here we create our own map fn 


//2] Deep clone :- check out yt video

