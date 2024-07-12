function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('container').scrollLeft += 800;
};
buttonLeft.onclick = function () {
  document.getElementById('container').scrollLeft -= 800;
};