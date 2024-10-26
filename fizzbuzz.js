const num = 100;
const fizzbuzz = (num) => {
    for (i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log("fizzbuz");

            } else {
                console.log("buzz");
            }
        }
        else if (i % 5 === 0) {
            console.log("fizzbuzz");

        }
        else {
            console.log("fizz");

        }

    }
}
fizzbuzz(num)

