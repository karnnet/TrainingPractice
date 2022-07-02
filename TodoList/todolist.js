$(() => {
    var liClicked;
    $('.button').on('click', function() {
        var value = $('#input').val();
        var buttonText = $('.button').text();
        if (buttonText == 'Add') {
            if (value == '') {
                alert('field is empty');
                return;
            }

            $('ul').append(`<li>${value}</li>`);
        } else {
            liClicked.text(value);
        }
        $('#input').val(''); // After append the data and clear input box.
        $('.button').text('Add');
        liClicked = '';
    });
    $('.listitems').on('click', 'li', function() {
        liClicked = $(this);
        $('#input').val(liClicked.text());
        $('.button').text('Update');
    });
});