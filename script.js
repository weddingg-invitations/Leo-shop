// card-ui-hover/vanilla-tilt - setings
VanillaTilt.init(document.querySelectorAll(".vanilla-tilt-3D"), {
    max: 15,
    speed: 400,
    scale: 1.1
});
// serch placeholder from all brousers
document.querySelector('.inp').addEventListener('input', (e) => {
    if (e.target.value) {
        document.querySelector('.custom-placeholder').classList.add('hide')
    } else {
        document.querySelector('.custom-placeholder').classList.remove('hide')
    }
})
// nav right corner open close
document.querySelector('.nav-right-corner-btn-open').addEventListener('click', () => {
    if (document.querySelector('.nav-right-corner').style.right == '0px') {
        document.querySelector('.nav-right-corner').style.right = '-37px'
        document.querySelector('.nav-right-corner-btn-open .arrow').style.cssText = 'transform: rotate(0deg);'
    } else {
        document.querySelector('.nav-right-corner').style.right = '0px'
        document.querySelector('.nav-right-corner-btn-open .arrow').style.cssText = 'transform: rotate(180deg);'
    }

})
// mobile panel open close
const nav_items_cont_mob = document.querySelector('.nav-items-cont-mob')
document.querySelector('.nav-items-cont-mob-close').addEventListener('click', () => {
    nav_items_cont_mob.style.cssText = 'opacity: 0.5; top: -80vh;'
})
document.querySelector('.nav-items-cont-mob-open').addEventListener('click', () => {
    nav_items_cont_mob.style.cssText = 'opacity: 1; top: 0;'
})
window.addEventListener('scroll', () => {
    nav_items_cont_mob.style.cssText = 'opacity: 0.5; top: -80vh;'
})