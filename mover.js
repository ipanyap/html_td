
/*
	Basic class for all moving things (in terms of changing location).
*/
var Mover = function(x, y, vx, vy, width, height) { //parameters: location, velocity, dimension
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.width = width;
	this.height = height;
	
	//previous frame's location
	this.px = x;
	this.py = y;
};

Mover.prototype.update = function() {
	//record previous location
	this.px = this.x;
	this.py = this.y;
	
	//move
	this.x += this.vx * battleData.speed;
	this.y += this.vy * battleData.speed;
};

Mover.prototype.isColliding = function(mo) { //parameter: other mover object
	var dx = Math.abs(mo.x - this.x);
	var dy = Math.abs(mo.y - this.y);
	
	//check if the two movers intersect each other
	if(dx < (this.width + mo.width)/2 && dy < (this.height + mo.height)/2) {
		return true;
	}
	
	return false;
};

Mover.prototype.hasCrossedWays = function(mo) { //parameter: other mover object
	var this_dx = this.x - this.px;
	var this_dy = this.y - this.py;
	var this_m = this_dy / this_dx; //gradient
	var this_c = this.y - (this.x * this_m); //offset
	
	var other_dx = mo.x - mo.px;
	var other_dy = mo.y - mo.py;
	var other_m = other_dy / other_dx; //gradient
	var other_c = mo.y - (mo.x * other_m); //offset
	
	if(this_m === other_m) { //parallel lines
		return false;
	}
	
	//get the meeting point of the two lines and check if it is within the line section
	var cross_x = (other_c - this_c) / (this_m - other_m);
	if ( (cross_x <= this.px && this.x <= cross_x) || (cross_x <= this.x && this.px <= cross_x) ) {
		return true;
	}
	
	return false;
};