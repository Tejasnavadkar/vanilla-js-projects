const users = [
  { name: "Amit Sharma", email: "amit.sharma@example.com" },
  { name: "Priya Singh", email: "priya.singh@example.com" },
  { name: "Rahul Verma", email: "rahul.verma@example.com" },
  { name: "Sneha Patel", email: "sneha.patel@example.com" },
  { name: "Vikram Joshi", email: "vikram.joshi@example.com" },
  { name: "Neha Gupta", email: "neha.gupta@example.com" },
  { name: "Rohan Mehra", email: "rohan.mehra@example.com" },
  { name: "Anjali Desai", email: "anjali.desai@example.com" },
  { name: "Karan Kapoor", email: "karan.kapoor@example.com" },
  { name: "Pooja Reddy", email: "pooja.reddy@example.com" }
];

const cardContainer = document.querySelector("#cardsSection")
const searchInput = document.querySelector("#searchInput")
const paragraph = document.querySelector(".fallbackText")

// create card fn
function createCards(user){
    const card = document.createElement("div")
    card.classList.add("card")
    const userName = document.createElement("h3")
    const email = document.createElement("p")

    userName.textContent = user.name
    email.textContent = user.email
    card.appendChild(userName)
    card.appendChild(email) 
    cardContainer.appendChild(card) 
}

function showUsers(users){
   if(users.length > 0){
    users.forEach((user)=>{
    createCards(user)
  }) 
   }else{
    const span = document.createElement("span")
    span.textContent = "Users not found.."
    span.classList.add("fallbackText")
    cardContainer.appendChild(span)
   }
}

//filter users
function searchUsers(e){
     const searchValue = e.target.value.toLowerCase();
    // Filter users whose name includes the search value(searchValue) (case-insensitive)
    const filteredUsers = users.filter(user =>
        // user.name.toLowerCase().includes(searchValue)
          user.name.toLowerCase().startsWith(searchValue) // starts with this name
    );
    // Clear previous cards
    cardContainer.innerHTML = "";

    // Render filtered cards
    showUsers(filteredUsers)
}

showUsers(users)


let debounceTimer;
searchInput.addEventListener("input", function(e) { // debouncing
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        searchUsers(e);
    }, 500); // 300ms delay
});

