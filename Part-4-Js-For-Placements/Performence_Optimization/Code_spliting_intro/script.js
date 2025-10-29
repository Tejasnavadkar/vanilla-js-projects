
const btn = document.querySelector("#btn")

btn.addEventListener("click", async ()=>{
       
   const heavy = await import('./heavy.js')
   heavy.heavyFn()
   alert('heavy code loaded')
})

// here code splitting meanse we not load the entire codebase we divide our code into small small chunks and import it whenever we need it 

// in this code we write heavy code in different file when we click on btn only that time we load and execute it