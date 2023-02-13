
// let p1 = document.createElement("p");
// let p2 = document.createElement("p");
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let h3 = document.createElement("h3");

// document.body.appendChild(p1);
// document.body.appendChild(div);
// document.body.appendChild(h3);
// div.appendChild(p2);
// div.appendChild(h1);


// 1. Add a <p> with red text that says “Hey I’m red!”
let p1 = document.createElement("p");
p1.textContent = "Hey I'm red!";
p1.style.color = "red";

// 2. Add an <h3> with blue text that says “I’m a blue h3!”
let h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

// 3. Add a <div> with a black border and pink background color with the following elements inside of it: 
let div = document.createElement("div");
div.style.border = "thick solid black";
div.style.backgroundColor = "pink";
// div.setAttribute("style", "borderColor: black; background: pink");

// a) another <h1> that says “I’m in a div”
let h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

// b) a <p> that says “ME TOO!”
let p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

// c) Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container
// document. < adds content to our html > 
document.body.insertBefore(p1, null)
document.body.insertBefore(h3, null)
document.body.insertBefore(div, null)

// p1.style.backgroundColor = "blue";
// h3.style.backgroundColor = "green";
// div.style.backgroundColor = "yellow";
// h1.style.backgroundColor = "gray";
// p2.style.backgroundColor = "aqua";