const userColor = prompt('Введите цвет: (Красный, Желтый, Зеленый)')

const color = (userColor) => {
    const colorRed = document.querySelector('.colorRed')
    const colorYellow = document.querySelector('.colorYellow')
    const colorGreen = document.querySelector('.colorGreen')
    const text = document.querySelector('.text')

    if (userColor === 'Красный') {
        colorRed.style.backgroundColor = 'red'
        text.innerText = 'STOP!'
    } else if (userColor === 'Желтый') {
        colorYellow.style.backgroundColor = 'yellow'
        text.innerText = 'CAREFUL!'
    } else if (userColor === 'Зеленый') {
        colorGreen.style.backgroundColor = 'green'
        text.innerText = 'GO!'
    } else {
        alert('Неправильный цвет!')
    }
}

color(userColor)