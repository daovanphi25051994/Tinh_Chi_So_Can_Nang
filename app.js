function showResult() {
    let height = parseFloat( document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let bmi = weight / (height * height);
    let messageResult = "";
    if (bmi < 18){
        messageResult = "Underweight";
    }else if(bmi < 25){
        messageResult = "Normal";
    }else if (bmi < 30){
        messageResult = "Overweight";
    }else {
        messageResult = "Obese"
    }
    document.getElementById("result").innerHTML = "Result: " + bmi + "   " +messageResult;

}