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
    strings: ["FreeLancer", "FullStack Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 500, // menambahkan delay sebelum mulai mengetik string baru
    loop: true,
  });
});
