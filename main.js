const ball = document.getElementById('ball');
const windowElement = document.getElementById('window');

let x = 0;
let y = 0;
let dx = 5;
let dy = 5;

let clicked = false;
let mouseX = 0;
let mouseY = 0;

windowElement.addEventListener('mousedown', (event) => {
  if (event.target === windowElement) {
    clicked = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
  }
});

windowElement.addEventListener('mouseup', () => {
  clicked = false;
});

function animate() {
  if (clicked) {
    const windowRect = windowElement.getBoundingClientRect();
    x = mouseX - windowRect.left - ball.clientWidth / 2;
    y = mouseY - windowRect.top - ball.clientHeight / 2;
    clicked = false;
  } else {
    x += dx;
    y += dy;

    if (x + ball.clientWidth > windowElement.clientWidth || x < 0) {
      dx = -dx;
    }

    if (y + ball.clientHeight > windowElement.clientHeight || y < 0) {
      dy = -dy;
    }
  }

  ball.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(animate);
}

animate();
