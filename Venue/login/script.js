// This file handles the interactive functionality for the login page.

document.addEventListener('DOMContentLoaded', () => {
    // Get the login form element
    const loginForm = document.querySelector('form');

    // Check if the login form exists on the page
    if (loginForm) {
        // Add a submit event listener to the form
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            // --- BYPASSING LOGIN CHECKS ---
            // For demonstration purposes, we are directly redirecting to index.html.
            // In a real application, you would perform authentication (e.g., send data to a server)
            // and only redirect AFTER successful validation.

            console.log('Login button clicked. Bypassing checks and redirecting to index.html...');
            
            // Immediately redirect to index.html, accounting for it being one level up
            window.location.href = '../index.html'; // Changed path here

            // Optional: If you still want to see the values that were entered for debugging, uncomment these:
            // const username = document.getElementById('username').value;
            // const password = document.getElementById('password').value;
            // const oneTimeToken = document.getElementById('one-time-token').value;
            // console.log('Username (bypassed):', username);
            // console.log('Password (bypassed):', password ? '********' : '');
            // console.log('One-Time Token (bypassed):', oneTimeToken || '[Not provided]');
        });
    }
});
