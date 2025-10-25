//to optimize performence use debouncing and throtling

//1] debounce :-

// debouncing-> aap koi action kar rahe ho and aap ye nahi chaahte har action pe kuchh ho, jab bhi mere actions ke beech mein koi specific gap aajaye to fir reaction perform ho

// eg:

function debounce(fnc, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fnc(...args);
    }, delay);
  };
}
document.querySelector("input").addEventListener(
  "input",
  debounce(function (arg) {
    console.log("debounce");
    console.log(arg)
  }, 1000)
);

//explaination 

// so here why we return another fnc becoz in js jab bhi hum debounc() ese call karte hai tab ye function initially jab js engine read karata hai tabhi run karata hai matlab input box me kuch input hone se pehele ek bar execute hota hai to isiliye hum debounce ke ander se function return karte hai to wo eventlistner ke second argument me ayega eg .addEventListener("input",function) and here ...args meanse wo represe karata hai event ko eg addEventListerner("click",function(event){console.log(event)})
// so here args hi wo event hai


// 2] throttle

// debounce -> ek delay bataaoge tum utna delay jab bhi aayega action ka reaction milega
// throttle -> interval par chalunga, action agar hota raha and aapne ek interval bataya to utne interval me aapka event chalega


function throttle (fnc, delay){

   let timer = 0;

  return function (...args) {
     let now = Date.now(); // it gives current miliseconds
     if (now - timer >= delay) { // here we check differnce is greater than delay
     timer = now;
     fnc(...args);
    };
  }

}

document.querySelector("input").addEventListener(
  "input",
  throttle(function (arg) {
    console.log("throttle");
    console.log(arg)
  }, 1000)
);

// window.addEventListener("scroll",()=>console.log("scroll"))

//definations

// 🧭 Debouncing (short definition):

// “Debouncing means delaying the execution of a function until a certain time has passed since the last event.”

// 👉 (In short: run the function after user stops performing the action for some time.)

// 🧠 Example: Wait until user stops typing before making an API call.



// ⚡ Throttling (short definition):

// “Throttling means allowing a function to execute only once in a specific time interval, no matter how many times the event is triggered.”

// 👉 (In short: run the function at regular intervals while the action continues.)

// 🧠 Example: Handle scroll or resize events every 500ms instead of every pixel move.

// 🔹 Quick memory trick:

// Debounce → wait till the end
// Throttle → run at intervals

// ⚡ Throttling (very simple):

// “Throttling means running the function only once in a fixed time, even if the user keeps doing something.”

// 🧠 Example: Run scroll event once every 1 second while user is scrolling.







