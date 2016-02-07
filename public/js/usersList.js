$( document ).ready(function() {

    console.log('usersList.js is ready');

    $('.tableRow').click(function() {

       console.log("row was clicked");

       var id = $(this).data('id');
       console.log(id);

       window.location.href = "/users/edit/"+id;

    });
});
