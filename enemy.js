
/*
	Basic class for all enemies.
	This class is inherited from Mover.
*/
var Enemy = function(x, y, data) { //parameters: location and enemy's information
	Mover.call(this, x, y, 0, 0, data.width, data.height);
	
	this.dest_x = x; //destination x variable
	this.dest_y = y; //destination y variable
	this.angle = 0;
	this.scale = 1;
	this.step = -1; //counter for the tile number along the path
	
	this.speed = data.speed;
	this.reward = data.reward; //money reward if this enemy is destroyed
	this.domain = data.domain;
	this.health = data.hp;
	this.exp = data.exp;
	this.damage = 0; //keep track of the damage taken
	
	this.restitution = 1.0;
	this.freeze_ctr = 0;
	this.for_display = false;
};

Enemy.prototype = Object.create(Mover.prototype);

Enemy.prototype.setDestination = function(dest_x, dest_y) {
	this.dest_x = dest_x;
	this.dest_y = dest_y;
	
	var dy = dest_y - this.y;
	var dx = dest_x - this.x;
	var dist = Math.sqrt(dx * dx + dy * dy);
	
	if(dist === 0) { //not moving anymore
		this.vx = 0;
		this.vy = 0;
	}
	else { //set velocity to move into the destination
		this.vx = (this.speed / dist) * dx;
		this.vy = (this.speed / dist) * dy;
		this.angle = Math.atan2(dy, dx);
	}
	//console.log("pos: (" + this.x + "," + this.y + ") dest: (" + this.dest_x + "," + this.dest_y + ")");
};

Enemy.prototype.update = function() {	
	//record previous location
	this.px = this.x;
	this.py = this.y;
	
	//move x
	if( Math.abs(this.dest_x - this.x) < Math.abs(this.vx * this.restitution * battleData.speed) ) { //destination x is too close
		this.x = this.dest_x;
		this.vx = 0;
	}
	else {
		this.x += this.vx * this.restitution * battleData.speed;
	}
	
	//move y
	if( Math.abs(this.dest_y - this.y) < Math.abs(this.vy * this.restitution * battleData.speed) ) { //destination y is too close
		this.y = this.dest_y;
		this.vy = 0;
	}
	else {
		this.y += this.vy * this.restitution * battleData.speed;
	}
	
	if(this.freeze_ctr > 0) {
		this.freeze_ctr -= battleData.speed;
		
		if(this.freeze_ctr <= 0) { //no longer freezing, back to normal speed
			this.restitution = 1.0;
		}
	}
};

Enemy.prototype.drawHealth = function(processing) { //draw HP bar on top of the enemy
	if(this.for_display === true) {
		return;
	}
	
	//draw HP frame
	processing.stroke(255, 255, 255);
	processing.noFill();
	processing.rect(-15, -26, 30, 6);
	
	//draw HP
	processing.noStroke();
	var percent = (this.health - this.damage)/this.health;
	if(percent > 0.75) { processing.fill(0, 200, 0); }
	else if(percent > 0.5) { processing.fill(250, 250, 0); }
	else if(percent > 0.25) { processing.fill(250, 150, 0); }
	else { processing.fill(200, 0, 0); }
	processing.rect(-14, -25, 28 * percent, 4);
	
	//return stroke color to black
	processing.stroke(0, 0, 0);
};

Enemy.prototype.freeze = function(power) {
	this.freeze_ctr = 300 * power;
	this.restitution = 0.5;
};

/*
	Enemy 1: Quadrone
*/
var Quadrone = function(x, y) {
	this.name = "Quadrone";
	Enemy.call(this, x, y, enemyData[this.name]);
	this.leg_offset = 0;
	this.leg_speed = 0.1;
};

Quadrone.prototype = Object.create(Enemy.prototype);

