
var player = { //structure to track player's information and stats
	//money : 200,
	//health : 0,
	exp : 0
};


/*
	Class to keep track of each battle's variables.
*/
var battleData = {
	isBuilding : false, //whether player is in weapon building mode
	isUpdating : false, //whether player is in weapon update mode
	weaponSelected : null, //the weapon which is selected to be built
	hp : 0, //player's current hp during battle
	time : 0, //the battle's time counter
	gameOver : false, //is game over?
	score : 0,
	enemy : [0, 0],
	speed : 1,
	money : 0,
	peacePeriod : true
};

battleData.reset = function(health, fund) {
	this.isBuilding = false;
	this.isUpdating = false;
	this.weaponSelected = null;
	this.hp = health;
	this.time = 0;
	this.gameOver = false;
	this.score = 0;
	this.enemy = [0, 0];
	this.speed = 1;
	this.money = fund;
	this.peacePeriod = true;
}

var enemyData = {
	Quadrone : {
		hp : 10,
		speed : 1,
		width : 20,
		height : 20,
		reward : 10,
		exp : 1,
		domain : "land",
		description : "Four legged standard unit. Easy to destroy."
	},
	Hovercraft : {
		hp : 15,
		speed : 1.5,
		width: 25,
		height : 25,
		reward : 15,
		exp : 1,
		domain : "land",
		description : "Vehicle that hovers over the ground. Moves easily across hard terrains."
	},
	SteelTank : {
		hp : 80,
		speed : 0.8,
		width : 25,
		height : 25,
		reward : 30,
		exp : 1,
		domain : "land",
		description : "Ground unit with strong defense but moves slower."
	},
	MagmaTank : {
		hp : 120,
		speed : 0.5,
		width : 25,
		height : 25,
		reward : 40,
		exp : 1,
		domain : "land",
		description : "The next generation of tank. Watch out! This heat radiating vehicle is immune to frost."
	},
	EagleJet : {
		hp : 20,
		speed : 2,
		width : 20,
		height : 25,
		reward : 25,
		exp : 1,
		domain : "air",
		description : "Standard air unit. Low HP but relatively faster."
	},
	SonicRocket : {
		hp : 40,
		speed : 4,
		width : 20,
		height : 25,
		reward : 35,
		exp : 1,
		domain : "air",
		description : "Faster-than-sound air unit. Difficult to target."
	},
	Phantom : {
		hp : 80,
		speed : 3,
		width : 20,
		height : 25,
		reward : 45,
		exp : 1,
		domain : "air",
		description : "Stealth unit. Fast and hard to detect."
	}
};

var shotData = {
	Bullet : {
		//power : 5,
		//speed : 5,
		width : 5,
		height : 5
	},
	Fireball : {
		width : 10,
		height : 10
	},
	Jolt : {
		width : 1,
		height : 1
	},
	LaserLight : {
		width : 10,
		height : 10
	}
};

var weaponData = {
	Turret : {
		reload_time : 50,
		range : 120,
		price : 100,
		power : 5,
		speed : 5,
		upgrades : [
			{ price : 30, range : 20, reload_time : 5, power : 0, speed : 0 },
			{ price : 50, range : 20, reload_time : 5, power : 0, speed : 0 },
			{ price : 80, range : 40, reload_time : 10, power : 1, speed : 1 }
		],
		req_exp : 0,
		description : "Shoots metal bullet to single enemy. The damage of a single bullet is small, but the firing rate is very fast. Upgraded turrets can be very deadly and strong defense."
	},
	Cannon : {
		reload_time : 100,
		range : 180,
		price : 120,
		power : 15,
		speed : 2.5,
		upgrades : [
			{ price : 40, range : 40, reload_time : 5, power : 2, speed : 0 },
			{ price : 60, range : 40, reload_time : 10, power : 0, speed : 1 },
			{ price : 100, range : 40, reload_time : 10, power : 1, speed : 1 }
		],
		req_exp : 0,
		description : "Shoots fireball toward a single target. The fire speed is rather slow, but compensated by great damage and splash impact to nearby enemies.\n\nCannot attack air units."
	},
	Frost : {
		reload_time : 80,
		range : 60,
		price : 80,
		power : 1,
		speed : 3,
		upgrades : [
			{ price : 20, range : 20, reload_time : 3, power : 0.2, speed : 1 },
			{ price : 40, range : 40, reload_time : 4, power : 0.2, speed : 2 },
			{ price : 60, range : 40, reload_time : 5, power : 0.4, speed : 3 }
		],
		req_exp : 0,
		description : "Releases cold freezing air around it, slowing down enemies' movement for a certain period. Does not deal any damage."
	},
	Transmitter : {
		reload_time : 120,
		range : 120,
		price : 140,
		power : 20,
		speed : 5,
		upgrades : [
			{ price : 50, range : 40, reload_time : 5, power : 2, speed : 2 },
			{ price : 80, range : 40, reload_time : 10, power : 4, speed : 2 },
			{ price : 140, range : 20, reload_time : 15, power : 8, speed : 4 }
		],
		req_exp : 20,
		description : "Emits destructing shock wave toward the target, dealing great damage to multiple enemies within the area. Highly destructive."
	},
	Electrocutor : {
		reload_time : 200,
		range : 80,
		price : 200,
		power : 40,
		speed : 8,
		upgrades : [
			{ price : 60, range : 10, reload_time : 10, power : 4, speed : 0 },
			{ price : 100, range : 10, reload_time : 20, power : 4, speed : 0 },
			{ price : 180, range : 30, reload_time : 30, power : 8, speed : 1 }
		],
		req_exp : 50,
		description : "Delivers electrical jolts toward all targets within its area. However, it needs significant amount of time to recharge its energy after shot."
	},
	Laser : {
		reload_time : 500,
		range : 200,
		price : 260,
		power : 60,
		speed : 6,
		upgrades : [
			{ price : 80, range : 20, reload_time : 30, power : 5, speed : 0 },
			{ price : 140, range : 20, reload_time : 60, power : 10, speed : 0 },
			{ price : 220, range : 40, reload_time : 90, power : 15, speed : 1 }
		],
		req_exp : 100,
		description : "Shoots powerful laser beams with great damage. The laser beam penetrates through everything on its way, damaging enemies along the line. Very slow reload time."
	}
};

var announcementList = [];
