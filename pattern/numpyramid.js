for(let i=1;i<=5;i++){
    let num="";
    for(s=1;s<=5-i;s++){
         num+=" ";

    }
    for(let j=1;j<=i*2-1;j++){
        num+=j;
    }
    console.log(num);
    
}