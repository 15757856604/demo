/**
 * Created by fan_lv on 2017-9-2 0002.
 */

const color = ['#ced4da', '#ff8787', '#f783ac', '#da77f2', '#9775fa', '#748ffc', '#4dadf7', '#3bc9db', '#38d9a9', '#69db7c', '#a9e34b', '#ffd43b', '#ffa94d'];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const WIDTH = canvas.width = document.documentElement.clientWidth;
const HEIGHT = canvas.height = document.documentElement.clientHeight;
const r = WIDTH / 128;
let currentTime = 0, nextTime = 0;
let setInt;
currentTime = new Date();

//网页当前状态判断
let hidden, state, visibilityChange;
if (typeof document.hidden !== "undefined") {
    hidden = "hidden";
    visibilityChange = "visibilitychange";
    state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
    hidden = "mozHidden";
    visibilityChange = "mozvisibilitychange";
    state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
    state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
    state = "webkitVisibilityState";
}
// 添加监听器，在title里显示状态变化
document.addEventListener(visibilityChange, function () {
    if (document[state] === "visible") {
        document.title = "回来啦！";
        setInt = setInterval(function () {
            draw();
            update();
        }, 10);
    }
    else {
        document.title = "去哪了？";
        clearInterval(setInt);
    }
}, false);
//初始化页面状态
document.title = "回来啦！";

setInt = setInterval(function () {
    draw();
    update();
}, 10);

function drawDot(x, y, num) {
    for (let i = 0; i < digit[num].length; i++) {
        for (let j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] === 1) {
                let ballx = x + j * (2 * r + 2) + (r + 1);
                let bally = y + i * (2 * r + 2) + (r + 1);
                ctx.beginPath();
                ctx.arc(ballx, bally, r, 0, 2 * Math.PI);
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function draw() {
    let date = new Date();

    //显示当前时间
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (hour < 10)
        hour = '0' + hour;
    if (minute < 10)
        minute = '0' + hour;
    if (second < 10)
        second = '0' + hour;

    ctx.save();
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawDot(0, 0, Math.floor(hour / 10));
    drawDot(8 * (2 * r + 2), 0, hour % 10);
    drawDot(16 * (2 * r + 2), 0, 10);
    drawDot(21 * (2 * r + 2), 0, Math.floor(minute / 10));
    drawDot(29 * (2 * r + 2), 0, minute % 10);
    drawDot(37 * (2 * r + 2), 0, 10);
    drawDot(42 * (2 * r + 2), 0, Math.floor(second / 10));
    drawDot(50 * (2 * r + 2), 0, second % 10);

    for (let i = 0; i < ball.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = ball[i].color;
        ctx.arc(ball[i].x, ball[i].y, ball[i].r, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();
    }

    ctx.restore();
}

let ball = [];
function addBall(x, y, num) {
    for (let i = 0; i < digit[num].length; i++) {
        for (let j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] === 1) {
                let aball = {
                    r: r,
                    x: x + j * (2 * r + 2) + (r + 1),
                    y: y + i * (2 * r + 2) + (r + 1),
                    vx: Math.random() * 5 - 2,
                    vy: Math.random() * 5 - 3,
                    g: 0.2,
                    color: color[Math.floor(Math.random() * color.length)]
                };
                ball.push(aball);
            }
        }
    }
}

function down() {
    for (let i = 0; i < ball.length; i++) {
        ball[i].x += ball[i].vx;
        ball[i].y += ball[i].vy;
        ball[i].vy += ball[i].g;

        if (ball[i].y >= HEIGHT - ball[i].r) {
            ball[i].y = HEIGHT - ball[i].r;
            ball[i].vy = -ball[i].vy * 0.75;
        }

        if (ball[i].x >= WIDTH - ball[i].r || ball[i].x <= ball[i].r) {
            ball.splice(i, 1);
        }

    }
}

function update() {
    nextTime = new Date();
    let nextHour = nextTime.getHours();
    let nextMinutes = nextTime.getMinutes();
    let nextSeconds = nextTime.getSeconds();

    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    if (Math.floor(nextHour / 10) != Math.floor(currentHour / 10)) {
        addBall(0, 0, Math.floor(currentHour / 10));
    }
    if (nextHour % 10 != currentHour % 10) {
        addBall(8 * (2 * r + 2), 0, currentHour % 10);
    }
    if (Math.floor(nextMinutes / 10) != Math.floor(currentMinutes / 10)) {
        addBall(21 * (2 * r + 2), 0, Math.floor(currentMinutes / 10));
    }
    if (nextMinutes % 10 != currentMinutes % 10) {
        addBall(29 * (2 * r + 2), 0, currentMinutes % 10);
    }
    if (Math.floor(nextSeconds / 10) != Math.floor(currentSeconds / 10)) {
        addBall(42 * (2 * r + 2), 0, Math.floor(currentSeconds / 10));
    }
    if (nextSeconds % 10 != currentSeconds % 10) {
        addBall(50 * (2 * r + 2), 0, currentSeconds % 10);
    }

    currentTime = nextTime;
    down();
}

