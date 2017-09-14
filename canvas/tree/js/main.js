var Branch = function() {
	this.canvas = canvas;
	this.context = canvas.getContext("2d");
	this.x = canvas.width / 2;
	this.y = canvas.height;
	this.radius = 10;

	this.fillStyle = "#000";
	this.shadowColor = "#000";
	this.shadowBlur = "6";

	this.speed = width / 500;
	this.angle = Math.PI / 2;
	this.generation = 0;
	this.distance = 0;
}

Branch.prototype = {
	process: function() {
		this.draw();
		this.iterate();
		this.split();
		this.die();
	},

	draw: function() {
		var context = this.context;
		context.save();
		context.fillStyle = this.fillStyle;
		context.shadowColor = this.shadowColor;
		context.shadowBlur = this.shadowBlur;
		context.beginPath();
		context.moveTo(this.x,this.y);
		context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
		context.closePath();
		context.fill();
		context.restore();
	},
	iterate: function() {
		var deltaX = this.speed * Math.cos(this.angle);
		var deltaY = -this.speed * Math.sin(this.angle);//值为负数，向上生长

		this.x += deltaX;
		this.y += deltaY;

		this.radius *= (0.99 - this.generation / 250);

		var deltaDistance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
		this.distance += deltaDistance;

		if (deltaDistance > this.radius * 2) {
			deltaDistance = this.radius * 2;
		}
		//角度在-0.1~0.1之间偏转
		this.angle += Math.random() / 5 - 1 / 10;
	},
	split: function() {
		var splitChance = 0;
		if (this.generation == 1) {
			splitChance = this.distance / height - 0.2;
		} else if (this.generation < 3) {
			splitChance = this.distance / height - 0.1;
		}

		if (Math.random() < splitChance) {
			var n = 2 + Math.round(Math.random() * 3);//分支的数量
			for (var i = 0; i < n; i++) {
				var branch = new Branch();
				branch.x = this.x;
				branch.y = this.y;
				branch.fillStyle = this.fillStyle;
				branch.angle = this.angle;
				branch.radius = this.radius * 0.9;
				branch.generation++;

				branches.add(branch);
			}
			branches.remove(this);
		}
		
	},
	die: function() {
		if (this.radius < 0.5) {
			branches.remove(this);
		}
	}
};

var BranchCollection = function() {
	this.branches = [];
	this.canvas = canvas;
}
BranchCollection.prototype = {
	add: function(branch) {
		this.branches.push(branch);
	},

	process: function() {
		for (var i in this.branches) {
			this.branches[i].process();
		}
	},
	remove: function(branch) {
		for (var i in this.branches) {
			if (this.branches[i] === branch) {
				this.branches.splice(i, 1);
			}
		}
	}
};

var canvas = document.getElementById("tree"),
	width = window.innerWidth,
	height = window.innerHeight;
canvas.width = width;
canvas.height = height;

var n = 2 + Math.random() * 3;
var initialRadius = width / 50;
var branches = new BranchCollection();
for (var i = 0; i < n; i++) {
	branch = new Branch();

	branch.x = width / 2 - initialRadius + i * 2 * initialRadius / n;
	branch.radius = initialRadius;

	branches.add(branch);
}

var interval = setInterval(function() {
	branches.process();

	console.log(branches.branches.length);

	if (branches.branches.length === 0) {
		clearInterval(interval);
	}
}, 30);