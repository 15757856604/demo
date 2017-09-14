(function() {
	var c = document.getElementById("myCanvas");
	var clock = document.getElementById("clock");

	// 确定浏览器支持<canvas>元素
	if (c.getContext) {
		var ctx = c.getContext("2d");

		// 填充、描边，所有涉及描边和填充的操作都将使用这两个样式，直至重新设置这两个值
		ctx.fillStyle = "#00ffff";
		ctx.strokeStyle = "#ff0000";

		// 绘制矩形
		ctx.fillRect(680, 40, 100, 100);
		ctx.strokeRect(680, 40, 100, 100); // 描边
		ctx.fillStyle = "rgba(255,0,0,0.5)";
		ctx.fillRect(650, 10, 100, 100);
		// 重叠中间去掉一个小正方形
		ctx.clearRect(700, 60, 30, 30);

		// line
		ctx.lineWidth = "6";
		ctx.lineCap = "round"; // 线条末端的形状是平头、圆头还是方头（butt/round/square）
		ctx.lineJoin = "round"; // 线条相交的方式是圆交、斜交还是斜接（round/bevel/miter）
		ctx.moveTo(10, 10);
		ctx.lineTo(40, 30);
		ctx.stroke();
		ctx.lineCap = "butt";
		ctx.moveTo(10, 30);
		ctx.lineTo(40, 10);
		ctx.stroke();

		// circle
		ctx.lineWidth = "1";
		ctx.beginPath();
		ctx.arc(95, 50, 40, 0, 2 * Math.PI);
		ctx.stroke();

		// font
		ctx.font = "30px Arial";
		ctx.strokeText("Hellow World!", 160, 50);
		ctx.fillStyle = "#000";
		ctx.fillText("Hellow World!", 360, 50);

		// 线性渐变
		var ctx_liner_color = ctx.createLinearGradient(0, 0, 200, 50); //渐变开始点xy，渐变结束点xy
		ctx_liner_color.addColorStop(0, 'red');
		ctx_liner_color.addColorStop(0.3, '#ccc');
		ctx_liner_color.addColorStop(0.6, 'blue');
		ctx_liner_color.addColorStop(1, '#fff');
		ctx.fillStyle = ctx_liner_color;
		ctx.fillRect(10, 100, 100, 100);

		// 径向渐变
		var ctx_radial_color = ctx.createRadialGradient(170, 150, 5, 170, 150, 50); //渐变开始xy半径，渐变结束xy半径
		ctx_radial_color.addColorStop(0, 'blue');
		ctx_radial_color.addColorStop(1, '#fff');
		ctx.fillStyle = ctx_radial_color;
		ctx.fillRect(120, 100, 100, 100);

		// 图片
		var img = document.getElementById("img1");
		img.onload = function() {
			ctx.drawImage(img, 230, 100, 100, 100); // xy，图像的大小(缩放显示)
			/*var imageData, data,
				i, average,
				red, green, blue, alpha;
			imageData = ctx.getImageData(230, 100, 100, 100);
			data = imageData.data;
			for (i = 0; i < data.length; i += 4) {
				red = data[i];
				green = data[i + 1];
				blue = data[i + 2];
				alpha = data[i + 3];

				average = Math.floor((red + green + blur) / 3);
				data[i] = average;
				data[i + 1] = average;
				data[i + 2] = average;
			}
			imageData.data = data;
			ctx.putImageData(imageData, 230, 100);*/
		}

		//时钟
		var clock_ctx = clock.getContext('2d');
		clock_ctx.translate(clock.width / 2, clock.height / 2); // 移动原点到xy
		function date_move() {
			clock_ctx.clearRect(-(clock.width / 2), -(clock.height / 2), clock.width, clock.height);
			//获取本地时间
			var date = new Date();
			var sec = date.getSeconds();
			var minutes = date.getMinutes();
			var hours = date.getHours();
			hours = hours > 12 ? hours - 12 : hours;
			var hour = hours + minutes / 60;
			var minute = minutes + sec / 60;

			clock_ctx.beginPath();
			clock_ctx.fillStyle = "#000";
			clock_ctx.strokeStyle = "#000";
			clock_ctx.arc(0, 0, 99, 0, 2 * Math.PI, false);
			clock_ctx.moveTo(94, 0); // 将画笔移动到这个位置(不移动将会有一条线连接两个圆)
			clock_ctx.arc(0, 0, 94, 0, 2 * Math.PI, false);
			clock_ctx.stroke();
			clock_ctx.closePath();
			//时钟刻度
			for (var i = 0; i < 12; i++) {
				clock_ctx.save();
				clock_ctx.lineWidth = 3;
				clock_ctx.rotate(i * 30 * Math.PI / 180);
				clock_ctx.beginPath();
				clock_ctx.moveTo(0, -90);
				clock_ctx.lineTo(0, -80);
				clock_ctx.stroke();
				clock_ctx.closePath();
				clock_ctx.restore();
			}
			for (var i = 0; i < 60; i++) {
				clock_ctx.save();
				clock_ctx.lineWidth = 2;
				clock_ctx.rotate(i * 6 * Math.PI / 180);
				clock_ctx.beginPath();
				clock_ctx.moveTo(0, -90);
				clock_ctx.lineTo(0, -85);
				clock_ctx.stroke();
				clock_ctx.closePath();
				clock_ctx.restore();
			}
			// 时针
			clock_ctx.save();
			clock_ctx.lineWidth = 3;
			clock_ctx.rotate(hour * 2 * Math.PI / 12);
			clock_ctx.beginPath();
			clock_ctx.moveTo(0, 3);
			clock_ctx.lineTo(0, -55);
			clock_ctx.stroke();
			clock_ctx.closePath();
			clock_ctx.restore();
			// 分针
			clock_ctx.save();
			clock_ctx.lineWidth = 2;
			clock_ctx.rotate(minute * 2 * Math.PI / 60);
			clock_ctx.beginPath();
			clock_ctx.moveTo(0, 5);
			clock_ctx.lineTo(0, -65);
			clock_ctx.stroke();
			clock_ctx.closePath();
			clock_ctx.restore();
			// 秒针
			clock_ctx.save();
			clock_ctx.lineWidth = 1;
			clock_ctx.strokeStyle = "#ff0000";
			clock_ctx.rotate(sec * 2 * Math.PI / 60);
			clock_ctx.beginPath();
			clock_ctx.moveTo(0, 10);
			clock_ctx.lineTo(0, -75);
			clock_ctx.stroke();
			clock_ctx.closePath();
			clock_ctx.restore();
			// 交叉点装饰
			clock_ctx.beginPath();
			clock_ctx.strokeStyle = "#ff0000";
			clock_ctx.arc(0, 0, 3, 0, 2 * Math.PI, false);
			clock_ctx.fillStyle = "#fff";
			clock_ctx.fill();
			clock_ctx.stroke();
			clock_ctx.closePath();
			// 秒针顶部装饰
			/*clock_ctx.beginPath();
			clock_ctx.strokeStyle="#ff0000";
			clock_ctx.rotate(sec * 2 * Math.PI / 60);
			clock_ctx.arc(0,-70,3,0,2*Math.PI,false);
			clock_ctx.fill();
			clock_ctx.stroke();
			clock_ctx.closePath();
			clock_ctx.restore();*/

			console.log(date);
		}
		date_move();
		setInterval(date_move, 1000);
		var div = document.getElementById('div_clock');
		div.onmousedown = function(ev) {
			var ev = ev || event;
			var disX = ev.pageX - div.offsetLeft;
			var disY = ev.pageY - div.offsetTop;
			document.onmousemove = function(ev) {
				var ev = ev || event;
				var l = ev.pageX - disX;
				var t = ev.pageY - disY;
				div.style.left = l + 'px';
				div.style.top = t + 'px';
			}
			document.onmouseup = function() {
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}


		// 用于确定该点是否位于路径上
		if (ctx.isPointInPath(100, 200)) {
			alert(1);
		}

		// canvas导出成图片显示
		var imgURI = c.toDataURL("image/png");
		var image = document.createElement("img");
		image.src = imgURI;
		document.body.appendChild(image);
	}
})();