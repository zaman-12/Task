const car={
    color:"red",
    born:1999,
    fuel:"petrol",
    company:{
        name:"benz",
    }
};
const StringifiedCar=JSON.stringify(car);
const DeepCAr=JSON.parse(StringifiedCar);
DeepCAr.color="blue";
DeepCAr.company.name="BMW";
console.log("original :",car);
console.log("DeepCopy car :",DeepCAr);

