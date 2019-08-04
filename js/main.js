$(document).ready(function () {
  // slick slider init
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '123px',
    centerMode: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  // slick filters
  function filterSlider(filter) {
    $('.slider').slick('slickUnfilter');
    $('.slider').slick('slickFilter', filter);
  }
  $( ".filter_tab_button" ).click(function() {
    $(".filter_tab_button").removeClass("active");
    $(this).addClass("active");
  });
  $( ".web_filter" ).click(function() {
    filterSlider(".web");
  });
  $( ".uiux_filter" ).click(function() {
    filterSlider(".uiux");
  });
  $( ".branding_filter" ).click(function() {
    filterSlider(".branding");
  });
  $( ".foto_filter" ).click(function() {
    filterSlider(".foto");
  });
  $( ".no_filter" ).click(function() {
    $('.slider').slick('slickUnfilter');
  });
});