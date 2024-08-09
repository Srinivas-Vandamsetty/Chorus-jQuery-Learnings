$(document).ready(function () {
    $('#input').change(function () {
        // Trim whitespace from input
        var input = $(this).val().trim();
        // Check if input is not empty
        if (input !== '') { 
            $('ul').append('<li>' + input + ' <i class="fas fa-check"></i> <i class="fas fa-trash"></i></li>');
            $(this).val('');
        }
    });

    // Event delegation for dynamically added elements
    $('ul').on('click', 'li .fa-check', function () {
        // Toggle 'checked' class
        $(this).parent().toggleClass('checked');
    });

    $('ul').on('click', 'li .fa-trash', function () {
        $(this).parent().fadeOut(200, function () {
            // Remove the list item after fadeout
            $(this).remove();
        });
    });
});
