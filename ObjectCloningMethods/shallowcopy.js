const car={
    color:"red",
    born:1999,
    fuel:"petrol",
    company:{
        name:"benz",
    }
};
const newCar={...car};
newCar.color="blue";
newCar.company.name="BMW";
console.log("shallowcopy :",newCar);
console.log("original :",car);


