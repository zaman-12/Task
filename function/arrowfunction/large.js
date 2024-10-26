const large=(a)=>{
    let large=a[0];
    for(i=0;i<a.length;i++){
        
        if(a[i]>large){
             large=a[i];
        }
    }
    return large
    
}
console.log(large([12,13,100,14,16,18]));
