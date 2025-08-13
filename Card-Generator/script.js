const form = document.querySelector("form")
const inputs = document.querySelectorAll("input")
const cardContainer = document.querySelector(".card-Container")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    // create elements
    const Card = document.createElement("div")
    const imgDiv = document.createElement("div")
    const img = document.createElement("img")
    const name = document.createElement("h2")
    const occupation = document.createElement("h4")
    const details = document.createElement("h4")
    console.log(inputs)
    
    // set values
    img.setAttribute("src",`${inputs[0]?.value || "img url"}`)
    imgDiv.appendChild(img)
    name.textContent = `${inputs[1]?.value}` || "name"
    occupation.textContent = `${inputs[2]?.value}` || "occupation"
    details.textContent = `${inputs[3]?.value}` || "i am a littel kid"

    // add classes
    imgDiv.classList.add("imgDiv")
    img.classList.add("img")
    Card.classList.add("Card")

    // insert into webpage
    Card.appendChild(imgDiv)
    Card.appendChild(name)
    Card.appendChild(occupation)
    Card.appendChild(details)

    // make filed empty after submiting form
    cardContainer.appendChild(Card)
    inputs.forEach((item)=>{
        if(item.type !== "submit"){
            item.value = ""
        }
    })


})

//    <div class="Card">
//             <div class="imgDiv">
//                 <img class="img" src="https://plus.unsplash.com/premium_photo-1753431833752-862807007484?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="">
//             </div>
//             <h2>
//                 golu
//             </h2>
//             <h4>
//                 occupation
//             </h4>
//             <h4>
//                 i am a littel kid
//             </h4>
//         </div>