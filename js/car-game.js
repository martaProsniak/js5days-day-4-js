function carGame(selector) {
    const containerElement = document.querySelector(selector)
    const carElement = document.createElement('div')
    const roadElement = document.createElement('div')

    const tickDuration = 10
    const maxAcceleration = 10

    let velocity = 0
    let acceleration = 0
    let position = 0

    function displayCarAndCar() {
        carElement.style.width = '100px'
        carElement.style.height = '100px'
        carElement.style.backgroundColor = 'red'

        carElement.style.position = 'absolute'
        carElement.style.left = position + 'px'

        roadElement.style.backgroundColor = 'grey'
        roadElement.style.width = '100%'
        roadElement.style.height = '100px'
        roadElement.style.position = 'relative'

        roadElement.appendChild(carElement)
        containerElement.appendChild(roadElement)
    }

    function move() {
        const time = tickDuration / 1000

        position = position + velocity * time + ((acceleration * time * time) / 2)
        velocity = velocity + acceleration * time
        carElement.style.left = position + 'px'
    }

    displayCarAndCar();

    setInterval(
        // move instead of move() to pass the whole function into setInterval function
        move,
        tickDuration
    )

    window.addEventListener(
        'keydown',
        function (event) {
            if (event.key === 'a') {
                acceleration = maxAcceleration
            }
            if (event.key === 'b') {
                acceleration = -maxAcceleration
            }
        }
    )

    window.addEventListener(
        'keyup',
        function (event) {
            if (event.key === 'a') {
                acceleration = 0
            }
            if (event.key === 'b') {
                acceleration = 0
            }
        }
    )
}
