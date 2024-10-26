const fetchData = new Promise((res, rej) => {
   
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((result)=>{
        res(result);
    })
    .catch((err)=>{
        rej(err);
    })
});
console.log(fetchData);
fetchData
    .then((res)=>{
        console.log(res);
        
    })
    .catch((err)=>{
        console.log(err);
        
    });
