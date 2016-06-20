
/*
	Class for game board mechanism.
*/
var Board = function(stage) {
	this.tile_size = 40;
	
	this.row = stage.row;
	this.col = stage.col;
	this.x_offset = 0;
	this.y_offset = 0;
	this.paths = stage.paths;
	
	this.enemies = [];
	this.shots = [];
	this.defense = [];
	this.explosions = [];

	this.pause = true;
	
};

Board.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	processing.pushMatrix();
	processing.translate(this.x_offset, this.y_offset);
	
	//draw board
	processing.fill(50, 150, 50);
	for(var x = 0; x < this.col; x++) {
		for(var y = 0; y < this.row;y++) {
			processing.rect(x * this.tile_size, y * this.tile_size, this.tile_size, this.tile_size);
		}
	}
	
	//draw paths
	processing.fill(100, 100, 100);
	for(var i = 0; i < this.paths.length - 0; i++) {
		processing.rect(this.paths[i][0] * this.tile_size, this.paths[i][1] * this.tile_size, this.tile_size, this.tile_size);
	}
	
	//draw build square
	if(battleData.isBuilding) {
		var px = Math.floor((processing.mouseX - this.x_offset)/this.tile_size);
		var py = Math.floor((processing.mouseY - this.y_offset)/this.tile_size);
		
		processing.stroke(255, 0, 0);
		processing.strokeWeight(4);
		processing.fill(0, 0, 0, 0);
		processing.rect(px * this.tile_size, py * this.tile_size, this.tile_size, this.tile_size);
	}
	else if(battleData.isUpdating) {
		var px = Math.floor(battleData.weaponSelected.x / this.tile_size);
		var py = Math.floor(battleData.weaponSelected.y / this.tile_size);
		
		processing.stroke(255, 0, 0);
		processing.fill(0, 0, 0, 0);
		processing.strokeWeight(4);
		processing.rect(px * this.tile_size, py * this.tile_size, this.tile_size, this.tile_size);
		
		var d = battleData.weaponSelected.range * 2; //range diameter
		processing.strokeWeight(2);
		processing.fill(0, 0, 0, 100);
		processing.ellipse((px + 0.5) * this.tile_size, (py + 0.5) * this.tile_size, d, d);
	}
	
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	
	//draw enemies
	for(var i = this.enemies.length - 1; i >= 0; i--) {
		var enemy = this.enemies[i];
		if(this.pause === false) {
			enemy.update();
			if (enemy.x === enemy.dest_x && enemy.y === enemy.dest_y) { //enemy reached current destination
				if(enemy.step < this.paths.length - 2) { //go to next tile
					enemy.step += 1;
					var next_path = this.paths[enemy.step + 1];
					enemy.setDestination(next_path[0] * this.tile_size + this.tile_size/2,
											next_path[1] * this.tile_size + this.tile_size/2);
				}
				else { //enemy has penetrated our defenses
					this.enemies.splice(i, 1);
					if(battleData.hp > 0) {
						battleData.hp--;
					}
				}
			}
		}
		enemy.draw(processing);
	}
	
	//draw shots
	for(var i = this.shots.length - 1; i >= 0; i--) {
		var shot = this.shots[i];
		if(this.pause === false) {
			shot.update();
			if(shot.x < 0 || shot.x > (this.col * this.tile_size) || shot.y < 0 || shot.y > (this.row * this.tile_size)) {
				this.shots.splice(i, 1); //shots go out of screen, remove it
			}
			else {
				//var strike = false;
				for(var j = this.enemies.length - 1; j >= 0; j--) {
					if(shot.domain === "all" || shot.domain === this.enemies[j].domain) {
						if(this.enemies[j].isColliding(shot) === true) { //enemy's shot successfully
							var explosion = shot.getExplosion();
							if(explosion !== null) { //check if the shot causes splash explosion
								this.explosions.push(explosion);
							}
							//strike = true;
							if(shot.penetrating === false) { //penetrating shot go through line of enemies
								this.shots.splice(i, 1); //remove shot
							}
							this.enemies[j].damage += shot.power; //damage enemy
							if(this.enemies[j].health <= this.enemies[j].damage) {
								player.money += this.enemies[j].reward;
								battleData.score += enemy.exp;
								this.enemies.splice(j, 1); //if enemy's dead, remove it
								battleData.enemy[0]++;
							}
						}
					}
				}
				shot.draw(processing);
			}
		}
		else {
			shot.draw(processing);
		}
	}
	
	//draw defense
	//processing.textAlign(processing.CENTER, processing.CENTER);
	for(var i = 0; i < this.defense.length; i++) {
		if(this.pause === false) {
			//target enemies
			var max_step = -1; //keep track of the most advancing enemy in sight
			var target;
			var readyToShoot = battleData.time - this.defense[i].lastShot >= this.defense[i].reload_time;
			for(var j = 0; j < this.enemies.length; j++) {
				if(this.defense[i].distance(this.enemies[j]) <= this.defense[i].range) {
					if(this.defense[i].target_mode === "single" && this.enemies[j].step > max_step) {
						max_step = this.enemies[j].step;
						target = this.enemies[j];
						this.defense[i].target(this.enemies[j]); //target the detected enemy
					}
					else if(this.defense[i].target_mode === "multiple" && readyToShoot) {
						max_step = this.enemies[j].step;
						target = this.enemies[j];
						this.defense[i].target(this.enemies[j]); //target the detected enemy
					}
					else if(this.defense[i].target_mode === "all" && readyToShoot) {
					//else if(readyToShoot) { //for multiple targeting or all targeting weapons, target enemy only if ready to shoot
						max_step = this.enemies[j].step;
						target = this.enemies[j];
						this.defense[i].target(this.enemies[j]); //target the detected enemy
					}
				}
			}
			
			//if found target and reload time is completed, then shoot
			if(readyToShoot) {
				if(this.defense[i].target_mode === "all" && max_step !== -1) { //emitting explosion
					this.explosions.push(this.defense[i].attack(target));
					this.defense[i].lastShot = battleData.time;
				}
				else if(this.defense[i].target_mode === "single" && max_step !== -1) {
					var shot = this.defense[i].attack(target);
					if(shot !== null) {
						this.shots.push(this.defense[i].attack(target)); //attack a target
						this.defense[i].lastShot = battleData.time;
					}
				}
				else if(this.defense[i].target_mode === "multiple" && max_step !== -1) {
					var shot = this.defense[i].attack(target);
					while(shot !== null) { //attack multiple targets
						this.shots.push(shot);
						shot = this.defense[i].attack(target);
					}
					this.defense[i].lastShot = battleData.time;
				}
			}
			
			this.defense[i].update();
		}
		
		this.defense[i].draw(processing);
	}
	//processing.textAlign(processing.LEFT, processing.BASELINE);
	
	//draw explosions
	for(var i = this.explosions.length-1; i >= 0; i--) {
		var explosion = this.explosions[i];
		if(this.pause === false) {
			explosion.update();
		}
		
		explosion.draw(processing);
		
		if(explosion.r >= explosion.dr) { //explosion damage only takes effect at the end of animation
			for(var j = this.enemies.length - 1; j >= 0; j--) {
				var enemy = this.enemies[j];
				
				if(explosion.isWithin(enemy)) { //enemy's is within explosion range
					explosion.affect(enemy);
					if(enemy.health <= enemy.damage) {
						player.money += enemy.reward;
						battleData.score += enemy.exp;
						this.enemies.splice(j, 1); //if enemy's dead, remove it
						battleData.enemy[0]++;
					}
				}
			}
			this.explosions.splice(i, 1);
		}
	}
	
	processing.popMatrix();
};

