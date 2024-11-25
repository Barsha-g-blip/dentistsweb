// Handling Contact Form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Log the details in the console
    console.log("Form Submission Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Optionally, you could add logic to send this data to a backend or alert user about the submission
    alert("Thank you for reaching out! Your message has been submitted.");
});
