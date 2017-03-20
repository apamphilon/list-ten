function mailinglist() {
  var email = document.getElementById('js-mailinglist-email').value;
  var dataString = 'u_email=' + email;
  var emailThanks = $('#js-mailinglist-thanks');
  var emailSubmit = $('#js-mailinglist-submit');
  var emailInput = $('#js-mailinglist-email');

  function error() {
    $(emailInput).addClass('error');
    $(emailSubmit).addClass('error');
  }

  function success() {
    $(emailInput).addClass('success');
    $(emailSubmit).addClass('success');
  }

  if (email === '' || email.indexOf('@') === -1) {
    error();
  } else {
    success();

    setTimeout(function() {
      // AJAX code to submit form.
      $.ajax({
        type: "POST",
        url: "mailinglist/processing.php",
        data: dataString,
        cache: false,
        success: function() {
          $('#js-mailinglist-form').remove();
          emailThanks.fadeIn(1000);
        }
      });
    }, 1000)
  }
  return false;
}

$('#js-mailinglist-submit').on('click', function(e) {
  e.preventDefault();
  mailinglist();
});
