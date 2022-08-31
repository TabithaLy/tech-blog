// taken from UPENN-VIRT-FSF-FT-07-2022-U-LOLC\14-MVC\01-Activities\28-Stu_Mini-Project\Main\public\js\login.js
// replaced every instance of "email" with "name"
const loginFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the login form
    const name = document.querySelector('#name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (name && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

