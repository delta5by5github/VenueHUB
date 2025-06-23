document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const firstName = document.getElementById('firstName').value;
            const surname = document.getElementById('surname').value;
            const username = document.getElementById('regUsername').value;
            const email = document.getElementById('regEmail').value;
            const password = document.getElementById('regPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            console.log('Registration Attempt:');
            console.log('Name(s):', firstName);
            console.log('Surname:', surname);
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password ? '********' : ''); // Mask password
            console.log('Confirm Password:', confirmPassword ? '********' : ''); // Mask password

            if (password !== confirmPassword) {
                alert('Passwords do not match! Please re-enter.');
                return; // Stop form submission
            }

            // Here, you would typically send this data to your server for actual registration.
            // For this simulation, we'll just show an alert and redirect.
            alert('Registration successful! Redirecting to login page.');
            window.location.href = 'login.html'; // Redirect to the login page after successful registration
        });
    }
});
