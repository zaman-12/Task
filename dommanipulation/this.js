// const greet=(arg1,arg2)=>{
//     console.log(this);
    
// }
function greet(param1,param2) {
    console.log(this,param1,param2);
    
    
}
const student={
    name:"Zaman",
    age:24,
};
// call
// greet.call(student,"welcome","back")

// apply
greet.apply(student,["welcome,back"])
