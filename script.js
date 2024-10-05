async function fetchUserData() {
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const errorMessageElement = document.getElementById('errorMessage');
    
    nameElement.innerText = '';
    emailElement.innerText = '';
    errorMessageElement.innerText = '';

    try {
        const response = await fetch('https://randomuser.me/api/');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const user = data.results[0];
        const userName = `${user.name.first} ${user.name.last}`;
        const userEmail = user.email;

        nameElement.innerText = `Name: ${userName}`;
        emailElement.innerText = `Email: ${userEmail}`;
    } catch (error) {
        errorMessageElement.innerText = `Error fetching user data: ${error.message}`;
    }
}

document.getElementById('fetchUserBtn').addEventListener('click', fetchUserData);
