const burger = document.querySelector(`.fa-bars`);
const navi = document.querySelector(`.navbar`);

function makeOpacity () {
    navi.classList.toggle(`opacity`)
};

burger.addEventListener(`click`, makeOpacity);

$(document).ready(function(){
    
    $('.team-cards').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

  });

