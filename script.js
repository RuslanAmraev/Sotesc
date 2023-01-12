$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    zIndex: 2
  });

  $('.vertical-multiple-items').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    zIndex: 2
  });


  // $('.multiple-items').on('touchstart', e => {
  //   $('.multiple-items').slick('slickPlay');
  // });