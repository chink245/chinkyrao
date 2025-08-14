const API_URL = "https://jsonplaceholder.typicode.com/users";
const userContainer = document.getElementById("user-container");

async function fetchUsers() {
    userContainer.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        displayUsers(users);
    } 
    catch (error) {
        userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

function displayUsers(users) {
    userContainer.innerHTML = ""; 
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userCard);
    });
}

fetchUsers();
