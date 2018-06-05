$(document).ready(function(){
    var myWidth = $(window).width();
    var myHeight = $(window).height();
    $('#header').css('height', myHeight);
    $('.shader').css('height', myHeight);
    $('.smooth').smoothScroll();

    $(window).scroll(function(){
        $(".shader").css("opacity", .3 - $(window).scrollTop() / 1000);
        $(".arrow").css("opacity", .5 - $(window).scrollTop() / 400);
      });

  $(window).resize(function() {
    myWidth = $(window).width();
    myHeight = $(window).height();
    $('#header').css('height', myHeight);
    $('.shader').css('height', myHeight);
    $('.smooth').smoothScroll();
  });
});
