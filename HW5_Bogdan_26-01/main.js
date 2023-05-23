const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return alert('Пустые стороки или пробелы запрещены!')
    }
    const div = document.createElement('div')
    const text = document.createElement('p')
    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delButton')
    editButton.setAttribute('class', 'editButton')
    deleteButton.innerText = 'DELETE'
    editButton.innerText = 'EDIT'
    div.setAttribute('class', 'block_text')
    text.innerText = input.value
    div.append(text, editButton, deleteButton)
    todoList.prepend(div)
    input.value = ''

    deleteButton.onclick = () => div.remove()
    const editTodo = () => {
        const editedText = prompt(`You editing: ${text.innerText}`)
        editedText.trim() === '' ? alert('Пустые строки или пробелы запрещены!') : text.innerText = editedText //тернарный оператор
    }
    editButton.onclick = () => editTodo()
}

createButton.onclick = () => createTodo()

window.onkeydown = (event) => {
    if (event.keyCode === 13) {
        createTodo()
    }
}