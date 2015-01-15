$(document).ready(function() {

  $('.box').click(function() {
    if ($(this).data().clicked === true) {
      $(this).removeAttr('style');
      $(this).data('clicked', false);
    }

    else {
      var newBackground = $(this).css('color');
      var newText = $(this).css('background-color');

      $(this).data('clicked', true);
      $(this).css('background-color', newBackground);
      $(this).css('color', newText);
    }
  });
});
