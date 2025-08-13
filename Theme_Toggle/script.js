const checkToggle = document.querySelector("#checkbox");


const localTheme = localStorage.getItem('theme');
let themeToApply = localTheme;
if (!themeToApply) {
    // Get OS theme if localStorage is empty
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    themeToApply = prefersDark ? 'dark' : 'light';
}
document.documentElement.setAttribute('data-theme', themeToApply);
checkToggle.checked = themeToApply === 'dark';

//toggle
checkToggle.addEventListener("change", (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});










// this code not used theme from os
// const checkToggle = document.querySelector("#checkbox")

// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// if (currentTheme) { // first check localstorage theme 
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if (currentTheme === 'dark') {
//         checkToggle.checked = true;
//     }
// }


// checkToggle.addEventListener("change",(e)=>{
//     console.log(e.target.checked)
//      if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     } 
// })