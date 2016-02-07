$( document ).ready(function() {
    console.log('addUser.js is ready');
    $( "#addUserBtn" ).click(function() {
       console.log("addUserBtn clicked");
       //TODO client side form validation...
      //  var user = {first_name : $('#fnameInput').val(),
      //              last_name  : $('#lnameInput').val(),
      //              email      : $('#emailInput').val()};
       //
      //  console.log('client user: '+user);
      //
      //  $.post( "/api/addUser",user)
      //      .done(function(data) {
      //        alert( "server sent: " + data );
      //      })
      //      .fail(function() {
      //        alert( "error" );
      //      })
      //  return false;
    });
});
