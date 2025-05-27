function subtract() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const resultDiv = document.getElementById('result');
    const result = firstNumber - secondNumber;
    resultDiv.textContent = result;
}
document.getElementById('firstNumber').addEventListener('input', subtract);
document.getElementById('secondNumber').addEventListener('input', subtract);