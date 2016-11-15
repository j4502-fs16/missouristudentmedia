$(document). ready(function() {
  $('.menu-trigger').click(function() {
    $('.mobile-nav').slideToggle(500);
  });

$(window).resize(function(){
  if ( $(window).width() > 550 ){
    $('.mobile-nav').removeAttr('style');
    }
  });
});
