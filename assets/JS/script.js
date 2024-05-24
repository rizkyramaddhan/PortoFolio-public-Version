$(window).on("scroll", function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= 80) {
    $("body").addClass("fixed-header");
  } else {
    $("body").removeClass("fixed-header");
  }
});

// document ready

$(document).ready(function () {
  // typing animation
  new Typed("#type-it", {
    strings: [" an intern", "FullStack Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 500, // menambahkan delay sebelum mulai mengetik string baru
    loop: true,
  });

  // owlCarousel2
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 3,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
    },
  });
});
