const nav = document.querySelector('nav')
const navBtn = document.querySelector('.navbar-toggler')
const navbarCollapse = document.querySelector('.navbar-collapse')
const navLinks = document.querySelectorAll('nav a')

const getBCG = () => {
    if(window.scrollY >= 300) {
        nav.classList.add('navbackground')
    } else {
        nav.classList.remove('navbackground')
    }
}

navLinks.forEach(a => {
    a.addEventListener('click', () => {
        navbarCollapse.classList.remove('show')
    })
})

window.addEventListener('scroll', getBCG)