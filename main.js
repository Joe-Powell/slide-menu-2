
const hamburger = document.querySelector('.nav .fa-hamburger');
const nav2 = document.querySelector('.nav2');

hamburger.addEventListener('click', () => {
    nav2.classList.toggle('onclick');
})



// sub menu in .nav2

const subTrigger = document.querySelector('.subTrigger')
const subMenu = document.querySelector('.nav2 .sub-menu')
const arrow = document.querySelector('.fa-arrow-right');

const activeSubMenu = document.querySelector('.activeSubMenu')

subTrigger.addEventListener('click', () => {
    console.log('clicked has sub')

    subMenu.classList.toggle('activeSubMenu')
    arrow.classList.toggle('rotateArrow')


})



