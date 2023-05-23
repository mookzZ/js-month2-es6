const rate =  Number(prompt('Пожалуйста, оцените качество обслуживания от 1 до 10:'))
if (rate >= 5 && rate <=10) {
    console.log('Спасибо за высокую оценку!')
} else if (rate < 5 && rate >= 1) {
    console.log('Мы рабоатем над улучшением сервиса!')
} else {
    console.log('Пожалуйста выберите оценку от 1 до 10.')
}