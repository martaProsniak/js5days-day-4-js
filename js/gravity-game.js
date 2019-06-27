const earthGravityAcceleration = -9.81

const containerElement = document.querySelector('.gravity-game')
const planetElement = document.createElement('div')
const alienElement = document.createElement('div')

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