const row=5;
for(let i=1;i<=row;i++){
    let star="";
   
    for(let j=1;j<=i;j++){
        star+="*";
    }
       for(let s=1;s<=2*row-(2*i);s++){
        star+=" ";
       }
       for(let j=1;j<=i;j++){
        star+="*";
       }
        
        

        
        console.log(star);
    }
        for(let i=row-1;i>=1;i--){
            let star="";
            for(j=1;j<=i;j++){
                star+="*";
            }
            for(let s=1;s<=2*row-(2*i);s++){
                star+=" "
            }
            for(let j=1;j<=i;j++){
                star+="*"
            }
            console.log(star);
            
        }
   
   

       
    
    