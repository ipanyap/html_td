

var Explosion = function(x, y, r, vr, dr, power) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.vr = vr;
	this.dr = dr;
	this.power = power;
};

Explosion.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.strokeWeight(3);
	processing.stroke(255, 155, 155, 30);
	processing.fill(250, 250, 100, 20);
	processing.ellipse(0, 0, this.r, this.r);
	processing.strokeWeight(1);
	
	processing.popMatrix();
};

Explosion.prototype.update = function() {
	this.r += this.vr * battleData.speed;
	if(this.r > this.dr) {
		this.r = this.dr;
	}
};

Explosion.prototype.affect = function(enemy) {
	enemy.damage += this.power; //damage enemy
};

Explosion.prototype.isWithin = function(enemy) {
	var dx = enemy.x - this.x;
	var dy = enemy.y - this.y;
	var dist = Math.sqrt(dx * dx + dy * dy);
	
	if(dist < this.r/2) {
		return true;
	}
	return false;
};


var FrostWave = function(x, y, speed, range, power) {
	Explosion.call(this, x, y, 0, speed, range, power);
}

FrostWave.prototype = Object.create(Explosion.prototype);

FrostWave.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.strokeWeight(3);
	processing.stroke(210, 240, 255, 100);
	processing.fill(210, 240, 250, 50);
	processing.ellipse(0, 0, this.r, this.r);
	processing.strokeWeight(1);
	
	processing.popMatrix();
};

FrostWave.prototype.affect = function(enemy) {
	enemy.freeze(this.power);
};


var Shockwave = function(x, y, speed, range, power, angle) {
	Explosion.call(this, x, y, 0, speed, range, power);
	this.start = angle - Math.PI/6;
	this.stop = angle + Math.PI/6;
};

Shockwave.prototype = Object.create(Explosion.prototype);

Shockwave.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.strokeWeight(3);
	processing.stroke(210, 240, 255, 100);
	processing.noFill();
	
	for(var i = this.r; i > 0; i -= 50) {
		processing.arc(0, 0, i, i, this.start, this.stop);
	}
	
	processing.popMatrix();
};

Shockwave.prototype.isWithin = function(enemy) {
	var dx = enemy.x - this.x;
	var dy = enemy.y - this.y;
	var dist = Math.sqrt(dx * dx + dy * dy);
	var direction = Math.atan2(dy, dx);
	
	if(dist < this.r/2 && direction >= this.start && direction <= this.stop) {
		return true;
	}
	
	return false;
};


/*
	Basic class for all weapon shots.
	This class is inherited from Mover.
*/
var Shot = function(x, y, vx, vy, width, height) { //parameters: location, speed and shot's information
	Mover.call(this, x, y, vx, vy, width, height);
	this.domain = "all";
	this.penetrating = false;
};

Shot.prototype = Object.create(Mover.prototype);

Shot.prototype.getExplosion = function() {
	return null;
};

/*
	Shot 1: Bullet
*/
var Bullet = function(x, y, dx, dy, power, speed) { //parameters: start location and target location
	this.data = shotData["Bullet"];
	
	this.power = power; //the damage caused by the shot
	this.speed = speed; //speed magnitude of the shot
	
	//get speed direction
	var dist = Math.sqrt(dx * dx + dy * dy);
	var vx = (speed / dist) * dx;
	var vy = (speed / dist) * dy;
	
	Shot.call(this, x, y, vx, vy, this.data.width, this.data.height);
};

Bullet.prototype = Object.create(Shot.prototype);

Bullet.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	processing.fill(200, 200, 200);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.ellipse(0, 0, this.width, this.height);
	
	processing.popMatrix();
};

