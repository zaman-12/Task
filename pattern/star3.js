const row = 5;

for(i=1;i<=row;i++){
    let star="";
    for(s=1;s<=row-i;s++){
        star+=" ";

    }
    for(j=1;j<=i;j++){
        star+="*";
    }
console.log(star);

}