Quadrone.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	var stroke = processing.color(0, 0, 0);
	if(this.freeze_ctr > 0) {
		stroke = processing.color(210, 240, 255);
	}
	processing.stroke(stroke);
	
	processing.rotate(150 + this.angle);
	
	processing.fill(150, 150, 150);
	processing.rect(-14, -3, 28, 6, 2); //draw quad legs
	processing.rect(-3, -14, 6, 28, 2);
	processing.triangle(-13, -2, -13, 3, -15 - this.leg_offset, 0);
	processing.triangle(13, -2, 13, 3, 15 + this.leg_offset, 0);
	processing.triangle(-2, -13, 3, -13, 0, -15 - this.leg_offset);
	processing.triangle(-2, 13, 3, 13, 0, 15 + this.leg_offset);
	
	processing.rotate(-150);
	processing.ellipse(0, 0, 20, 20); //body
	
	processing.fill(200, 0, 0);
	processing.ellipse(6, 0, 4, 8); //eye
	
	processing.rotate(-this.angle);
	this.drawHealth(processing);
	
	processing.popMatrix();
};

Quadrone.prototype.update = function() {
	Enemy.prototype.update.call(this);
	
	this.leg_offset += this.leg_speed * this.restitution * battleData.speed;
	if(this.leg_offset >= 2) {
		this.leg_speed = -0.1;
	}
	else if(this.leg_offset <= 0) {
		this.leg_speed = 0.1;
	}
};

Quadrone.prototype.get = function() {
	return Quadrone;
};

/*
	Enemy 2: Hovercraft
*/
var Hovercraft = function(x, y) {
	this.name = "Hovercraft";
	Enemy.call(this, x, y, enemyData[this.name]);
};

Hovercraft.prototype = Object.create(Enemy.prototype);

Hovercraft.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	processing.rotate(this.angle);
	
	var stroke = processing.color(0, 0, 0);
	if(this.freeze_ctr > 0) {
		stroke = processing.color(210, 240, 255);
	}
	processing.stroke(stroke);
	
	processing.fill(200, 200, 200);
	processing.ellipse(-11, -6, 5, 5);
	processing.ellipse(-11, 6, 5, 5);
	processing.rect(-11, -9, 20, 2, 3); //side gun
	processing.rect(-11, 6, 20, 2, 3);
	
	processing.rect(-18, -6, 3, 4, 2); //back thruster
	processing.rect(-18, 1, 3, 4, 2);
	
	processing.ellipse(-9, 0, 16, 13); //back body
	processing.fill(50, 50, 50);
	processing.ellipse(7, 0, 12, 10); //front body
	processing.fill(200, 200, 200);
	processing.noStroke();
	processing.rect(-5, -5, 12, 9); //mid body
	processing.ellipse(7, 0, 8, 6);
	processing.stroke(stroke);
	processing.line(-4, -5, 7, -5);
	processing.line(-4, 5, 7, 5);
	
	processing.fill(60, 60, 60);
	processing.noStroke();
	processing.rect(-9, -3, 10, 6, 4);
	
	processing.rotate(-this.angle);
	this.drawHealth(processing);
	
	processing.popMatrix();
};

Hovercraft.prototype.get = function() {
	return Hovercraft;
};

/*
	Enemy 3: SteelTank
*/
var SteelTank = function(x, y) {
	this.name = "SteelTank";
	Enemy.call(this, x, y, enemyData[this.name]);
};

SteelTank.prototype = Object.create(Enemy.prototype);

SteelTank.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	var stroke = processing.color(0, 0, 0);
	if(this.freeze_ctr > 0) {
		stroke = processing.color(210, 240, 255);
	}
	processing.stroke(stroke);
	
	processing.rotate(this.angle);
	
	processing.fill(110, 123, 139);
	processing.rect(-10, -4, 16, 8); //body parts
	processing.rect(-10, -8, 20, 5, 3);
	processing.rect(-10, 4, 20, 5, 3);
	
	processing.rotate(Math.PI/4);
	processing.rect(-4, -4, 8, 8); //turret rotor
	processing.rotate(-Math.PI/4);
	
	processing.rect(-6, -1, 22, 3, 2); //turret
	
	processing.rotate(-this.angle);
	this.drawHealth(processing);
	
	processing.popMatrix();
};

