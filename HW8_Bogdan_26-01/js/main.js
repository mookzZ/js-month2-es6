const canvas = document.querySelector('#game')
const ctx = canvas.getContext('2d')

const ground = new Image()
ground.src = 'images/ground.png'

const foodImages = [
    'images/apple.png',
    'images/banana.png',
    'images/carrot.png',
    'images/pear.png',
    'images/strawberry.png',
    'images/tomato.png',
]

const randomFoodIndex = Math.floor(Math.random() * foodImages.length)

const foodImg = new Image()
foodImg.src = foodImages[randomFoodIndex]

let box = 32
let score = 0

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box,
}

let snake = []

snake[0] = {
    x: 9 * box,
    y: 10 * box
}

document.addEventListener('keydown', direction)

let dir

function direction (event) {
    if (event.keyCode === 37 && dir !== 'right') dir = 'left'
    else if (event.keyCode === 38 && dir !== 'down') dir = 'up'
    else if (event.keyCode === 39 && dir !== 'left') dir = 'right'
    else if (event.keyCode === 40 && dir !== 'up') dir = 'down'
}

function eatTail (head, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (head.x === arr[i].x && head.y === arr[i].y) {
            clearInterval(game)
            setModel()
        }
    }
}

function setModel () {
    const div = document.createElement('div')
    div.setAttribute('class', 'modal')
    document.body.append(div)
    const lose = document.createElement('h2')
    const points = document.createElement('span')
    const playAgain = document.createElement('button')
    lose.setAttribute('class', 'game-over')
    points.setAttribute('class', 'points')
    playAgain.setAttribute('class', 'play-again-button')
    lose.innerText = 'GAME OVER'
    points.innerText = `Your score: ${score}`
    playAgain.innerText = 'RETRY'
    div.append(lose, points, playAgain)
    playAgain.onclick = () => {
        location.reload()
    }
}

function generateFoodCoordinates() {
    let newFoodX, newFoodY;
    let foodCollision;

    do {
        newFoodX = Math.floor(Math.random() * 17 + 1) * box;
        newFoodY = Math.floor(Math.random() * 15 + 3) * box;

        foodCollision = snake.some((segment) => {
            return segment.x === newFoodX && segment.y === newFoodY;
        });
    } while (foodCollision);

    return {
        x: newFoodX,
        y: newFoodY
    };
}

function changeFoodImage() {
    const randomFoodIndex = Math.floor(Math.random() * foodImages.length)
    foodImg.src = foodImages[randomFoodIndex]
    food = generateFoodCoordinates()
}

function drawGame () {
    ctx.drawImage(ground, 0, 0)
    ctx.drawImage(foodImg, food.x, food.y)

    ctx.fillStyle = 'white'
    ctx.font = '50px Arial'
    ctx.fillText(score, box * 2.5, box * 1.7)

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? 'green' : 'red'
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
    }

    if (snakeX === food.x && snakeY === food.y) {
        score++
        changeFoodImage()
        food = {
            x: Math.floor(Math.random() * 17 + 1) * box,
            y: Math.floor(Math.random() * 15 + 3) * box,
        }
    } else {
        snake.pop()
    }

    if (snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17) {
        clearInterval(game)
        setModel()
    }

    if (dir === 'left') snakeX -= box
    if (dir === 'right') snakeX += box
    if (dir === 'up') snakeY-= box
    if (dir === 'down') snakeY += box

    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    eatTail(newHead, snake)

    snake.unshift(newHead)
}

let game = setInterval(drawGame, 50)