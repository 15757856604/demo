/**
 * Created by fan_lv on 2017-9-2 0002.
 */

function clock() {
    const clock = document.getElementById('clock');
    const ctx = clock.getContext('2d');
    clock.setAttribute('width', '600');
    clock.setAttribute('height', '600');

    let width = clock.clientWidth;
    let height = clock.clientHeight;
    let r = width / 2;
    var rem = width / 200;

    function drawBackground() {
        ctx.save();
        ctx.beginPath();
        ctx.translate(r, r);
        ctx.lineWidth = 10 * rem;
        ctx.arc(0, 0, r - 5 * rem, 0, 2 * Math.PI);
        ctx.stroke();

        var hourArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        ctx.font = 18 * rem + "px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        hourArray.forEach(function (num, i) {
            var rad = 2 * Math.PI / 12 * i;
            var x = Math.cos(rad) * (r - 28 * rem);
            var y = Math.sin(rad) * (r - 28 * rem);
            ctx.fillText(num, x, y);
        });

    }

    function drawDot() {
        var rad = 2 * Math.PI / 60;
        var x, y;
        for (var i = 1; i <= 60; i++) {
            ctx.beginPath();
            x = (r - 14 * rem) * Math.cos(rad * i);
            y = (r - 14 * rem) * Math.sin(rad * i);
            if (i % 5 === 0) {
                ctx.fillStyle = "#000";
            }
            else {
                ctx.fillStyle = "#8a8a8a";
            }
            ctx.arc(x, y, 2 * rem, 0, 2 * Math.PI, false);
            ctx.fill();
        }
    }

    function drawHour(hour, minute) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 5 * rem;
        ctx.lineCap = 'round';
        let rad = 2 * Math.PI / 12 * hour;
        let minRad = 2 * Math.PI / 12 / 60 * minute;
        ctx.rotate(rad + minRad);
        ctx.moveTo(0, 6 * rem);
        ctx.lineTo(0, -r + 48 * rem);
        ctx.stroke();
        ctx.restore();
    }

    function drawMinute(minute) {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3 * rem;
        ctx.lineCap = 'round';
        let rad = 2 * Math.PI / 60 * minute;
        ctx.rotate(rad);
        ctx.moveTo(0, 10 * rem);
        ctx.lineTo(0, -r + 32 * rem);
        ctx.stroke();
        ctx.restore();
    }

    function drawSecond(second) {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "#ff0000";
        let rad = 2 * Math.PI / 60 * second;
        ctx.rotate(rad);
        ctx.moveTo(1 * rem, 16 * rem);
        ctx.lineTo(2 * rem, 0);
        ctx.lineTo(1 * rem, -r + 16 * rem);
        ctx.lineTo(-1 * rem, -r + 16 * rem);
        ctx.lineTo(-2 * rem, 0);
        ctx.lineTo(-1 * rem, 16 * rem);
        ctx.fill();
        ctx.restore();
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        drawBackground();
        drawDot();
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var seconds = date.getSeconds();
        drawHour(hour, minute);
        drawMinute(minute);
        drawSecond(seconds);
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(0, 0, 2 * rem, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.restore();
    }

    setInterval(draw, 1000);
}
clock();
