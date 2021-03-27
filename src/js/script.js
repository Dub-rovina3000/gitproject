$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 10000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftarrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rightarrow.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
    });
});
          