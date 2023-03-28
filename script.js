// card-ui-hover/vanilla-tilt - setings
VanillaTilt.init(document.querySelectorAll(".vanilla-tilt-3D"), {
    max: 5,
    speed: 400,
    scale: 1.1
});
// serch placeholder from all brousers
document.querySelector('.inp-custom-placeholder').addEventListener('input', (e) => {
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
// mobile panel serch animation
const search_mob = document.querySelector('.search-mob')
search_mob.addEventListener('click', () => {
    search_mob.style.width = '160px'
})
document.querySelector('.carousel').addEventListener('click', () => { search_mob.style.width = '30px' })
document.querySelector('.nav-items-cont-mob-open').addEventListener('click', () => {
    nav_items_cont_mob.style.cssText = 'opacity: 1; top: 0;'
})
// scrill close
window.addEventListener('scroll', () => {
    nav_items_cont_mob.style.cssText = 'opacity: 0.5; top: -80vh;'
    search_mob.style.width = '30px'
    search_mob.querySelector('.inp').style.cssText = 'opacity: 0;'
})
// random blobs animaation