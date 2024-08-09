$(document).ready(function() {
    $('#exampleForm').submit(function(event) {
        event.preventDefault();

        // Get the form data
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var age = $('#age').val();
        var gender = $('#gender').val();

        // Simple validation
        if (name === '' || email === '' || phone === '' || age === '' || gender === '') {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Phone number validation (example: must be 10 digits)
        var phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid phone number (10 digits)');
            return;
        }

        // Age validation (example: must be between 1 and 120)
        var ageNumber = parseInt(age, 10);
        if (isNaN(ageNumber) || ageNumber < 1 || ageNumber > 120) {
            alert('Please enter a valid age (between 1 and 120)');
            return;
        }

        // Display the result
        $('#result').html('<p>Name: ' + name + '</p><p>Email: ' + email + '</p><p>Phone: ' + phone + '</p><p>Age: ' + age + '</p><p>Gender: ' + gender + '</p>');

        // Clear the form fields
        $('#name').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#age').val('');
        $('#gender').val('');
    });
});