/*
	Shot 2: Fireball
*/
var Fireball = function(x, y, dx, dy, power, speed) { //parameters: start location and target location
	this.data = shotData["Fireball"];
	
	this.power = power; //the damage caused by the shot
	this.speed = speed; //speed magnitude of the shot
	
	//get speed direction
	var dist = Math.sqrt(dx * dx + dy * dy);
	var vx = (speed / dist) * dx;
	var vy = (speed / dist) * dy;
	this.angle = Math.atan2(dy, dx);
	
	this.particles = [];
	for(var i = 0; i < 15; i++) {
		this.particles.push({ x : Math.random() * -20, y : Math.random() * 20 - 10, size : Math.random() * 4 });
	}
	this.green = 250;
	this.blue = 50;
	
	Shot.call(this, x, y, vx, vy, this.data.width, this.data.height);
	this.domain = "land";
};

Fireball.prototype = Object.create(Shot.prototype);

Fireball.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.noStroke();
	processing.fill(250, this.green, this.blue);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.rotate(this.angle);
	
	processing.ellipse(0, 0, this.width, this.height);
	
	for(var i = this.particles.length-1; i >= 0; i--) {
		var particle = this.particles[i];
		processing.ellipse(particle.x, particle.y, particle.size, particle.size);
	}
	
	processing.popMatrix();
};

Fireball.prototype.update = function() {
	Shot.prototype.update.call(this);
	
	if(this.green > 50) { //change color
		this.green -= 2 * battleData.speed;
		this.blue -= 0.2 * battleData.speed;
	}
	
	for(var i = this.particles.length-1; i >= 0; i--) { //change particle size and relative position
		var particle = this.particles[i];
		particle.x -= 0.2 * battleData.speed;
		particle.size *= Math.pow(0.98, battleData.speed);
		if(particle.size < 1) {
			this.particles.splice(i, 1);
		}
	}
};

Fireball.prototype.getExplosion = function() {
	return new Explosion(this.x, this.y, this.width, 1.5, 50, this.power/4);
};


/*
	Shot 3: Jolt
*/
var Jolt = function(x, y, enemy, power, speed) { //parameters: start location and target location
	this.data = shotData["Jolt"];
	
	this.power = power; //the damage caused by the shot
	this.speed = speed; //speed magnitude of the shot
	
	Shot.call(this, x, y, 0, 0, this.data.width, this.data.height);
	
	this.enemy = enemy;
	this.life = 20;
};

Jolt.prototype = Object.create(Shot.prototype);

Jolt.prototype.draw = function(processing) {
	processing.strokeWeight(2);
	processing.stroke(200, 200, 0);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	var dx = this.enemy.x - this.x;
	var dy = this.enemy.y - this.y;
	var m = dy / dx;
	var step = dx / 5;
	
	var current_x = 0;
	var current_y = 0;
	for(var i = 1; i <= 4; i++) {
		var temp_x = i * step;
		var temp_y = (m * i * step) + Math.floor(((Math.random() * 0.5) - 0.5) * step);
		
		processing.line(current_x, current_y, temp_x, temp_y);
		current_x = temp_x;
		current_y = temp_y;
	}
	
	processing.popMatrix();
};

Jolt.prototype.update = function() {
	this.life -= battleData.speed;
	
	if(this.life <= 0) {
		this.x = this.enemy.x;
		this.y = this.enemy.y;
	}
};


/*
	Shot 4: LaserLight
*/
var LaserLight = function(x, y, dx, dy, power, speed) { //parameters: start location and target location
	this.data = shotData["LaserLight"];
	
	this.power = power; //the damage caused by the shot
	this.speed = speed; //speed magnitude of the shot

	//get speed direction
	var dist = Math.sqrt(dx * dx + dy * dy);
	var vx = (speed / dist) * dx;
	var vy = (speed / dist) * dy;
	this.angle = Math.atan2(vy, vx);

	Shot.call(this, x, y, vx, vy, this.data.width, this.data.height);
	
	this.length = 10;
	this.penetrating = true;
};

LaserLight.prototype = Object.create(Shot.prototype);

