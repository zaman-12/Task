const count = (a) => {
    let oddcount = 0;
    let evencount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {

            oddcount++

        } else {
            evencount++

        }

    }
    return {
        oddcount, evencount
    }



}
console.log(count([1, 2, 3, 4, 5]));




