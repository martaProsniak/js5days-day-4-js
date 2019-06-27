function carGame(selector) {
    const containerElement = document.querySelector(selector)
    const carElement = document.createElement('div')
    const roadElement = document.createElement('div')

    const tickDuration = 10
    const maxAcceleration = 10

    let velocity = 0
    let acceleration = 0
    let position = 0

    function setElementsStyle() {

        carElement.style.width = '70px'
        carElement.style.height = '70px'
        carElement.style.top = '50%'
        carElement.style.transform = 'translateY(-50%) rotate(180deg)'
        carElement.style.position = 'absolute'
        carElement.style.left = position + 'px'
        carElement.style.backgroundColor = 'transparent'
        carElement.style.backgroundRepeat = 'no-repeat'
        carElement.style.backgroundSize = 'contain'
        carElement.style.backgroundPosition = 'center center'
        carElement.style.backgroundImage = 'url(../img/car.png)'


        roadElement.style.position = 'relative'
        roadElement.style.height = '200px'
        roadElement.style.width = '100%'
        roadElement.style.backgroundRepeat = 'repeat-x'
        roadElement.style.backgroundSize = 'contain'
        roadElement.style.backgroundColor = 'grey'
        roadElement.style.backgroundImage = 'url(../img/road.png)'

        roadElement.appendChild(carElement)
        containerElement.appendChild(roadElement)
    }

    function move() {
        const time = tickDuration / 1000

        position = position + velocity * time + ((acceleration * time * time) / 2)
        velocity = velocity + acceleration * time
        carElement.style.left = position + 'px'

        checkCarPosition()
    }
    
    function checkCarPosition(){
        const roadRightEnd = roadElement.getBoundingClientRect().right
        const roadLeftEnd = roadElement.getBoundingClientRect().left
        const carFront = carElement.getBoundingClientRect().right
        const carBack = carElement.getBoundingClientRect().left

        if ( carFront >= roadRightEnd){
            const carOfTheRoad = carFront - roadRightEnd
            carElement.style.clip = 'rect(0px, 100px, 100px, ' + carOfTheRoad + 'px)'
        }

        if (carBack < roadLeftEnd) {
            const carOfTheRoad = (carFront - carBack) - (roadLeftEnd - carBack)
            carElement.style.clip = 'rect(0px, ' + carOfTheRoad + 'px, 100px, 0px)'
        }
    }

    setElementsStyle();

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
