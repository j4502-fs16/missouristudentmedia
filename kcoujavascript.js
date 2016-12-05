$(document).ready(function() {
  $('.kcoumenu-trigger').click(function() {
    $('.kcounav ul').slideToggle(500);
  });//end slide toggle

//When window is resized, the display:none is turned off for the ul so the menu displays on click or touch.
  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('.kcounav ul').removeAttr('style');
	 }
	});//end resize
});//end ready
