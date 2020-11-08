var canvas = document.getElementById("canvaTest");
var ctx = canvas.getContext("2d");

const v = 5;
const radius = 0.4*canvas.height;
var x = radius + v;

while(x < canvas.width - radius){
    ctx.beginPath();
    ctx.arc(x, canvas.height/2, radius, 0, 2 * Math.PI);
    ctx.stroke();
    x += v;
}
