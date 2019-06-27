(function () {
    const containerElement = document.querySelector('[data-game="gravity"]') // search by attribute
    const planetElement = document.createElement('div')
    const alienElement = document.createElement('div')

    const earthGravityAcceleration = -9.81 //in meters per second
    const initialVelocity = 7 //in meters per second
    const tickDuration = 10 //in miliseconds
    const pixelsPerMeter = 25 //ratio

    let position = 0
    let velocity = 0

    function displayAlienAndPlanet() {
        alienElement.style.width = '50px'
        alienElement.style.height = '50px'
        alienElement.style.backgroundColor = 'green'

        alienElement.style.position = 'absolute'
        alienElement.style.left = '50%'
        alienElement.style.bottom = position + 'px'
        alienElement.style.transform = 'translateX(-50%)' // centralization

        planetElement.style.backgroundColor = 'grey'
        planetElement.style.width = '100%'
        planetElement.style.height = '300px'
        planetElement.style.position = 'relative'

        planetElement.appendChild(alienElement)
        containerElement.appendChild(planetElement)
    }

    displayAlienAndPlanet();

    setInterval(
        jump,
        tickDuration
    )

    window.addEventListener(
        'keydown',
        function (event) {
            if (event.key === ' ' && position === 0) {
                    velocity = initialVelocity * pixelsPerMeter
            }
        }
    )

    function jump() {
        const time = tickDuration / 1000 // miliseconds to seconds
        const gravity = earthGravityAcceleration * pixelsPerMeter
        
        const newPosition = position + velocity * time + ((gravity * time * time) / 2)
        const newVelocity = velocity + gravity * time

        position = Math.max(0, newPosition)
        velocity = position === 0 ? 0 : newVelocity

        alienElement.style.bottom = position + 'px'
        // console.log(position, velocity)
    }

})()
