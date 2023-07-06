let ball = document.getElementById('ball');
let positionX = 0; // initial position of the ball on the X-axis
let positionY = 0; // initial position of the ball
let velocityY = 0; // initial velocity of the ball
let gravity = 0.1; // acceleration due to gravity
let containerHeight = document.getElementById('window').clientHeight;
let targetX = 0; // target position for the ball on the X-axis
let speed = 3; // fixed speed of the ball

window.addEventListener('mousemove', (event) => {
  targetX = event.clientX - ball.clientWidth / 2;
});

function update() {
  // Calculate the direction vector
  let directionX = targetX - positionX;
  let distance = Math.sqrt(directionX * directionX);

  // Update the ball's position based on the fixed speed
  if (distance > speed) {
    positionX += (directionX / distance) * speed;
  } else {
    positionX = targetX;
  }
  ball.style.left = positionX + 'px';

  velocityY += gravity; // apply gravity to the velocity
  positionY += velocityY; // update position using the new velocity

  // check if ball has hit the bottom of the container
  if (positionY + ball.clientHeight >= containerHeight) {
    velocityY = -velocityY; // reverse the direction of the velocity
    positionY = containerHeight - ball.clientHeight; // reset the position to be on the ground
  }

  ball.style.top = positionY + 'px'; // set the top property of the ball to the new position

  requestAnimationFrame(update); // call update again on the next frame
}

update(); // start the animation loop
