let ball = document.getElementById('ball');
const windowElement = document.getElementById('window');
const windowRect = windowElement.getBoundingClientRect();
let x = 0;
let y = 0;
let speed = 0.05; // Add a speed variable
let clicked = false;
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousedown',(event) =>{
    if (event.target === windowElement) {
        clicked = true;
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
});


function moveballtomouse(){

    if (clicked === true){
        // Calculate the distance and angle between the ball and the clicked position
        const dx = mouseX - windowRect.left - ball.clientWidth / 2 - x;
        const dy = mouseY - windowRect.top - ball.clientHeight / 2 - y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        // Move the ball in the direction of the clicked position with a constant speed
        x += Math.cos(angle) * distance * speed;
        y += Math.sin(angle) * distance * speed;
    }

    ball.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(moveballtomouse);
}

moveballtomouse();
