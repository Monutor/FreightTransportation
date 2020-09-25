$(function () {
  $('.company__slider').slick({
    prevArrow: '<button type="button" class="slick-prev">След</button>',
    nextArrow: '<button type="button" class="slick-next">Назад</button>',
    responsive: [
      {
        breakpoint: 983,
        settings: {
          arrows: false,
          autoplay: true
        }
      }
    ]
  });
  $('.header__menu-icon').click(function(){
    $('.header__menu').slideToggle();
  });
})





