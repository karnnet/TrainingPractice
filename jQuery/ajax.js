// $(() => {
//     $.ajax({
//         type: 'GET',
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         success: function(data) {
//             console.log(data);
//         },
//         error: function() {
//             console.log('error');
//         },
//         complete: function() {
//             console.log('complete');
//         }
//     });

// });



$(() => {
    $.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
        console.log(data);
        $.get('https://jsonplaceholder.typicode.com/posts/' + data[2].id).then(function(response) {
            console.log(response);
        });

    });

});