LaserLight.prototype.draw = function(processing) {
	processing.noStroke();
	processing.fill(200, 200, 200);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.rotate(this.angle);
	
	processing.rect(5 - this.length, -5, this.length, 10, 5);
	processing.fill(0, 250, 250);
	processing.rect(2 - (this.length - 6), -2, this.length - 6, 4, 3);
	
	processing.popMatrix();
};

LaserLight.prototype.update = function() {
	if(this.length < 100) {
		this.length += 5 * battleData.speed;
	}
	Shot.prototype.update.call(this);
};



/*
	Basic class for all weapons.
*/
var Weapon = function(x, y, data) { //parameter: location and weapon's information
	this.x = x;
	this.y = y;
	
	this.angle = 0; //used for head's rotation
	this.scale = 1; //used for scaling
	this.lastShot = 0; //record the timestamp (in frame) of last shot
	
	this.reload_time = data.reload_time; //reload interval between each shoot
	this.range = data.range; //sight range
	this.price = data.price; //cost of the weapon
	this.power = data.power;
	this.speed = data.speed;
	
	this.level = 0;
	this.upgrades = data.upgrades;
	
	this.shoot_point = 0;
	
	this.target_mode = "single";
};

Weapon.prototype.distance = function(enemy) { //get distance from the enemy
	var dist_x = enemy.x - this.x;
	var dist_y = enemy.y - this.y;
	
	return Math.sqrt(dist_x*dist_x + dist_y*dist_y);
};

Weapon.prototype.canTarget = function(enemy) {
	if(this.distance(enemy) > this.range) { //outside of sight area
		return false;
	}
	return true;
};

Weapon.prototype.target = function(enemy) { //rotate the head toward the target
	this.angle = Math.atan2(enemy.y - this.y, enemy.x - this.x);
};

Weapon.prototype.attack = function(enemy) { //fire shot toward the target
	//return new Bullet(this.x + this.shoot_point * Math.cos(this.angle), this.y + this.shoot_point * Math.sin(this.angle), enemy.x - this.x, enemy.y - this.y);
};

Weapon.prototype.upgrade = function() {
	if(this.level < this.upgrades.length) {
		this.reload_time -= this.upgrades[this.level].reload_time;
		this.range += this.upgrades[this.level].range;
		this.power += this.upgrades[this.level].power;
		this.speed += this.upgrades[this.level].speed;
		this.level++;
	}
};

Weapon.prototype.value = function() {
	return Math.floor(0.75 * this.price);
};

Weapon.prototype.drawLevel = function(processing) {
	if(this.level === 0) {
		return;
	}
	
	processing.stroke(250, 250, 0, 200);
	processing.strokeWeight(3);
	for(var i = 0; i < this.level; i++) {
		processing.line(15, 2 + (i * 5), 10, 5 + (i * 5));
		processing.line(15, 2 + (i * 5), 20, 5 + (i * 5));
	}
	processing.strokeWeight(1);
};

Weapon.prototype.update = function() {
};

/*
	Weapon 1: Turret
*/
var Turret = function(x, y) {
	this.name = "Turret";
	Weapon.call(this, x, y, weaponData[this.name]);
	
	this.shoot_point = 20;
};

Turret.prototype = Object.create(Weapon.prototype);

Turret.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	processing.fill(200, 50, 50);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	processing.rect(-10, -10, 20, 20); //body
	
	processing.rotate(this.angle); //rotate the head
	
	processing.rect(0, -2, 20, 4); //cannon
	processing.rect(-5, -5, 10, 10); //rotor
	
	processing.rotate(-this.angle);
	
	this.drawLevel(processing);
	
	processing.popMatrix();
};

Turret.prototype.attack = function(enemy) { //fire shot toward the target
	return new Bullet(this.x + this.shoot_point * Math.cos(this.angle), this.y + this.shoot_point * Math.sin(this.angle), enemy.x - this.x, enemy.y - this.y, this.power, this.speed);
};

Turret.prototype.get = function() {
	return Turret;
};

