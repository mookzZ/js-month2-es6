const input = document.querySelector('.input')
const text = document.querySelector('.text')

const reverseWord = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return alert('Пустые стороки или пробелы запрещены!')
    }
    text.innerText = input.value.split('').reverse().join('')
    input.value = ''
}

window.onkeydown = (event) => {
    if (event.keyCode === 13) {
        reverseWord()
    }
}