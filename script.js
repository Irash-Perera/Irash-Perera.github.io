function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}


const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
const buttonRight2 = document.getElementById('slideRight2');
const buttonLeft2 = document.getElementById('slideLeft2');

buttonRight.onclick = function () {
  document.getElementById('container').scrollLeft += 800;
};
buttonLeft.onclick = function () {
  document.getElementById('container').scrollLeft -= 800;
};

buttonRight2.onclick = function () {
  document.getElementById('container2').scrollLeft += 800;
};
buttonLeft2.onclick = function () {
  document.getElementById('container2').scrollLeft -= 800;
};

var prevScrollpos = window.scrollY || window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.scrollY || window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("desktop-nav").style.top = "0";
  } else {
    document.getElementById("desktop-nav").style.top = "-20vh";
  }
  prevScrollpos = currentScrollPos;
}