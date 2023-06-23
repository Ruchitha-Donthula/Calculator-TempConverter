function button() {
    let first = document.getElementById("firstnumber");
    let firstnumber = parseFloat(first.value);
    let second = document.getElementById("secondnumber");
    let secondnumber = parseFloat(second.value);
    let operation = document.getElementById("operation").value;
    let text = document.getElementById("errorMessage");
    let result;

    if (isNaN(firstnumber) || isNaN(secondnumber)) {
        text.textContent = "Enter valid numbers.";
    } else {
        switch (operation) {
            case "+":
                result = firstnumber + secondnumber;
                break;
            case "-":
                result = firstnumber - secondnumber;
                break;
            case "*":
                result = firstnumber * secondnumber;
                break;
            case "/":
                result = firstnumber / secondnumber;
                break;
            default:
                
                text.textContent = "Invalid operation.😔";
                text.style.fontSize="25px";
                return;
        }
        text.textContent = "";
        document.getElementById("totalAmount").value = result;
        text.textContent = "valid operation.😃"
        text.style.color="green";
        text.style.fontSize="25px";
    }
}
