const divElement=document.getElementsByClassName("container")
// const elements=document.getElementsByClassName("container")
// const elements=document.getElementsByTagName("div")
// const divElement=elements[0];
// const element1=document.querySelector("div")
// const element2=document.querySelectorAll(".container")
// const element3=document.querySelector("#main")
const elements=document.querySelector("div")
const h1Element=document.getElementById("main")
h1Element.style.backgroundColor="red";
const newPElement=document.createElement("p");
newPElement.innerHTML="<b>hellooo</b>";
newPElement.innerText="hellooo";
newPElement.className="bgcolor";
const newLiElement=document.createElement("li");
// document.body.appendChild(newPElement)
divElement.append(newPElement,newLiElement);
// remove element from dom
divElement.remove()

