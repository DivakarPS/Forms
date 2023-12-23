document.addEventListener("DOMContentLoaded", () => {

    let table = document.getElementById('ping-pong-table');
    let ball = document.getElementById('ball');
    let paddle = document.getElementById('paddle');

    let ballX = 10;
    let ballY = 10;

    ball.style.left = `${ballX}px`
    ball.style.top = `${ballY}px`

    let dx=2;
    let dy=2;

    setInterval(() => {

        ballX+=dx;
        ballY+=dy;

        ball.style.left = `${ballX}px`;
        ball.style.top = `${ballY}px`

        if(ballX <= 0 || ballX >= table.offsetWidth - ball.offsetWidth){
            dx*=-1;
        }

        if(ballY <= 0 || ballY >= table.offsetHeight - ball.offsetHeight ){
            dy*=-1;
        }

        if(ballX < paddle.offsetLeft + paddle.offsetWidth && 
            ballY > paddle.offsetTop &&
            ballY + ball.offsetHeight < paddle.offsetHeight + paddle.offsetTop
        ){
            dx*=-1;
        }


    },5);
    let paddleY = 0;
        let dPy = 15;
        document.addEventListener("keydown", (event) => {
            event.preventDefault();

            if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight ){
                paddleY += dPy;
                console.log("up arrow!")
            }else if(event.keyCode == 38 && paddleY >0 ){
                paddleY += (-1)*dPy;
                console.log("down arrow!")

            }
            paddle.style.top = `${paddleY}px`;
        });

    document.addEventListener('mousemove', (event) => {
        let mouseDistanceFromTop =  event.clientY;
        let tableDistanceFromTop =  table.offsetTop;
        let mousePointControl = mouseDistanceFromTop - tableDistanceFromTop - paddle.offsetHeight/2;
        paddleY = mousePointControl;
        if(paddleY <=0 || paddleY>table.offsetHeight-paddle.offsetHeight ) return;
        paddle.style.top = `${paddleY}px`;
    })
     
})