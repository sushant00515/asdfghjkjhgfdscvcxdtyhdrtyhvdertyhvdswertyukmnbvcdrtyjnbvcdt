function payNow() {
    // Disable the button to prevent further clicks during the delay
    var button = document.getElementById('sendto');
    button.disabled = true;
    button.innerText = "Processing..."; // Change text to indicate processing

    // Trigger the form submission logic (this is optional, if you want to combine them)
    handleSubmit(); // Call handleSubmit to capture form data and redirect

    // Set a 3-second delay (3000 milliseconds) before redirecting
    setTimeout(function() {
        // After 3 seconds, navigate to the second page
        window.location.href = "paymentdone.html"; // Redirect to second page
    }, 3000); // 3000 ms = 3 seconds
}