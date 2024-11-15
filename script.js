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

const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');
let mousePos = { x: 0, y: 0 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const gridSize = 28; // Small grid size
    const maxRadius = 250; // Radius for the gradient effect

    // Draw grid lines
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)'; // Slightly darker grid lines
    ctx.lineWidth = 0.5; // Thin lines

    for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }

    // Create radial gradient mask
    const gradient = ctx.createRadialGradient(
        mousePos.x,
        mousePos.y,
        0,
        mousePos.x,
        mousePos.y,
        maxRadius
    );
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    // Apply gradient mask
    ctx.globalCompositeOperation = 'destination-in';
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Reset composite operation
    ctx.globalCompositeOperation = 'source-over';
}

function handleMouseMove(event) {
    mousePos = {
        x: event.clientX,
        y: event.clientY
    };
    drawGrid();
}

function init() {
    resizeCanvas();
    drawGrid();

    window.addEventListener('resize', () => {
        resizeCanvas();
        drawGrid();
    });

    window.addEventListener('mousemove', handleMouseMove);
}

init();