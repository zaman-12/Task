const arr=[1,2,1,5,4,3,2,4];
const duplicate=(arr)=>{
    let duplicatearr=[];
    let index=0;
    for(let i=0;i<arr.length;i++){
        let flag="false";

        for(j=i+1;j<duplicatearr.length;j++){
            
            if(arr[i]===duplicatearr[j]){
                false="true";
                //  arr.splice(j,1);
            }
        
        }
    
    
    }
    return duplicatearr;
}
console.log(duplicate(arr));
