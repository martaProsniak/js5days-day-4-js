(function () {

    const mainContainerElement = document.querySelector('.fetching-users')

    const numberOfUsers = 5

    let users = []

    function fetchUsers() {
        fetch('https://randomuser.me/api/?results=' + numberOfUsers)
            .then((response) => response.json())
            .then((usersFromApi) => {
                users = usersFromApi.results
                render()
            })
            .catch((err) => console.log('Error!'))
    }

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

    function renderList() {
        for (let i = 0; i < users.length; i++) {
            const user = users[i]

            const firstName = user.name.first
            const lastName = user.name.last
            const name = firstName + ' ' + lastName
            const img = user.picture.thumbnail

            const item = renderListItem(name, img)

            mainContainerElement.appendChild(item)
        }
    }

    function render() {
        renderList()
    }

    fetchUsers()
    render()

})()