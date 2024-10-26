const button=document.getElementById("btn");
const container=document.querySelector(".container");
button.addEventListener("click",()=>{
    let myREquest=new XMLHttpRequest();
    //configure
    myREquest.open("GET","https://jsonplaceholder.typicode.com/posts");
    //send frequest over network
    myREquest.send();
    //this will be called after the responce is recieved
    myREquest.onload=function(){
        if(myREquest.status!=200){
            //analyse http response
            console.log(`Error ${myREquest.status}:${myREquest.statusText}`);
            
        }else{
            //show the result
            console.log(JSON.parse(myREquest.response));
            const result=JSON.parse(myREquest.response);
            result.map((item,i)=>{
                const li=document.createElement("li");
                li.textContent=item.title;
                li.style.color="blue";
                li.style.cssText="padding:5px;background-color:yellow;color:blue;border-bottom:1px solid black";
                container.append(li);
                
            })
            
        }
    }

})
