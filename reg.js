// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    
    // Get the form and elements
    const form = document.querySelector("form");
    const passwordField = document.querySelector("input[name='password']");
    const confirmPasswordField = document.querySelector("input[name='confirm_password']");
    const registerButton = document.querySelector(".register-btn");
    
    // Form submission handler
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form field values
        const studentId = document.querySelector("input[name='student_id']").value;
        const department = document.querySelector("input[name='department']").value;
        const year = document.querySelector("input[name='year']").value;
        const semester = document.querySelector("input[name='semester']").value;
        const mobile = document.querySelector("input[name='mobile']").value;
        const email = document.querySelector("input[name='email']").value;
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;
        
        // Validate if all fields are filled
        if (!studentId || !department || !year || !semester || !mobile || !email || !password || !confirmPassword) {
            alert("Please fill out all fields.");
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Check if password length is sufficient
        if (password.length < 6) {
            alert("Password should be at least 6 characters long.");
            return;
        }

        // Display success message (simulating successful registration)
        alert("Registration successful! Redirecting to the login page...");
        
        // Redirect to the login page after successful registration
        window.location.href = "Log.html"; // Change this URL as needed
    });
});
