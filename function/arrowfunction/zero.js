// const arr=[1,2,0,3,0,4];


const num=(arr)=>{
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            
            arr.splice(i,1);
            arr.push(0);
            
        }


    }
    return arr;
}
 console.log(num([1,0,3,4,0,4,0,5]));
  
            



 
