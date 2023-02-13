// https://dev.to/arikaturika/manipulating-the-dom-using-javascript-how-to-select-nodes-part-1-38j
// 

// DOM is basically a tree a nodes
const div1 = document.querySelector(".myClass");
const div2 = document.querySelector("#myId");
const divs = document.querySelectorAll(".myClass"); // this return as many as there are .myClass)
const div4 = document.querySelector(".class2")

// --------------------------createElement
const div3 = document.createElement("div"); // <div></div> to make this be part of the DOM

// --------------------------appendChild
div1.appendChild(div3);
document.body.appendChild(div3)

// --------------------------insertBefore
div1.insertBefore(div3, div4) // insertBefore(new_node to insert, before this reference_node)

// --------------------------CSS
div.style.backgroundColor = "blue"
div.style.cssText = "color: blue; background: white"
div.setAttribute("style", "color: blue; background: white"); // add several style rules

// --------------------------edit Attributes
div.setAttribute("id", "theDiv") // if id exists, update it to "theDiv", else create an id "theDiv"
div.getAttribute("id") // return value of specified attribute, in this case "theDiv"
div.removeAttribute("id") // removes certain specified attribute

// --------------------------add classList
div.classList.add("new") // add class "new" to your new div
div.classList.remove("new") // removes "new" class from div
div.classList.toggle("active") // if div doesn't ahve class "active then add it"
                               // if it does, then removes it

// --------------------------add text and HTML contenct
div.textContent = "Hello Hello" // create a text node containing "Hello Hello", and inserts it in div
div.innerHTML = "<span>HELLO UPPDERCASE</span>" // renders the HTML inside div