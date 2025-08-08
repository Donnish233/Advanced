let userList = document.getElementById("user-list");
let errMsg = document.getElementById("errMsg");

const API_URL = "https://jsonplaceholder.typicode.com/users";

function getUsers() {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((user) => {
                let userDiv = document.createElement("div");
                userDiv.classList.add("user");
                userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                `;
                userList.appendChild(userDiv);
            });
        })
        .catch((error) => {
            console.error("Error:", error);
            errMsg.style.display("block");
        });
}
addEventListener('click')