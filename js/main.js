$(document).ready(function () {


  $('.header__burger').click(function () {
    $(this).children().toggleClass('active');
    $('.header__mobile').toggleClass('active')
    $('body').toggleClass('fixed')
    return false;
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__mobile').length) {
      $('.header__burger').removeClass('active')
      $('.header__mobile').removeClass('active')
      $('body').removeClass('fixed')
    }
    e.stopPropagation()
  });

  var ticker = document.querySelector('.ticker'),
    list = document.querySelector('.help__blocks');
  if (list) {
    clone = list.cloneNode(true);
    ticker.append(clone);
  }

  var SwiperNeed = new Swiper('.need__slider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },

      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      991: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },

      1220: {
        slidesPerView: 3.2,
        spaceBetween: 15,
      },

      1400: {
        slidesPerView: 3.5,
        spaceBetween: 15,
      },

      1590: {
        slidesPerView: 4,
        spaceBetween: 15,
      },

      1890: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
  });

  var SwiperShowcase = new Swiper('.showcase__slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  var init3 = false;
	var swiper3;
	function swiperFond() {
		if (window.innerWidth <= 1890) {
			if (!init3) {
				init3 = true;
				swiper3 = new Swiper(".news__blocks", {

          breakpoints: {
            320: {
              slidesPerView: 1.1,
              spaceBetween: 15,
            },
      
            767: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
      
            991: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
      
            1220: {
              slidesPerView: 3.2,
              spaceBetween: 15,
            },
      
            1400: {
              slidesPerView: 3.5,
              spaceBetween: 15,
            },
      
            1590: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
      
            1890: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          },
				});

			}
		} else if (init3) {
			swiper3.destroy();
			init3 = false;
		}
	}
  swiperFond();
	window.addEventListener("resize", swiperFond);
});





