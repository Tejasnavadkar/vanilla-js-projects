// lazy loading is used to optimize performense when we render any website in screen that time all the website imgs is loaded on screen becoz of that website loads slow so to prevent this we use lazy loading concept in this we not load imgs initially we load imgs only when they appear on screen

// we use interseptObserver api to observe imgs, jaise hi img screen threshold pe aati hai hum image ko load karenge

// interseptObserver se ek observer create karenge and with this we can observe any element 

// The JavaScript Intersection Observer API is a web API that allows asynchronous observation of changes in the intersection of a target element with an ancestor element or with the top-level document's viewport.
//  It is particularly useful for detecting when elements enter or exit the viewport, enabling features like lazy loading of images, infinite scrolling, scroll-based animations, and tracking user interactions.

// To use the Intersection Observer, you create an instance by passing a callback function and optional configuration options to the IntersectionObserver constructor.
//  The callback is triggered whenever the visibility of the observed target element crosses a specified threshold, which is a value between 0 and 1 representing the percentage of the element that must be visible.
//  The default threshold is 0, meaning the callback fires as soon as any part of the element is visible.
//  You can also specify an array of thresholds to trigger the callback at multiple visibility points, such as [0, 0.25, 0.5, 0.75, 1] for every 25% increment

// inshort: website koi element ko observe karo and jaise hi wo screen pe aye tabhi perform the action
const allImages = document.querySelectorAll("img")

// create observer to observe each ki wo screen pe appear ho rahi hai kya ?

const observer = new IntersectionObserver((entries,observer)=>{
//   console.log(`entries:- ${entries}`)
entries.forEach((entry)=>{
    if(entry.isIntersecting){ // here isIntersecting means agar element screen pe appear hota hai 
        console.dir(entry.target)
        const imgSrc = entry.target.dataset.src // data-src wale elements target array me save hote hai
        entry.target.setAttribute("src",imgSrc) 
        entry.target.classList.remove("hide")
        observer.unobserve(entry.target) // here we unobserve means ek baar img screen pe aa gay fir use dobara observe mat karo
    }
})

// observer.unobserve(entries)
},{
    root:null, // matalab ye screen full viewport
    threshold:0.1, //the threshold property accepts a value between 0 and 1 and represents the percentage of the element that must be visible before isIntersecting becomes true. By default this is set to 0 which means as soon as any part of the element is visible it will be considered intersecting.
})

// console.log(allImages)

allImages.forEach((img)=>{
       observer.observe(img)
})