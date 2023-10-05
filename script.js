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

  $('.banners-slider').slick({
    infinite: true,
    slidesToShow: 1,
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
    if(window.innerWidth <= 769){
      $('.vertical-multiple-items').slick('slickSetOption', 'slidesToShow', 1)
    }else{
      $('.vertical-multiple-items').slick('slickSetOption', 'slidesToShow', 2)
    }
  }, false);

  // $('.multiple-items').on('touchstart', e => {
  //   $('.multiple-items').slick('slickPlay');
  // });

  const textElement = document.querySelector(".contactButton-label");
  const backgroundElement = document.querySelector(".testing-contact-us-banner-shadow");
  
  window.addEventListener("scroll", () => {
      const textRect = textElement.getBoundingClientRect();
      const backgroundRect = backgroundElement.getBoundingClientRect();
      
      if (textRect.top < backgroundRect.bottom && textRect.bottom > backgroundRect.top) {
          textElement.style.color = "#fff"; // Черный цвет текста на белом фоне
      } else {
          textElement.style.color = "#000"; // Белый цвет текста на темном фоне
      }
  });