$(window).on('load', function(event) {
      $('body').removeClass('preloading');
      // $('.load').delay(1000).fadeOut('fast');
      $('.loader').delay(1000).fadeOut('fast');
});
$(document).ready(function(){

	$('.container-fluid').ripples({
		resolution: 550,
		dropRadius: 25,
		perturbance: 0.1,
	});

      const hover_this = $('.hover-this').toArray();
      const hover_this_img = $('.hover-this img').toArray();
      for (let i = 0; i < hover_this.length; i++) {
            $(hover_this[i]).hover(function() {
                  $('.cursor').attr('style', 'transform: scale(3)');
                  $(hover_this_img[i-1]).css({
                        'opacity': '0.8',
                        'transition' : '3s',
                        'animation' : 'none'});
                  $(hover_this_img[i-1]).removeClass('.animate-slide-img');
            }, function() {
                  $('.cursor').attr('style', 'transform: scale(1)');
                  $(hover_this_img[i-1]).css({
                        'opacity': '0.1',
                        'transition' : '1s',
                        'animation' : 'slideImg 5s linear infinite'});
                  $(hover_this_img[i-1]).addClass('.animate-slide-img');
            });
      }

      $('.click-show-user-admin').click(function(event) {
            $('.user-admin').toggleClass('show-user-admin');
      });
      $('.close-user-admin').click(function(event) {
            $('.user-admin').removeClass('show-user-admin');
      });


      $('.user').click(function(event) {
            $('.content-user-admin').addClass('show-content-user-admin');
      });
      $('.close-form-admin').click(function(event) {
            $('.content-user-admin').removeClass('show-content-user-admin');
      });


// ********************************************************************************************************
// SLIDE-IMG

      // khai báo biến cần dùng
      const one_slide_img = $('.one-slide-img').toArray();
      const btn_slide_img = $('.btn-slide-img ul li').toArray();

      // dùng cho chuyển slide

      for (let i = 0; i < one_slide_img.length; i++) {


            $(one_slide_img[1]).attr('style', 'transform: translateY(-100px)');
            $(one_slide_img[0]).attr('style', 'transform: translateY(0)');
            $(one_slide_img[0]).click(function(event) {
                  $('.slide-img ul').attr('style', 'transform: translateX(-1%)');
                  $(this).attr('style', 'transform: translateY(0)');
                  $(one_slide_img[1]).attr('style', 'transform: translateY(-100px)');


                  $('.btn-slide-img').removeClass('active-btn-slide-img-2');
                  $('.btn-slide-img').addClass('active-btn-slide-img-1');
            });

            // click tiến ảnh
            $(one_slide_img[i + 1]).click(function(event) {
                  $('.slide-img ul').attr('style', 'transform: translateX(' + -(i+1) * 20 + '%)');
                  $(one_slide_img[i]).attr('style', 'transform: translateY(100px)');
                  $(one_slide_img[i + 1]).attr('style', 'transform: translateY(0)');
                  $(one_slide_img[i + 2]).attr('style', 'transform: translateY(-100px)');

                  $(one_slide_img[i]).removeClass('center-title-slide');
                  $(one_slide_img[i + 1]).removeClass('left-title-slide');
                  $(one_slide_img[i]).addClass('right-title-slide');
                  $(one_slide_img[i + 1]).addClass('center-title-slide');
                  $(one_slide_img[i + 2]).addClass('left-title-slide');

                  $('.btn-slide-img').removeClass('active-btn-slide-img-1');
                  $('.btn-slide-img').removeClass('active-btn-slide-img-2');
                  $('.btn-slide-img').removeClass('active-btn-slide-img-3');
                  $('.btn-slide-img').removeClass('active-btn-slide-img-4');
                  $('.btn-slide-img').removeClass('active-btn-slide-img-5');

                  $('.main').removeClass('background-slide-img-1');
                  $('.main').removeClass('background-slide-img-2');
                  $('.main').removeClass('background-slide-img-3');
                  $('.main').removeClass('background-slide-img-4');
                  $('.main').removeClass('background-slide-img-5');

                  if (i+1 == 0) {
                        $('.btn-slide-img').addClass('active-btn-slide-img-1');
                        $('.main').addClass('background-slide-img-1');
                  };
                  if (i+1 == 1) { 
                        $('.btn-slide-img').addClass('active-btn-slide-img-2');
                        $('.main').addClass('background-slide-img-2');
                  };
                  if (i+1 == 2) {
                        $('.btn-slide-img').addClass('active-btn-slide-img-3');
                        $('.main').addClass('background-slide-img-3');
                  };
                  if (i+1 == 3)  {
                        $('.btn-slide-img').addClass('active-btn-slide-img-4');
                        $('.main').addClass('background-slide-img-4');
                  };
                  if (i+1 == 4) {
                        $('.btn-slide-img').addClass('active-btn-slide-img-5');
                        $('.main').addClass('background-slide-img-5');
                  };
            });

            // click lùi ảnh
            $(one_slide_img[i - 1]).click(function(event) {
                  $(one_slide_img[i]).removeClass('center-title-slide');
                  $(one_slide_img[i - 1]).removeClass('right-title-slide');
                  $(one_slide_img[i]).addClass('left-title-slide');
                  $(one_slide_img[i - 1]).addClass('center-title-slide');
                  $(one_slide_img[i - 2]).addClass('right-title-slide');   

                  $('.main').removeClass('background-slide-img-1');
                  $('.main').removeClass('background-slide-img-2');
                  $('.main').removeClass('background-slide-img-3');
                  $('.main').removeClass('background-slide-img-4');
                  $('.main').removeClass('background-slide-img-5');
                  if (i - 1 == 0) $('.main').addClass('background-slide-img-1');
                  if (i - 1 == 1) $('.main').addClass('background-slide-img-2');
                  if (i - 1 == 2) $('.main').addClass('background-slide-img-3');
                  if (i - 1 == 3) $('.main').addClass('background-slide-img-4');
                  if (i - 1 == 4) $('.main').addClass('background-slide-img-5');
            });

      }

      //dùng cho nút chuyển slide

      for (let i = 0; i < btn_slide_img.length; i++) {
            $(btn_slide_img[i]).click(function(event) {
                  $('.btn-slide-img').removeClass('active-btn-slide-img-1');
                  $('.btn-slide-img').removeClass('active-btn-slide-img-2');
                  $('.btn-slide-img').removeClass('active-btn-slide-img-3');
                  $('.btn-slide-img').removeClass('active-btn-slide-img-4');
                  $('.btn-slide-img').removeClass('active-btn-slide-img-5');

                  if (i == 0) $('.btn-slide-img').addClass('active-btn-slide-img-1');
                  if (i == 1) $('.btn-slide-img').addClass('active-btn-slide-img-2');
                  if (i == 2) $('.btn-slide-img').addClass('active-btn-slide-img-3');
                  if (i == 3) $('.btn-slide-img').addClass('active-btn-slide-img-4');
                  if (i == 4) $('.btn-slide-img').addClass('active-btn-slide-img-5');
            });

            $(btn_slide_img[1]).attr('style', 'transform: translateY(-100px)');
            $(btn_slide_img[0]).attr('style', 'transform: translateY(0)');
            $(btn_slide_img[0]).click(function(event) {
                  $('.slide-img ul').attr('style', 'transform: translateX(-1%)');
                  $(one_slide_img[0]).attr('style', 'transform: translateY(0)');
                  $(one_slide_img[1]).attr('style', 'transform: translateY(-100px)');
            });

            $(btn_slide_img[i + 1]).click(function(event) {
                  $('.slide-img ul').attr('style', 'transform: translateX(' + -(i+1) * 20 + '%)');
                  $(one_slide_img[i]).attr('style', 'transform: translateY(100px)');
                  $(one_slide_img[i + 1]).attr('style', 'transform: translateY(0)');
                  $(one_slide_img[i + 2]).attr('style', 'transform: translateY(-100px)');

                  $(one_slide_img[i]).removeClass('center-title-slide');
                  $(one_slide_img[i + 1]).removeClass('left-title-slide');
                  $(one_slide_img[i]).addClass('right-title-slide');
                  $(one_slide_img[i + 1]).addClass('center-title-slide');
                  $(one_slide_img[i + 2]).addClass('left-title-slide');


                  $('.main').removeClass('background-slide-img-1');
                  $('.main').removeClass('background-slide-img-2');
                  $('.main').removeClass('background-slide-img-3');
                  $('.main').removeClass('background-slide-img-4');
                  $('.main').removeClass('background-slide-img-5');

                  if (i+1 == 0) {
                        $('.btn-slide-img').addClass('active-btn-slide-img-1');
                        $('.main').addClass('background-slide-img-1');
                  };
                  if (i+1 == 1) { 
                        $('.btn-slide-img').addClass('active-btn-slide-img-2');
                        $('.main').addClass('background-slide-img-2');
                  };
                  if (i+1 == 2) {
                        $('.btn-slide-img').addClass('active-btn-slide-img-3');
                        $('.main').addClass('background-slide-img-3');
                  };
                  if (i+1 == 3)  {
                        $('.btn-slide-img').addClass('active-btn-slide-img-4');
                        $('.main').addClass('background-slide-img-4');
                  };
                  if (i+1 == 4) {
                        $('.btn-slide-img').addClass('active-btn-slide-img-5');
                        $('.main').addClass('background-slide-img-5');
                  };
            });

            $(btn_slide_img[i - 1]).click(function(event) {
                  $(one_slide_img[i]).removeClass('center-title-slide');
                  $(one_slide_img[i - 1]).removeClass('right-title-slide');
                  $(one_slide_img[i]).addClass('left-title-slide');
                  $(one_slide_img[i - 1]).addClass('center-title-slide');
                  $(one_slide_img[i - 2]).addClass('right-title-slide');   


                  $('.main').removeClass('background-slide-img-1');
                  $('.main').removeClass('background-slide-img-2');
                  $('.main').removeClass('background-slide-img-3');
                  $('.main').removeClass('background-slide-img-4');
                  $('.main').removeClass('background-slide-img-5');
                  if (i - 1 == 0) $('.main').addClass('background-slide-img-1');
                  if (i - 1 == 1) $('.main').addClass('background-slide-img-2');
                  if (i - 1 == 2) $('.main').addClass('background-slide-img-3');
                  if (i - 1 == 3) $('.main').addClass('background-slide-img-4');
                  if (i - 1 == 4) $('.main').addClass('background-slide-img-5');
            });

      }


});



// JS

document.addEventListener("DOMContentLoaded",function(){

	// const link = document.querySelectorAll('.hover-this');
      const cursor = document.querySelector('.cursor');

      // const animateit = function (e) {
      //       const span = this.querySelector('span');
      //       const { offsetX: x, offsetY: y } = e,
      //       { offsetWidth: width, offsetHeight: height } = this,

      //       move = 25,
      //       xMove = -x / width * (move * 2) - move,
      //       yMove = - y / height * (move * 2) - move;

      //       span.style.transform = `translate(${xMove}px, ${yMove}px)`;

      //       if (e.type === 'mouseleave') span.style.transform = '';
      // };

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
      };

      // link.forEach(b => b.addEventListener('mousemove', animateit));
      // link.forEach(b => b.addEventListener('mouseleave', animateit));
      window.addEventListener('mousemove', editCursor);

},false)