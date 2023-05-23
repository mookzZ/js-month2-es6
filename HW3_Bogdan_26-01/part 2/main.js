const calculate = (num1, operator, num2) => {
    if (operator === '+') {
        return console.log(num1 + num2)
    } else if (operator === '-') {
        return console.log(num1 - num2)
    } else if (operator === '*') {
        return console.log(num1 * num2)
    } else if (operator === '/') {
        return console.log(num1 / num2)
    } else {
        return console.log(operator, '- недействительный оператор. Выполнить действие невозможно. Используйте +, -, *, /')
    }
}

calculate(40, '+', 2)
calculate(52, '-', 12)
calculate(30, '/', 3)
calculate(23, '*', 10)
calculate(10, 'l', 44) // wrong operator 