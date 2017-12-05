let canvas = document.getElementById('test');

canvas.style.border = '1px solid #ccc';
canvas.width = 800;
canvas.height = 800;

let context = canvas.getContext('2d');

context.lineWidth = 10;

context.beginPath();
context.lineTo(100, 100);
context.lineTo(300, 400);
context.lineTo(100, 700);
context.strokeStyle = '#ff0000';
context.stroke();

context.beginPath();
context.lineTo(300, 100);
context.lineTo(500, 400);
context.lineTo(300, 700);
context.closePath();
context.fillStyle = '#fff000';
context.fill();
context.strokeStyle = '#00ff00';
context.stroke();


context.beginPath();
context.lineTo(500, 100);
context.lineTo(700, 400);
context.lineTo(500, 700);
context.strokeStyle = '#0000ff';
context.stroke();