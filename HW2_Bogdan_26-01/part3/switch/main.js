const obj = {
    red: 'красный',
    yellow: 'желтый',
    green: 'зеленый'
}

const color = prompt("цвет????")

switch (color) {
    case obj.red:
        alert("стоп")
        break
    case obj.yellow:
        alert("внимание")
        break
    case obj.green:
        alert('иди')
        break
    default:
        alert('выбери цвет: красный, желтый, зеленый')
        break
}