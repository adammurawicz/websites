const burger = document.querySelector(`.fa-bars`);
const navi = document.querySelector(`.navbar`);

function makeOpacity () {
    navi.classList.toggle(`opacity`)
};

burger.addEventListener(`click`, makeOpacity);