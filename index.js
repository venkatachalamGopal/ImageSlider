
// Mouse Wheeling code 

let movieContainer=document.querySelector('.gallery')
console.log(movieContainer);
movieContainer.addEventListener("wheel",(event)=>{
    event.preventDefault();
    movieContainer.scrollLeft+=event.deltaY;
    movieContainer.style.scrollBehavior="auto";

})
// Left button functionality
let nextBtn=document.querySelector('#nextBtn')
nextBtn.addEventListener("click",()=>{
    movieContainer.style.scrollBehavior="smooth";
    movieContainer.scrollLeft-=900;
    
    
})

// Right button functionality

let backBtn=document.querySelector('#backBtn')
backBtn.addEventListener("click",()=>{
    movieContainer.style.scrollBehavior="smooth";
    movieContainer.scrollLeft+=900;

})


