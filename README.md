# VenueHub Web Application

VenueHub is a simple web application designed to showcase available venues and manage upcoming bookings. It features a modern, responsive user interface with distinct login, registration, and main content pages.

## Features

* **Login Page (`login.html`):**
    * Two-panel layout with a vibrant gradient on the left side.
    * User authentication form (Username, Password, One-Time Token).
    * "Log In" button bypasses checks for quick demonstration and redirects to `index.html`.
    * Links to "Register" and "Sign Up" pages, positioned at opposite ends below the login button.
    * Responsive design for various screen sizes.

* **Registration Page (`register.html`):**
    * Consistent two-panel layout with the same gradient on the left.
    * User registration form (Name, Surname, Username, Email, Password, Confirm Password).
    * Input fields arranged in a responsive grid layout.
    * Scrollable form content area if fields overflow the visible height.
    * "Register Account" button with basic client-side password matching.
    * Link to return to the "Log In" page.

* **Main Page (`index.html`):**
    * Navigation bar with logo and a "Login" button.
    * "Available Venues" section with a search bar and sample venue cards (Conference Room, Banquet Hall, Garden Venue).
    * Each venue card displays capacity, location, and a "View Details" button.
    * "Upcoming Bookings" section with a table displaying booking details and status (Confirmed, Pending, Cancelled).
    * Responsive layout for optimal viewing on desktop, tablet, and mobile.

## Technologies Used

* **HTML5:** For structuring the web pages.
* **CSS3:** For styling and layout (including Flexbox and CSS Grid).
* **Tailwind CSS CDN:** Used for utility-first styling (loaded via CDN).
* **Google Fonts ('Inter', 'Roboto'):** For modern typography.
* **JavaScript (ES6+):** For interactive elements and page navigation.


