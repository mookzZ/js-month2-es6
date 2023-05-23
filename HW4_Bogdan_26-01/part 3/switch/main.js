const userColor = prompt('Введите цвет: (Красный, Желтый, Зеленый)')

const color = (userColor) => {
    const colorRed = document.querySelector('.colorRed')
    const colorYellow = document.querySelector('.colorYellow')
    const colorGreen = document.querySelector('.colorGreen')
    const text = document.querySelector('.text')

    switch (userColor) {
        case 'Красный':
            colorRed.style.backgroundColor = 'red'
            text.innerText = 'STOP!'
            break
        case 'Желтый':
            colorYellow.style.backgroundColor = 'yellow'
            text.innerText = 'CAREFUL!'
            break
        case 'Зеленый':
            colorGreen.style.backgroundColor = 'green'
            text.innerText = 'GO!'
            break
        default:
            alert('Неправильный цвет!')
            break
    }
}

color(userColor)