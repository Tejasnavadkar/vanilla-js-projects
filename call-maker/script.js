const createNote = document.querySelector("#createNote");

const form = document.querySelector(".form");
const htmlForm = document.querySelector("form"); // actual form
const imageUrl = document.querySelector(
  'input[placeholder="https://example.com.jpg"]'
);
const fullName = document.querySelector('input[placeholder="Enter full name"]');
const homeTown = document.querySelector('input[placeholder="Enter home town"]');
const purpose = document.querySelector('input[placeholder="eg.Quick appointemen note"]');
const categoryInput = document.querySelectorAll('input[type="radio"][name="category"]');
const closebtn = document.querySelector(".closebtn");
const profileSection = document.querySelector(".profilecard-Section");
const nextNote = document.querySelector("#nextNote")
const prevNote = document.querySelector("#prevNote")

const saveToLocalStorage = (note) => {
  try {
    console.log("newNote--", note);
    let tasks = [];
    if (localStorage.getItem("notes") === null) {
      tasks.push(note);
      localStorage.setItem("notes", JSON.stringify(tasks));
    } else {
      tasks = JSON.parse(localStorage.getItem("notes"));
      tasks.push(note);
      localStorage.setItem("notes", JSON.stringify(tasks));
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

function createProfileCard({ imageUrl, fullName, homeTown, bookings = 3 }) {
  const card = document.createElement("div");
  card.className = "profile-card";
  card.innerHTML = `
        <div class="profile-header">
            <div class="profile-image">
                <img src="${
                  imageUrl || "/placeholder.svg?height=64&width=64"
                }" alt="${"Profile"}">
            </div>
            <h2 class="profile-name">${fullName || "Unknown"}</h2>
        </div>
        <div class="profile-info">
            <div class="info-row">
                <span class="info-label">Home town</span>
                <span class="info-value">${homeTown || "Unknown"}</span>
            </div>
            <div class="info-row">
                <span class="info-label">Bookings</span>
                <span class="info-value">${bookings || "0 times"}</span>
            </div>
        </div>
        <div class="action-buttons">
            <button class="btn btn-call">
                <svg class="phone-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call
            </button>
            <button class="btn btn-message">Message</button>
        </div>
    `;
  return card;
}


function showCards() {
    profileSection.innerHTML = ""
    const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
    if(allNotes.length > 0){
        allNotes.forEach((elem) => {
    const newCard = createProfileCard({
      imageUrl: elem?.imageUrlValue,
      fullName: elem?.fullNameValue,
      homeTown: elem?.homeTownValue,
      bookings: "3 times",
    });
    profileSection.appendChild(newCard);
  });
    }else{
       const p = document.createElement("p")
       p.classList.add("fallbackText")
       p.textContent = "no calls available.."
       profileSection.appendChild(p)
    }
}
showCards()

closebtn.addEventListener("click", (e) => {
  form.style.display = "none";
});
createNote.addEventListener("click", (e) => {
  form.style.display = "initial";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // accessing values
  const imageUrlValue = imageUrl?.value;
  const fullNameValue = fullName?.value;
  const homeTownValue = homeTown?.value;
  const purposeValue = purpose?.value;
  const category = Array.from(categoryInput)?.find((input) => input.checked);
  const categoryValue = category?.nextElementSibling?.textContent;

  if (!imageUrlValue?.trim()) {
    alert("Please enter the Image URL.");
    return;
  }
  if (!fullNameValue?.trim()) {
    alert("Please enter the Full Name.");
    return;
  }
  if (!homeTownValue?.trim()) {
    alert("Please enter the Home Town.");
    return;
  }
  if (!purposeValue?.trim()) {
    alert("Please enter the Purpose.");
    return;
  }
  if (!categoryValue?.trim()) {
    alert("Please select a Category.");
    return;
  }

  const data = {
    imageUrlValue,
    fullNameValue,
    homeTownValue,
    purposeValue,
    categoryValue,
  };

  saveToLocalStorage(data);
  htmlForm.reset();
  showCards()
});

nextNote.addEventListener("click",()=>{
    console.dir(profileSection) // here profileSection is div inside we place our all cards
    let lastElement = profileSection.lastElementChild
    if(lastElement){
        profileSection.insertBefore(lastElement,profileSection.firstElementChild) // last element ko first element se pehale set karo
        // update z-index and opacity
        // showCards() 
    }
     
})

prevNote.addEventListener("click",()=>{
    let firstElement = profileSection.firstElementChild
    console.dir(firstElement)
    if(firstElement){
       profileSection.appendChild(firstElement); // first element ko last me append karo
        // update z-index and opacity
        // showCards() 
    }
})
