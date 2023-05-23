let stringsArray = []
const button = document.querySelector('#button')
const inputElement = document.querySelector('#input')
const outputElement = document.querySelector('#text')
const processInput = () => {
    if (inputElement.value.trim() === '') {
        inputElement.value = ''
        return alert('Пустые стороки или пробелы запрещены!')
    }
    stringsArray.push(inputElement.value)
    outputElement.innerHTML = ''
    showArr()
    inputElement.value = ''
}
const showArr = () => {
    stringsArray.forEach((str) => {
        const originalWord = str
        str = str.split('').reverse().join('')
        const liElement = document.createElement('li')
        liElement.textContent = `${originalWord} - ${str}`
        outputElement.appendChild(liElement)
    })
}

window.onkeydown = (event) => {
    if (event.keyCode === 13) {
        processInput()
    }
}

button.onclick = () => processInput()

