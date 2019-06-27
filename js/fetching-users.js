(function () {

    const mainContainerElement = document.querySelector('.fetching-users')

    function renderListItem(name, img) {
        const containerElement = document.createElement('div')
        const imgElement = document.createElement('img')
        const nameElement = document.createElement('p')

        containerElement.style.display = 'flex'
        imgElement.style.borderRadius = '50%'
        imgElement.style.width = '50px'
        imgElement.style.height = '50px'
        imgElement.style.margin = '10px'
        imgElement.setAttribute('src', img)

        nameElement.innerText = name // !overrides old html value
        
        containerElement.appendChild(imgElement)
        containerElement.appendChild(nameElement)

        return containerElement
    }

    function render() {
        // render all elements
        const item = renderListItem('Mateusz Choma', 'https://randomuser.me/api/portraits/women/52.jpg')

        mainContainerElement.appendChild(item)
    }

    render()

})()