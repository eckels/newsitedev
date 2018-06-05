$(document).ready(function() {

  var capsule = $('.project').length;
  var i = 0;
  var delayCounter = 0;
  while (i < capsule) {
    document.getElementsByClassName('project')[i].setAttribute("data-aos-delay", delayCounter);
    i++
    if (i % 3 == 0 && $(window).width() >= 1000) {
      delayCounter = 0;
    }
    if (i % 2 == 0 && $(window).width() <= 1000 && $(window).width() > 645) {
      delayCounter = 0;
    }
    if ($(window).width() <= 645) {
      delayCounter = 0;
    }
    delayCounter = delayCounter + 150;
  }
});
