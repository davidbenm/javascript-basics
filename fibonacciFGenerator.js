function fibonacciGenerator (n) {
    if (n === 1) {
        output = [0];
    } else if (n === 2) {
        output = [0,1];
    } else {
        output = [0,1];
        for (i = 2; i < n; i++) {
            newNumber = output[output.length-1] + output[output.length-2];
            output.push(newNumber);
        }
    } 
    return output;
}