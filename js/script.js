$('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:true,
    prevArrow:'.team-left',
    nextArrow:'.team-right',
  });

  $(function() {  
    $(".blog-area").niceScroll();
});
$('.counter').counterUp({
  delay: 5,
  time: 500,
});

