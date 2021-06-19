let ball = document.querySelector("div.ball");
let mouseX = 0, mouseY = 0, ballX = 0, ballY = 0, speed = 0.2;

let animate = () => {
let distX = mouseX - ballX;
let distY = mouseY - ballY;
ballX = ballX + (distX * speed);
ballY = ballY + (distY * speed);
ball.style.left = ballX + "px";
ball.style.top = ballY + "px";
requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", (event) => {
mouseX = event.pageX;
mouseY = event.pageY;
});