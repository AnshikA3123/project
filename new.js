document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const password = form.querySelector('input[type="password"]');
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1];
    
    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match!');
        return;
    }
    
    // Add your registration logic here
    console.log('Form submitted successfully');
});