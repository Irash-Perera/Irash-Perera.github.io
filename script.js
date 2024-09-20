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

document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.getElementById('skills');
  const counterContainers = document.querySelectorAll('.counter-container');
  const projectCounter = document.getElementById('projectCounter');
  const commitCounter = document.getElementById('commitCounter');

  const targetProjects = 15;
  const targetCommits = 500;
  const animationDuration = 2000

  let animated = false;

  const animateCounter = (element, target) => {
      let current = 0;
      const increment = target / (animationDuration / 50);
      const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
              clearInterval(timer);
              current = target;
          }
          element.textContent = Math.round(current)+ '+';
      }, 50);
  };

  const animateCounters = () => {
      if (animated) return;
      animated = true;

      counterContainers.forEach((container, index) => {
          setTimeout(() => {
              container.style.opacity = '1';
              container.style.transform = 'translateY(0)';
          }, index * 200);
      });

      setTimeout(() => {
          animateCounter(projectCounter, targetProjects);
          animateCounter(commitCounter, targetCommits);
      }, 500);
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounters();
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  observer.observe(skillsSection);
});