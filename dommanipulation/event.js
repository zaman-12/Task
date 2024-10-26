const button=document.getElementById("btn");
const container=document.querySelector(".container");
button.addEventListener("click",()=>{
    container.style.cssText="background-color:blue;border:5px solid red"
})
    

container.addEventListener("mouseover",()=>{
    container.style.backgroundColor="red";
});
container.addEventListener("mouseleave",()=>{
    container.style.backgroundColor="blue";
})
