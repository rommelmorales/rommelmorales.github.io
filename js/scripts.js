$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    }
    else {
      $('.navbar').removeClass("sticky");
    }
  });

  $('.navbar .menu li a').click(function() {
    $('html').css("scrollBehavior", "smooth");
  });
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn img').toggleClass("active");
  });
});


$('.scroll-link').on('click', function(event) {
  event.preventDefault();

  var hash = this.hash;

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 800, function() {

    window.location.hash = hash;
  });
});

window.location.hash = hash;
