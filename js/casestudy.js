$(document).ready(function(){

    var myHeight = $('#header').height();
    $('.shader').css('height', myHeight);
    $('.shader2').css('height', myHeight);

    $('.shader').css('display', 'none');
    $('.shader').fadeIn(1000);

    $(window).scroll(function(){
        $(".shader").css("opacity", .6 - $(window).scrollTop() / 500);
      });

  $(window).resize(function() {
    var myHeight = $('#header').height();
    $('.shader').css('height', myHeight);
    $('.shader2').css('height', myHeight);
  });
});
