const obj = {
    red: 'красный',
    yellow: 'желтый',
    green: 'зеленый'
}

const color = prompt("цвет????")

if (color === obj.red) {
    alert('стой')
} else if (color === obj.yellow) {
    alert('внимание')
} else if (color === obj.green) {
    alert('Иди')
} else {
    alert('Выбери цвет: красный, желтый, зеленый')
}