Board.prototype.addDefense = function(mouseX, mouseY) { //add defense unit on the tile clicked by mouse
	var tx = Math.floor((mouseX - this.x_offset)/this.tile_size);
	var ty = Math.floor((mouseY - this.y_offset)/this.tile_size);
	
	for(var i = 0; i < this.paths.length; i++) {
		if(this.paths[i][0] === tx && this.paths[i][1] === ty) { //cannot block enemy's path
			return false;
		}
	}
	
	tx = (tx + 0.5) * this.tile_size;
	ty = (ty + 0.5) * this.tile_size;
	
	for(var i = 0; i < this.defense.length; i++) {
		var weapon = this.defense[i];
		if(weapon.x === tx && weapon.y === ty) { //cannot build on top of existing defense
			return false;
		}
	}
	
	var weapon = battleData.weaponSelected.get();
	this.defense.push(new weapon(tx, ty));
	
	return true;
};

Board.prototype.getDefense = function(mouseX, mouseY) {
	var tx = (Math.floor((mouseX - this.x_offset)/this.tile_size) + 0.5) * this.tile_size;
	var ty = (Math.floor((mouseY - this.y_offset)/this.tile_size) + 0.5) * this.tile_size;
	
	for(var i = 0; i < this.defense.length; i++) {
		var weapon = this.defense[i];
		if(weapon.x === tx && weapon.y === ty) {
			return weapon;
		}
	}
	return null;
};

Board.prototype.removeDefense = function(weapon) {
	for(var i = 0; i < this.defense.length; i++) {
		if(weapon === this.defense[i]) {
			this.defense.splice(i, 1);
			return;
		}
	}
}

Board.prototype.addEnemy = function(enemyObject) { //parameter: constructor to create enemy unit
	this.enemies.push(new enemyObject(this.paths[0][0] * this.tile_size + this.tile_size/2,
		this.paths[0][1] * this.tile_size + this.tile_size/2));
	battleData.enemy[1]++;
};

Board.prototype.restart = function() { //restart the board
	this.x_offset = 0;
	this.y_offset = 0;
	this.enemies.splice(0, this.enemies.length);
	this.shots.splice(0,this.shots.length);
	this.defense.splice(0, this.defense.length);
	this.explosions.splice(0, this.explosions.length);
	this.pause = true;
};

Board.prototype.width = function() {
	return this.col * this.tile_size;
}

Board.prototype.height = function() {
	return this.row * this.tile_size;
}
