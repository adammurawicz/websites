
$(document).ready(function () {
    $('.residence__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });
})