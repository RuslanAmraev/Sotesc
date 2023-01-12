$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    zIndex: 2
  });

  $('.vertical-multiple-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    zIndex: 2
  });

  window.addEventListener(`resize`, event => {
    if(window.innerWidth <= 425){
      $('.multiple-items').slick('slickSetOption', 'slidesToShow', 3)
    }else{
      $('.multiple-items').slick('slickSetOption', 'slidesToShow', 4)
    }
    if(window.innerWidth <= 425){
      $('.vertical-multiple-items').slick('slickSetOption', 'slidesToShow', 1)
    }else{
      $('.vertical-multiple-items').slick('slickSetOption', 'slidesToShow', 2)
    }
  }, false);

  // $('.multiple-items').on('touchstart', e => {
  //   $('.multiple-items').slick('slickPlay');
  // });