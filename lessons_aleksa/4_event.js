// https://fjolt.com/article/javascript-multiple-elements-addeventlistener
// pptx pp43-49 read again

// p47
let btn = document.querySelector("button");
btn.addEventListener("click", function(e){
    console.log(e);
    e.target.style.background = "blue";
})

// add event listeners to multiple elements
let elements = document.querySelectorAll(".button");
let clickEvent = () => {
    console.log("It is clicked.")
}
elements.forEach((item) =>{
    item.addEventListener("click", clickEvent)
})