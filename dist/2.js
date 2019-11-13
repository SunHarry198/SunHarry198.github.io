$(window).on('load', function(event) {
      $('body').removeClass('preloading');
      // $('.load').delay(1000).fadeOut('fast');
      $('.loader').delay(1000).fadeOut('fast');
});
$(document).ready(function(){

  const arr_content = $('.center').toArray();
  for (let i = 0; i < arr_content.length; i++) {
    let class_content = '';
    $(arr_content[i]).click(function(event) {
      class_content = $(this).attr('data-content-this');
      $('.content-this').addClass(class_content);
    });
  }
  $('.close-content-this').click(function(event) {
      $('.content-this').removeClass('show-content-this-1');
      $('.content-this').removeClass('show-content-this-2');
      $('.content-this').removeClass('show-content-this-3');
      $('.content-this').removeClass('show-content-this-4');
      $('.content-this').removeClass('show-content-this-5');
  });


  $('.button-menu').click(function(event) {
    $('.menu').toggleClass('show-menu');
    $('.background-black').toggleClass('show-background-black');
  });
  $('.background-black').click(function(event) {
    $('.menu').removeClass('show-menu');
    $(this).removeClass('show-background-black');
  });


    $('.protfolio-item').isotope({
      itemSelector: '.item',
    });

  $('.menu ul li.nav-item').click(function(event) {
    $('.menu ul li.nav-item').removeClass('active');
    $(this).addClass('active');

    const selector = $(this).attr('data-filter');
    $('.protfolio-item').isotope({
        filter: selector
    });
    return false;
  });


});