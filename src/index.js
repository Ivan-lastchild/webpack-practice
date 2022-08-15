import showUsers from "./data"

const listOfUser = document.querySelector(".users");

function renderUsers(arr){
    for (let user of arr) {
        const {id, name, age, email, country, company, birthday } = user
        listOfUser.innerHTML += `<li> id:${id} <br> name:${name} <br> age:${age} <br> email:${email} <br> country:${country} <br> compeny:${company} <br> birthday:${birthday}</li>`
    }
}

renderUsers(showUsers)