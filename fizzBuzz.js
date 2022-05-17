var output = [];
for (i = 1; i < 101; i++) {
    if (i%3 === 0) {
        if (i%5 === 0) {
            output.push("FizzBuzz");
        } else {
            output.push("Fizz");
        }
    } else if (i%5 === 0) {
        output.push("Buzz");
    } else{
        output.push(i);
    }
}
console.log(output);