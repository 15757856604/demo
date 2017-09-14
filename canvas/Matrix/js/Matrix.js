(function() {
	var c = document.getElementById("can"),
		ctx = c.getContext('2d'),
		w = c.width = window.innerWidth,
		h = c.height = window.innerHeight;

	var words = "1234567890qwertyuiopasdfghjklzxcvbnm\<\>\/\?\;\:\'\"[]{}-=_+!@#$%^&*()`~QWERTYUIOPASDFGHJKLZXCVBNM",
		word_arr = words.split(''), // 放入数组
		font_size = 16,
		font_color = "#33ff33",
		clear_color = "rgba(0,0,0,0.1)",
		clumns = w / font_size, // 文字降落列数
		drops = [];

	for (var i = 0; i < clumns; i++) {
		drops[i] = 1;
	}

	function draw() {
		ctx.save();
		ctx.fillStyle = font_color;
		ctx.font = font_size + 'px Arial';
		for (var i = 0; i < drops.length; i++) {
			var content = word_arr[Math.floor(Math.random() * word_arr.length)];
			ctx.fillText(content, i * font_size, drops[i] * font_size);
			if (drops[i] * font_size > h && Math.random() > 0.98) {
				drops[i] = 0;
			}
			drops[i]++;
		}
		ctx.restore();

		ctx.fillStyle = clear_color;
		ctx.fillRect(0, 0, w, h);
	}

	// window.requestAnimationFrame(draw);

	setInterval(draw, 100);
}())