const arr=[6,4,8,7,3,2,1];
    
const sortedArr=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
       
    }
    return arr;
}
console.log(sortedArr(arr));
