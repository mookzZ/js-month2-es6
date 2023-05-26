class Component {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
    hide () {
        this.$element.style.display = 'none'
    }
    show () {
        this.$element.style.display = 'flex'
    }
}

class Block extends Component {
    constructor(options) {
        super(options.selector);
        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.backgroundColor = options.bgColor
        this.$element.style.borderRadius = options.borderRadius + '%'
        this.$element.style.marginBottom = options.marginBottom + 'px'
        this.$element.style.border = options.border
        this.$element.innerText = options.text
        this.$element.style.justifyContent = options.justifyContent
        this.$element.style.alignItems = options.alignItems
    }
}

const block1 = new Block({
    selector: '.block1',
    size: 200,
    bgColor: 'red',
    borderRadius: 50,
    marginBottom: 10,
    border: '2px solid black',
    text: 'СТОЙ!',
    justifyContent: 'center',
    alignItems: 'center'
})
const block2 = new Block({
    selector: '.block2',
    size: 200,
    bgColor: 'yellow',
    borderRadius: 50,
    marginBottom: 10,
    border: '2px solid black',
    text: 'ВНИМАНИЕ!',
    justifyContent: 'center',
    alignItems: 'center'
})
const block3 = new Block({
    selector: '.block3',
    size: 200,
    bgColor: 'green',
    borderRadius: 50,
    marginBottom: 10,
    border: '2px solid black',
    text: 'ИДИ!',
    justifyContent: 'center',
    alignItems: 'center',
})

const colors = {
    red: 'красный',
    yellow: 'желтый',
    green: 'зеленый',
}

const trafficLight = () => {
    const inputText = prompt('Введите цвет')
    switch (inputText.trim().toLowerCase()) {
        case colors.red:
            block1.show()
            block2.hide()
            block3.hide()
            break
        case colors.yellow:
            block1.hide()
            block2.show()
            block3.hide()
            break
        case colors.green:
            block1.hide()
            block2.hide()
            block3.show()
            break
        default:
            alert(`Введите правильный цвет: ${colors.red}, ${colors.yellow}, ${colors.green}`)
    }
}

trafficLight()