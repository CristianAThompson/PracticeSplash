$(window).scroll(function() {
  if ($(document).scrollTop() > 60) {
    $(".header").fadeIn([125]);
  } else {
    $(".header").fadeOut([125]);
  }
})
