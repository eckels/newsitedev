$(document).ready(function(){
    var myHeight = $('#header').height();
    $('.shader').css('height', myHeight);
    $('.shader2').css('height', myHeight);

    $(window).scroll(function(){
        $(".shader").css("opacity", .55 - $(window).scrollTop() / 500);
      });

  $(window).resize(function() {
    var myHeight = $('#header').height();
    $('.shader').css('height', myHeight);
    $('.shader2').css('height', myHeight);
  });
});
