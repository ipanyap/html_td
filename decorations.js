
var skull = {
	x : 0,
	y : 0,
	angle : 0
};

skull.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.fill(255, 255, 255);
	processing.ellipse(0, 0, 45, 45);
	
	processing.fill(10, 10, 10);
	processing.ellipse(0, 0, 40, 40);
	
	processing.noStroke();
	processing.fill(255, 255, 255);
	
	processing.ellipse(0, -3, 30, 30);
	processing.rect(-9, 8, 3, 6, 2);
	processing.rect(-4, 8, 3, 6, 2);
	processing.rect(1, 8, 3, 6, 2);
	processing.rect(6, 8, 3, 6, 2);
	
	processing.fill(10, 10, 10);
	processing.ellipse(-6, -4, 8, 8);
	processing.ellipse(6, -4, 8, 8);
	
	processing.triangle(0, 2, 3, 6, -3, 6);
	
	processing.rotate(this.angle);
	processing.triangle(30, 0, 25, 5, 25, -5);
	
	processing.popMatrix();
};

skull.set = function(x, y, point_x, point_y) {
	this.x = x;
	this.y = y;
	this.angle = Math.atan2(point_y - y, point_x - x);
};

var base = {
	x: 0,
	y: 0
};

base.set = function(x, y) {
	this.x = x;
	this.y = y;
};

base.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.fill(100, 100, 100);
	processing.rect(-60, -60, 120, 120);
	
	processing.fill(150, 150, 150);
	processing.ellipse(0, 0, 70, 70);
	
	processing.rotate(Math.PI/4);
	for(var i = 0; (i * 0.5) + 0.25 < 2; i++) {
		processing.rect(-65, -13, 33, 26, 5);
		processing.rotate(Math.PI/2);
	}
	processing.rotate(-Math.PI/4);
	
	for(var i = 0; i < 8; i++) {
		processing.line(25, -10, 25, 10);
		processing.rotate(Math.PI/4);
	}
	
	for(var i = 0; i < 4; i++) {
		processing.rect(5, -4, 15, 3);
		processing.rect(5, 1, 15, 3);
		processing.rotate(Math.PI/2);
	}
	processing.ellipse(0, 0, 30, 30);
	
	processing.popMatrix();
};