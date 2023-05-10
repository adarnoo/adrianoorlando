// Video toggle
$('body').on('click', '#ts-video-toggle', function(e) {
  e.preventDefault();
  $(".ts-pop-up-container").toggleClass("ts-pop-up-container--close");
});

// Contact toggle
$('body').on('click', '#ts-contact-toggle', function(e) {
  e.preventDefault();
  $(".ts-contact-screen").toggleClass("ts-contact-screen--show");
  $(".ts-scroll").toggleClass("ts-scroll--open");
});

$('.ts-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".ts-prev"),
  nextArrow: $(".ts-next"),
  speed: 0
});

// Video player
function playVideo() {
        $('#ts-emma-taylor-video').trigger('play');
    }
    function pauseVideo() {
        $('#ts-emma-taylor-video').trigger('pause');
    }
