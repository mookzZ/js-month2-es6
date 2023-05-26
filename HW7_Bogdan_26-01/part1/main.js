class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start() {
        console.log('Машина заведена!')
    }
}

class Suv extends Cars {
    constructor(options) {
        super(options);
        this.clearance = options.clearance
    }
}

class Limousine extends Cars {
    constructor(options) {
        super(options);
        this.length = options.length
    }
}

class Sport extends Cars {
    constructor(options) {
        super(options);
        this.speed = options.speed
    }
}

const dadsCar = new Suv ({
    model: 'Toyota RAV4',
    color: 'grey',
    wheels: 4,
    clearance: '195mm',
})
const friendsCar = new Limousine ({
    model: 'Lincoln Town Car Excalibur',
    color: 'white',
    wheels: 6,
    length: '9m'
})
const momsCar = new Sport ({
    model: 'Porsche 911',
    color: 'darkred',
    wheels: 4,
    speed: 330,
})
