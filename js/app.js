$(window).scroll(function() {
  if ($(document).scrollTop() > 60) {
    $(".header").fadeIn([100]);
    $("#header-text").fadeIn([100]);
  } else {
    $(".header").fadeOut([100]);
    $("#header-text").fadeOut([100]);
  }
})
