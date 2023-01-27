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
        document.querySelector('.nav-right-corner').style.right ='0px'
        document.querySelector('.nav-right-corner-btn-open .arrow').style.cssText = 'transform: rotate(180deg);'
    }

})