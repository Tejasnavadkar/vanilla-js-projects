
// DOM ka code and logic ka code alag rehna chahiye
// separation of concerns

//eg

const btn = document.querySelector("button");
const ul = document.querySelector("ul");

function add (n1, n2) {
   return n1 + n2; I
}

btn.addEventListener("click", function () {

  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);

  let finalAdd = add(num1, num2);
  let li = document.createElement("li");
  li.textContent = finalAdd;
  ul.appendChild(li);

});

// here in this code we write the addition logic in seperate function not mixing in ui logic 