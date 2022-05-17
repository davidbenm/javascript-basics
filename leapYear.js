function isLeap(year) {
    var answer;
    answer = "Leap year.";
    answer = "Not leap year.";
    if (year%4 !== 0) {
        answer = "Not leap year.";
    } else if (year%100 !== 0) {
        answer = "Leap year.";
    } else if (year%400 !== 0) {
        answer = "Not leap year.";
    } else {
        answer = "Leap year.";
    }
    return answer;
}