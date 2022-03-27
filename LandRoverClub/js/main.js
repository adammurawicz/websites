// const burger = document.querySelector('.navbar-toggler')
// const navi = document.querySelector('nav')
const naviLinks = document.querySelectorAll('.nav-link')
const naviCollapse = document.querySelector('.navbar-collapse')

naviLinks.forEach(link => link.addEventListener('click', () => naviCollapse.classList.remove('show')))