SteelTank.prototype.get = function() {
	return SteelTank;
};


/*
	Enemy 4: MagmaTank
*/
var MagmaTank = function(x, y) {
	this.name = "MagmaTank";
	Enemy.call(this, x, y, enemyData[this.name]);
};

MagmaTank.prototype = Object.create(Enemy.prototype);

MagmaTank.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	var stroke = processing.color(0, 0, 0);
	if(this.freeze_ctr > 0) {
		stroke = processing.color(210, 240, 255);
	}
	processing.stroke(stroke);
	
	processing.rotate(this.angle);
	
	processing.fill(220, 20, 60);
	processing.rect(-10, -4, 16, 8); //body parts
	processing.rect(-10, -8, 20, 5, 3);
	processing.rect(-10, 4, 20, 5, 3);
	
	processing.rotate(Math.PI/4);
	processing.rect(-4, -4, 8, 8); //turret rotor
	processing.rotate(-Math.PI/4);
	
	processing.rect(-6, -1, 22, 3, 2); //turret
	
	processing.rotate(-this.angle);
	this.drawHealth(processing);
	
	processing.popMatrix();
};

MagmaTank.prototype.freeze = function(power) {
	this.freeze_ctr = 20;
	this.restitution = 1.0;
};

MagmaTank.prototype.get = function() {
	return MagmaTank;
};

/*
	Enemy 5: EagleJet
*/
var EagleJet = function(x, y) {
	this.name = "EagleJet";
	Enemy.call(this, x, y, enemyData[this.name]);
};

EagleJet.prototype = Object.create(Enemy.prototype);

EagleJet.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	var stroke = processing.color(0, 0, 0);
	if(this.freeze_ctr > 0) {
		stroke = processing.color(210, 240, 255);
	}
	processing.stroke(stroke);
	
	processing.rotate(this.angle);
	
	processing.fill(150, 200, 200);
	
	processing.triangle(5, 0, -10, 10, -10, -10); //wing
	processing.triangle(13, 0, 0, -4, 0, 4);//main body
	processing.rect(-13, -4, 13, 7, 3);
	processing.noStroke();
	processing.rect(-12, -3, 13, 5); //backbone
	processing.stroke(stroke);
	processing.line(-13, 0, -5, 0);
	processing.line(-5, 0, 0, -3);
	processing.line(-5, 0, 0, 3);
	
	processing.line(-10, -4, -10, 4);
	
	processing.fill(0, 0, 0);
	processing.ellipse(2, 0, 5, 2); //cockpit
	processing.noStroke();
	processing.fill(200, 0, 0);
	processing.triangle(13, 0, 6, -2, 6, 2); //decorations
	processing.triangle(-10, -10, -10, -7, -7, -8);
	processing.triangle(-10, 10, -10, 7, -7, 8);
	
	processing.rotate(-this.angle);
	this.drawHealth(processing);
	
	processing.popMatrix();
};

EagleJet.prototype.get = function() {
	return EagleJet;
};

/*
	Enemy 6: SonicRocket
*/
var SonicRocket = function(x, y) {
	this.name = "SonicRocket";
	Enemy.call(this, x, y, enemyData[this.name]);
};

SonicRocket.prototype = Object.create(Enemy.prototype);

