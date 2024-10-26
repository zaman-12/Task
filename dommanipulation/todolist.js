
const container=document.getElementById("container");
const input=document.getElementById("input");
const button=document.getElementById("btn");
container.style.cssText="padding:20px;border:2px solid #4CAF50;background-color:#f2f2f2;margin-left:30%;width:550px;height:500px;box-shadow:0 0 10px rgba(0,0,0,0.5);background-image:linear-gradient(to bottom,#33ccff,#ff99cc);transition:border-color 0.5s;border-color:#3e8e41;"
// const contact=document.getElementById("input1");
button.style.cssText="background-color:#3e8e41;color:#fff;border:none;padding:10px 20px;font-size:16px;font-weight:bold;border-radius:5px;box-shadow:0 2px 4px rgba(0,0,0,0.2);transition:background-color 0.3s;margin:300px 240px;cursor:pointer;"





button.addEventListener("click", ()=>{
    const text=input.value;
    const li=document.createElement("li");
    const update=document.createElement("button");
    update.textContent="Update Your Name";
    const removebutton=document.createElement("button");
    removebutton.textContent="remove";
    
    // const newmessage=document.createElement("p");
    // newmessage.textContent="Updated successfully";
    // const message=document.createElement("p");
    // message.textContent="Deleted Successfully";
   
   
    button.remove();
    input.remove();
    
    
 
    
        
        
    removebutton.addEventListener("click", ()=>{
        button.textContent="create";
        container.append(input,button);
    
        
       
        li.remove();
        removebutton.remove();
       
        
        update.remove();
        // newmessage.remove();
        
        
        
        
       

        
    });
    update.addEventListener("click", ()=>{
      
        button.textContent="update";
        
    
        
       
        container.append(input,button);
        
        removebutton.remove();
        update.remove();
        li.remove();
        
        
    })
    
    li.textContent=text;


    
    container.append(li,removebutton,update);
    input.value="";
});

