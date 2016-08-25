$(window).scroll(function() {
  if ($(document).scrollTop() > 60) {
    $(".header").addClass("header-scroll");
    $(".icons").addClass("icon-scroll");
    $("#header-text").fadeIn(100);
  } else {
    $(".header").removeClass("header-scroll");
    $(".icons").removeClass("icon-scroll");
    $("#header-text").fadeOut(100);
  }
})
