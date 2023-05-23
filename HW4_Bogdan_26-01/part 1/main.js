const decrement = document.querySelector('#decrement')
const increment = document.querySelector('#increment')


increment.onclick = () => {
    let counter = document.getElementById("counter")
    let value = Number(counter.innerText)
    if (value >= 0) {
        counter.innerText = value + 1
        counter.style.color = "green"
    }
}

decrement.onclick = () => {
    let counter = document.getElementById("counter")
    let value = Number(counter.innerText)
    if (value > 0) {
        counter.innerText = value - 1
        counter.style.color = "red"
    }
}