// Dummy credentials for validation
const validEmail = "user@example.com";
const validPassword = "password123";

// Get form and error message element
const form = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Handle form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values from the form inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validate the login credentials
  if (email === validEmail && password === validPassword) {
    // Redirect to the main page if credentials are correct
    window.location.href = 'main.html'; // Redirect to main page
  } else {
    // Show an error message if credentials are incorrect
    errorMessage.textContent = 'Invalid email or password';
  }
});