/*
	Weapon 2: Cannon
*/
var Cannon = function(x, y) {
	this.name = "Cannon";
	Weapon.call(this, x, y, weaponData[this.name]);
	
	this.shoot_point = 18;
};

Cannon.prototype = Object.create(Weapon.prototype);

Cannon.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	processing.fill(50, 200, 50);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	processing.ellipse(0, 0, 25, 25);
	processing.ellipse(0, 0, 20, 20); //body
	
	processing.rotate(this.angle);
	
	processing.ellipse(0, 0, 10, 10);
	processing.noStroke();
	processing.rect(0, -5, 15, 10);
	processing.stroke(0, 0, 0);
	processing.line(0, -5, 15, -5);
	processing.line(0, 5, 15, 5);
	processing.ellipse(15, 0, 5, 10);
	
	processing.rotate(-this.angle);
	
	this.drawLevel(processing);
	
	processing.popMatrix();
};

Cannon.prototype.canTarget = function(enemy) {
	if(enemy.domain === "air") {
		return false;
	}
	return Weapon.prototype.canTarget.call(this, enemy);
};

Cannon.prototype.attack = function(enemy) { //fire shot toward the target
	return new Fireball(this.x + this.shoot_point * Math.cos(this.angle),
						this.y + this.shoot_point * Math.sin(this.angle),
						enemy.x - this.x, enemy.y - this.y, this.power, this.speed);
};

Cannon.prototype.get = function() {
	return Cannon;
};

/*
	Weapon 3: Frost
*/
var Frost = function(x, y) {
	this.name = "Frost";
	Weapon.call(this, x, y, weaponData[this.name]);
	this.target_mode = "all";
};

Frost.prototype = Object.create(Weapon.prototype);

Frost.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	processing.fill(50, 200, 200);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	processing.rect(-10, -10, 19, 19); //body
	
	processing.rotate(this.angle);
	
	processing.rect(-8, -2, 15, 3);
	processing.rect(-2, -8, 3, 15);
	processing.ellipse(0, 0, 10, 10);
	
	processing.rotate(-this.angle);
	
	this.drawLevel(processing);
	
	processing.popMatrix();
};

Frost.prototype.update = function() {
	this.angle += 0.1 * battleData.speed;
	this.angle %= 360;
};

Frost.prototype.target = function(enemy) {
};

Frost.prototype.attack = function(enemy) { //fire shot toward the target
	return new FrostWave(this.x, this.y, this.speed, this.range * 2, this.power);
};

Frost.prototype.get = function() {
	return Frost;
};

/*
	Weapon 4: Transmitter
*/
var Transmitter = function(x, y) {
	this.name = "Transmitter";
	Weapon.call(this, x, y, weaponData[this.name]);
	this.target_mode = "all";
};

Transmitter.prototype = Object.create(Weapon.prototype);

Transmitter.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	processing.fill(100, 100, 240);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	processing.ellipse(0, 0, 20, 20); //body
	
	processing.rotate(this.angle);
	processing.rect(-6, -6, 11, 11);
	processing.rect(-2, -8, 3, 15);
	processing.rotate(150);
	processing.rect(-7, 4, 3, 9);
	processing.rotate(-300);
	processing.rect(-7, -14, 3, 9);
	processing.rotate(150);
	
	processing.noStroke();
	processing.rect(-1, -7, 2, 15);
	processing.stroke(0, 0, 0);
	processing.ellipse(0, 0, 7, 7);
	
	processing.rotate(-this.angle);
	
	this.drawLevel(processing);
	
	processing.popMatrix();
};

Transmitter.prototype.attack = function(enemy) { //emit wave toward the target
	var dx = enemy.x - this.x;
	var dy = enemy.y - this.y;
	return new Shockwave(this.x, this.y, this.speed, this.range * 2, this.power, Math.atan2(dy, dx));
};

Transmitter.prototype.get = function() {
	return Transmitter;
};

