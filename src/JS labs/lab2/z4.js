function calculate(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log('Ошибка: деление на ноль');
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log('Ошибка: неизвестный оператор');
            return;
    }
    console.log(result.toFixed(2));
}

calculate(5, '+', 10);     // 15.00
calculate(25.5, '-', 3);      // 22.50

