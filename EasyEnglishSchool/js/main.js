const navi = document.querySelector('nav')
const naviLinks = document.querySelectorAll('.nav-link')
const naviCollapse = document.querySelector('.navbar-collapse')

const addbg = () => {
    if (window.scrollY >= 620) {
        navi.classList.add('navi-bg')
    }   else {
        navi.classList.remove('navi-bg')
    }
}

naviLinks.forEach(link => link.addEventListener('click', () => naviCollapse.classList.remove('show')))

window.addEventListener('scroll', addbg)

// slick

$(document).ready(function(){
    $('.teachers-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
  });
