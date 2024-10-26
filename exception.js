console.log("first");
try{
    const a=5;
    if(a<10){
        throw new Error("a is smaller");
        
    }
} catch(error){
    console.log("error :",error.message);
    
}finally{
    console.log("Execution ended");
    
}
console.log("second");


