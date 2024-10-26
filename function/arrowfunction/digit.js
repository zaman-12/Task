


const digit=(a)=>{
    let sum=0;
    while(a>0){
        let digit=a%10;
        
        a=(a-digit)/10;
       
        sum+=digit,a
    }
    return sum;
}   
    

console.log(digit(98));