/*
	Weapon 5: Electrocutor
*/
var Electrocutor = function(x, y) {
	this.name = "Electrocutor";
	Weapon.call(this, x, y, weaponData[this.name]);
	this.current = [
		{ x : 0, y : 0 },
		{ x : 3, y : 2 },
		{ x : 6, y : 8 },
		{ x : 9, y : 9 }
	];
	this.time_ctr = 0;
	this.targets = [];
	this.target_mode = "multiple";
};

Electrocutor.prototype = Object.create(Weapon.prototype);

Electrocutor.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	processing.fill(95, 100, 100);
	processing.rect(-10, -10, 19, 19); //body
	
	processing.rotate(this.angle);
	
	processing.fill(30, 150, 150);
	processing.ellipse(0, 0, 12, 12);
	
	processing.fill(250, 200, 0);
	processing.ellipse(-9, -9, 4, 4);
	processing.ellipse(9, -9, 4, 4);
	processing.ellipse(-9, 9, 4, 4);
	processing.ellipse(9, 9, 4, 4);
	
	processing.stroke(200, 200, 0);
	processing.strokeWeight(2);
	var x_flag = 1;
	var y_flag = 1;
	for(var t = 0; t < 4; t++) { //this '4' is for [ left top, right top, right bottom, left bottom]
		if(t % 2 === 1) { x_flag *= -1; } //negate x property for t = 1 and 3
		else { y_flag *= -1; } //negate y property for t = 0 and 2
		for(var i = 0;i < this.current.length-1; i++) {
			processing.line(this.current[i].x * x_flag, this.current[i].y * y_flag,
							this.current[i+1].x * x_flag, this.current[i+1].y * y_flag);
		}
	}
	processing.strokeWeight(1);
	
	processing.rotate(-this.angle);
	
	this.drawLevel(processing);
	
	processing.popMatrix();
};

Electrocutor.prototype.update = function() {
	this.time_ctr += battleData.speed;
	
	if(this.time_ctr % 8 >= 0) {
		for(var i = 1; i < this.current.length-1; i++) {
			this.current[i].y = Math.floor(Math.random() * 8) - 4 + this.current[i].x;
		}
		this.time_ctr = 0;
	}
	
	if(this.targets.length > 0) {
		this.targets.splice(0, this.targets.length);
	}
};

Electrocutor.prototype.target = function(enemy) {
	this.targets.push(enemy);
};

Electrocutor.prototype.attack = function(enemy) {
	if(this.targets.length === 0) {
		return null;
	}
	
	var t = this.targets.pop();
	return new Jolt(this.x, this.y, t, this.power, this.speed);
};

Electrocutor.prototype.get = function() {
	return Electrocutor;
};


/*
	Weapon 6: Laser
*/
var Laser = function(x, y) {
	this.name = "Laser";
	Weapon.call(this, x, y, weaponData[this.name]);
	
	this.shoot_point = 20;
};

Laser.prototype = Object.create(Weapon.prototype);

Laser.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	processing.fill(50, 50, 200);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	processing.ellipse(0, 0, 25, 25);
	processing.ellipse(0, 0, 20, 20); //body
	
	processing.rotate(this.angle);
	
	processing.rect(0, -2, 20, 4);
	processing.rect(-8, -5, 16, 10);
	
	processing.rotate(-this.angle);
	
	this.drawLevel(processing);
	
	processing.popMatrix();
};

Laser.prototype.attack = function(enemy) { //fire shot toward the target
	return new LaserLight(this.x + this.shoot_point * Math.cos(this.angle), this.y + this.shoot_point * Math.sin(this.angle), enemy.x - this.x, enemy.y - this.y, this.power, this.speed);
};

Laser.prototype.get = function() {
	return Laser;
};

var weaponList = [
	{ name : "Turret", func : Turret },
	{ name : "Cannon", func : Cannon },
	{ name : "Frost", func : Frost },
	{ name : "Transmitter", func : Transmitter },
	{ name : "Electrocutor", func : Electrocutor },
	{ name : "Laser", func : Laser }
];