SonicRocket.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	var stroke = processing.color(0, 0, 0);
	if(this.freeze_ctr > 0) {
		stroke = processing.color(210, 240, 255);
	}
	processing.stroke(stroke);
	
	processing.rotate(this.angle);
	
	processing.fill(255, 120, 80);
	processing.ellipse(5, 0, 20, 10); //nose
	processing.noStroke();
	processing.rect(-10, -6, 15, 11);
	processing.stroke(stroke);
	processing.line(-10, -5, 5, -5);
	processing.line(-10, 5, 5, 5);
	processing.ellipse(-15, 0, 4, 14);
	processing.noStroke();
	processing.rect(-15, -7, 12, 13);
	processing.stroke(stroke);
	processing.line(-15, -6, -3, -6);
	processing.line(-15, 6, -3, 6);
	processing.ellipse(-2, 0, 3, 10);
	processing.noStroke();
	processing.rect(-2, -4, 2, 8);
	processing.stroke(stroke);
	processing.triangle(-12, -4, -5, -4, -14, -12);
	processing.triangle(-12, 4, -5, 4, -14, 12);
	
	processing.fill(50, 50, 50);
	processing.arc(8, 0, 13, 9, -Math.PI*0.45, Math.PI*0.45);
	processing.noFill();
	processing.arc(10, 0, 4, 9, Math.PI*0.55, Math.PI*1.55);
	
	processing.rotate(-this.angle);
	this.drawHealth(processing);
	
	processing.popMatrix();
};

SonicRocket.prototype.get = function() {
	return SonicRocket;
};


/*
	Enemy 7: Phantom
*/
var Phantom = function(x, y) {
	this.name = "Phantom";
	Enemy.call(this, x, y, enemyData[this.name]);
};

Phantom.prototype = Object.create(Enemy.prototype);

Phantom.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	processing.scale(this.scale);
	
	var stroke = processing.color(0, 0, 0);
	if(this.freeze_ctr > 0) {
		stroke = processing.color(210, 240, 255);
	}
	processing.stroke(stroke);
	
	processing.rotate(this.angle);
	
	processing.fill(100, 100, 100);
	
	processing.triangle(-8, 0, -4, -6, -4, 6);
	processing.triangle(13, 0, -3, 0, -10, 11);
	processing.triangle(13, 0, -3, 0, -10, -11);
	processing.noStroke();
	processing.triangle(13, 0, -5, -6, -5, 6);
	processing.stroke(stroke);
	
	processing.fill(150, 150, 150);
	processing.rect(3, -2, 3, 3);
	
	processing.line(-3, -2, 1, -2);
	processing.line(-3, 2, 1, 2);
	
	processing.rotate(-this.angle);
	this.drawHealth(processing);
	
	processing.popMatrix();
};

Phantom.prototype.get = function() {
	return Phantom;
};


/*
	The generator for enemy's wave.
	Contructor receives parameter waves: an array of arrays consisting of enemies formation in a wave
	Example of wave array will be:
	[
		[
			{ enemy: Airplane, amount: 2 }, //send 2 Airplanes
			{ enemy: Tank, amount: 3 }, //then send 3 Tanks
			{ enemy: Airplane, amount: 2 }, //then send 2 Airplanes
			{ enemy: Tank, amount: 1} //lastly, send 1 Tank
		],
		...
	]
*/
var WaveGenerator = function(waves) {
	this.waves = waves;
	
	this.index = 0; //wave index
	this.formation = 0; //index of enemy formation
	this.ctr = 0; //counter of how many enemies in a formation has appeared
};

WaveGenerator.prototype.generateNext = function() { //generate next enemy to send
	if(this.formation < this.waves[this.index].length) {
		if(this.ctr < this.waves[this.index][this.formation].amount) {
			var enemy = this.waves[this.index][this.formation].enemy;
			this.ctr++;
			
			if(this.ctr === this.waves[this.index][this.formation].amount) { //move to next formation
				this.formation++;
				this.ctr = 0; //reset counter
			}
			
			return enemy;
		}
	}
	return null; // if no more enemies to send, return null
};

WaveGenerator.prototype.nextWave = function() { //go to the next wave
	if (this.index == this.waves.length - 1) { //no more waves
		return false;
	}
	
	this.index++;
	this.formation = 0;
	this.ctr = 0;
	
	return true;
};

WaveGenerator.prototype.restart = function() { //restart from beginning
	this.index = 0;
	this.formation = 0;
	this.ctr = 0;
};