$(document).ready(function () {

  //goTop
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('.goTop').fadeIn(500);
      $('.bottom_nav').addClass('scroll')
    } else {
      $('.goTop').fadeOut(500);
      $('.bottom_nav').removeClass('scroll')
    }
  });

  //儲值達成度_pop_全開用
  $('.completion_all_rate_popup').click(function () {
    $('.ok2_btn_test_pop').css('display', 'flex').fadeIn(100);
    $('.ok2_btn_inner_pop').delay(100).fadeIn(500);
  });

  $('.ok2_btn_close,.ok2_close_btn').click(function () {
    $('.ok2_btn_inner_pop').fadeOut(100);
    $('.ok2_btn_test_pop').fadeOut(100);
  });


  $(function() {
    // Amount of scrolling before button is shown/hidden.
    var offset = 100;

    // Fade duration
    var duration = 500;

    // Toggle view of button when scrolling.
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('#c-go-top').fadeIn(duration);
      } else {
        $('#c-go-top').fadeOut(duration);
      }
    });

    // Scroll to top when button is clicked.
    $('#c-go-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, duration);
      return false;
    });
  });// JavaScript Document

})