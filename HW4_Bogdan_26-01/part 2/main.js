const button = document.querySelector('.btn')

button.onclick = () => {
    const text = document.querySelector('.text')
    text.innerText = prompt('Что вывести?')
}
