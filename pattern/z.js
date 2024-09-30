for(let i=1;i<=5;i++){
    let star="";
    for(let j=1;j<=5;j++){
        if(i===1 || i===5 || j===5-i+1){
            star+="* ";
        }else{
            star+="  "
        }
    }
    console.log(star);
    
}