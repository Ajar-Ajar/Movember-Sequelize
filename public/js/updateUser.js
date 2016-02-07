$( document ).ready(function() {
    console.log('updateUser.js is ready');

      $( "#deleteUserBtn" ).click(function(event) {

        event.preventDefault();

        console.log("deleteUserBtn clicked");

        bootbox.confirm("Are you sure?", function(result) {
          console.log("Confirm result: "+result);
          if(result){

            var id = $('input[name=user_id]').val();
            console.log('id: '+id);

            $.ajax({  type : 'DELETE',
                      url  : '/api/deleteUser/' + id
                 }).done(function( response ) {
                   console.log('done: '+response);
                   window.location.href = '/users';
                 })
          }
        });

        return false;
      });

});

// Delete User
