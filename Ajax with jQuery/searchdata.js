$(document).ready(function() {
    // Disable AJAX cache to ensure fresh data is fetched on each request
    $.ajaxSetup({ cache: false });

    // Handle keyup event on the search input
    $('#search').keyup(function() {
        let searchField = $(this).val();
        let expression = new RegExp(searchField, "i");

        // Perform AJAX request to fetch data
        $.ajax({
            url: 'https://mocki.io/v1/9f725e1b-1220-4b23-a1b7-b6a97dfb03c2',
            method: 'GET',
            dataType: 'json',
            success: function(response) {
                let items = response.data || [];
                $('#result').empty();

                // Filter items based on the search input and update the results
                $.each(items, function(key, value) {
                    if (value.name && value.city &&
                        (value.name.search(expression) !== -1 || value.city.search(expression) !== -1)) {
                        $('#result').append(`<li class="list-group-item link-class">${value.name} | <span class="text-muted">${value.city}</span></li>`);
                    }
                });
            }
        });
    });

    // Handle click event on search result list items
    $('#result').on('click', 'li', function() {
        // Set the search input value to the clicked item's name
        $('#search').val($(this).text().split('|')[0].trim());
        $("#result").empty();
    });
});
