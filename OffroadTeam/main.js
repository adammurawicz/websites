const burger = document.querySelector('.navbar-toggler')
const navi = document.querySelector('nav')
const naviLinks = document.querySelectorAll('.nav-link')
const naviCollapse = document.querySelector('.navbar-collapse')

const makeOpacity = () => {
    navi.classList.toggle('opacity')
}

naviLinks.forEach(link => link.addEventListener('click', () => naviCollapse.classList.remove('show')))

burger.addEventListener('click', makeOpacity)

$('.team-cards').slick({
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
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