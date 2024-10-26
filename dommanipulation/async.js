async function fetchData() {
    const response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const result=await response.json();
    console.log(result);
    

    
}
fetchData()