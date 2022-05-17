function bmiCalculator (weight, height) {
    var bmi = weight/(Math.pow(height, 2));
    var bmiRounded = Math.round(bmi * 10) / 10;
    if (bmiRounded < 18.5) {
        var interpretation = "Your BMI is " + bmiRounded + ", so you are underweight.";
    } else if (bmiRounded >= 18.5 && bmiRounded <=24.9) {
        var interpretation = "Your BMI is " + bmiRounded + ", so you have a normal weight.";
    } else {
        var interpretation = "Your BMI is " + bmiRounded + ", so you are overweight.";
    }
    return interpretation;
}
