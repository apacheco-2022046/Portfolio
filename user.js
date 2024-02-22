
//ASYNC/AWAIT
const getUserWithAsync = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10')
        const { results } = await response.json()   //Desestructuro y lo parseo .
        const users = document.getElementById('users')
        for (const user of results) {
            users.innerHTML  += `
                <tr>
                    <td>${user.name.first}</td>
                    <td>${user.name.last}</td>
                    <td>${user.phone}</td>
                </tr>
            `
        }
    } catch (error) {
        console.error(error)
    }
}



getUserWithAsync()
