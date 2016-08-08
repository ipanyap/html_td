
/*
	Class for game board mechanism.
*/
var board = {
	tile_size : 40,
	stage : undefined,
	position : { x: 0, y: 40 },
	offset : { x: 0, y: 0 },
	viewport : { x: 0, y: 40, w: 800, h: 480 },
	enemies : [],
	shots : [],
	defense : [],
	explosions : [],
	pause : false
};

board.boxToPix = function(box, isCenter) { //convert box position to pixel position
	if(isCenter) { //computes the center position of the box
		if(typeof box === "number") {
			return (box + 0.5) * this.tile_size;
		}
		return { x: (box.x + 0.5) * this.tile_size, y: (box.y + 0.5) * this.tile_size };
	}
	else { //computes the upper left corner position of the box
		if(typeof box === "number") {
			return box * this.tile_size;
		}
		return { x: box.x * this.tile_size, y: box.y * this.tile_size };
	}
};

board.pixToBox = function(pix) {
	if(typeof box === "number") {
		return Math.floor(pix/this.tile_size);
	}
	return { x: Math.floor(pix.x/this.tile_size), y : Math.floor(pix.y/this.tile_size) };
};

board.restart = function(stage) { //restart the board
	if(typeof stage !== "undefined") { //if no stage parameter, use the old stage
		this.stage = stage;
		base.set(this.boxToPix(stage.base[0], true), this.boxToPix(stage.base[1], true));
	}
	
	this.offset.x = 0;
	this.offset.y = 0;
	
	this.enemies.splice(0, this.enemies.length);
	this.shots.splice(0,this.shots.length);
	this.defense.splice(0, this.defense.length);
	this.explosions.splice(0, this.explosions.length);

	this.pause = false;
};

board.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	processing.pushMatrix();
	processing.translate(this.offset.x, this.offset.y);
	
	//draw board
	processing.fill(50, 150, 50);
	for(var x = 0; x < this.stage.col; x++) {
		for(var y = 0; y < this.stage.row;y++) {
			processing.rect(x * this.tile_size, y * this.tile_size, this.tile_size, this.tile_size);
		}
	}
	
	//draw paths
	processing.fill(100, 100, 100);
	for(var i = 0; i < this.stage.paths.length - 0; i++) {
		var path = this.stage.paths[i];
		for(var j = 0; j < path.length; j++) {
			processing.rect(path[j][0] * this.tile_size, path[j][1] * this.tile_size, this.tile_size, this.tile_size);
		}
	}
	
	base.draw(processing);
	
	//draw enemy direction during peace period
	if(battleData.peacePeriod === true) {
		var arrow_pos = Math.floor((battleData.time/1.6) % this.tile_size);
		processing.noStroke();
		processing.fill(100, 10, 10, 50);
		for(var i = 0; i < this.stage.paths.length /*- 1*/; i++) {
			var path = this.stage.paths[i];
			for(var j = 0; j < path.length - 1; j++) {
				var diff_x = path[j+1][0] - path[j][0];
				var diff_y = path[j+1][1] - path[j][1];
				
				processing.pushMatrix();
				processing.translate(this.boxToPix(path[j][0], true), this.boxToPix(path[j][1], true));
				processing.rotate(Math.atan2(diff_y, diff_x));
				
				processing.triangle(arrow_pos + this.tile_size/8, 0, arrow_pos - this.tile_size/8, -3, arrow_pos - this.tile_size/8, 3);
				processing.popMatrix();
			}
		}
	}
	
	//draw build square
	if(battleData.isBuilding) {
		processing.strokeWeight(4);
		processing.noFill();
		
		if(battleData.weaponPlanned === null) {
			var position = this.pixToBox( { x: processing.mouseX - this.offset.x, y: processing.mouseY - this.offset.y } );
			processing.stroke(255, 0, 0);
			processing.rect(position.x * this.tile_size, position.y * this.tile_size, this.tile_size, this.tile_size);
		}
		else {
			var position = this.pixToBox( { x: battleData.weaponPlanned.x, y : battleData.weaponPlanned.y } );
			
			processing.stroke(0, 255, 0);
			processing.rect(position.x * this.tile_size, position.y * this.tile_size, this.tile_size, this.tile_size);
			
			battleData.weaponPlanned.draw(processing);
			processing.stroke(0, 255, 0);
		}
		
		var d = battleData.weaponSelected.range * 2; //range diameter
		processing.strokeWeight(2);
		processing.fill(0, 0, 0, 100);
		processing.ellipse((position.x + 0.5) * this.tile_size, (position.y + 0.5) * this.tile_size, d, d);
	}
	else if(battleData.isUpdating) {
		var position = this.pixToBox( { x: battleData.weaponSelected.x, y: battleData.weaponSelected.y } );
		
		processing.stroke(0, 255, 0);
		processing.fill(0, 0, 0, 0);
		processing.strokeWeight(4);
		processing.rect(position.x * this.tile_size, position.y * this.tile_size, this.tile_size, this.tile_size);
		
		var d = battleData.weaponSelected.range * 2; //range diameter
		processing.strokeWeight(2);
		processing.fill(0, 0, 0, 100);
		processing.ellipse((position.x + 0.5) * this.tile_size, (position.y + 0.5) * this.tile_size, d, d);
	}
	
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	
	//draw defense
	//processing.textAlign(processing.CENTER, processing.CENTER);
	for(var i = 0; i < this.defense.length; i++) {
		var weapon = this.defense[i];
		if(this.pause === false) {
			//target enemies
			var target = undefined; //keep track of temporary target
			var readyToShoot = battleData.time - weapon.lastShot >= weapon.reload_time;
			for(var j = 0; j < this.enemies.length; j++) {
				var enemy = this.enemies[j];
				if(weapon.canTarget(enemy)) { //enemy can be seen and targeted by the weapon
					if(weapon.target_mode === "single") {
						if(typeof target === "undefined" || enemy.step > target.step) { //target the most advancing enemy
							target = enemy;
							weapon.target(enemy);
						}
					}
					else if(readyToShoot) { //for multiple targeting or all targeting weapons, target enemy only if ready to shoot
						target = enemy;
						weapon.target(enemy);
					}
				}
			}
			
			//if found target and reload time is completed, then shoot
			if(readyToShoot && typeof target !== "undefined") {
				if(weapon.target_mode === "all") { //"all" mode emitting explosion
					this.explosions.push(weapon.attack(target));
					weapon.lastShot = battleData.time;
				}
				else if(weapon.target_mode === "single") { //"single" mode shooting most advancing target
					this.shots.push(weapon.attack(target)); //attack a target
					weapon.lastShot = battleData.time;
				}
				else if(weapon.target_mode === "multiple") {
					for(var shot = weapon.attack(target); shot !== null; shot = weapon.attack(target)) {
						this.shots.push(shot); //attack multiple targets
					}
					weapon.lastShot = battleData.time;
				}
			}
			
			weapon.update();
		}
		
		weapon.draw(processing);
	}
	//processing.textAlign(processing.LEFT, processing.BASELINE);
	
	//draw shots
	for(var i = this.shots.length - 1; i >= 0; i--) {
		var shot = this.shots[i];
		if(this.pause === false) {
			shot.update();
			if(shot.x < 0 || shot.x > this.width() || shot.y < 0 || shot.y > this.height()) {
				this.shots.splice(i, 1); //shots go out of screen, remove it
			}
			else {
				for(var j = this.enemies.length - 1; j >= 0; j--) {
					var enemy = this.enemies[j];
					if(shot.domain === "all" || shot.domain === enemy.domain) {
						if(enemy.isColliding(shot) === true) { //enemy's shot successfully
							var explosion = shot.getExplosion();
							if(explosion !== null) { //check if the shot causes splash explosion
								this.explosions.push(explosion);
							}
							
							if(shot.penetrating === false) { //penetrating shot go through line of enemies
								this.shots.splice(i, 1); //remove shot
							}
							enemy.damage += shot.power; //damage enemy
							this.onEnemyDamaged(j);
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
	
	//draw enemies
	for(var i = this.enemies.length - 1; i >= 0; i--) {
		var enemy = this.enemies[i];
		if(this.pause === false) {
			enemy.update();
			if (enemy.x === enemy.dest_x && enemy.y === enemy.dest_y) { //enemy reached current destination
				if(enemy.step < this.stage.paths[enemy.path].length - 2) { //go to next tile
					enemy.step += 1;
					var next_path = this.stage.paths[enemy.path][enemy.step + 1];
					enemy.setDestination(this.boxToPix(next_path[0], true), this.boxToPix(next_path[1], true));
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
					this.onEnemyDamaged(j);
				}
			}
			this.explosions.splice(i, 1);
		}
	}
	
	processing.popMatrix();
};

board.planDefense = function(mouseX, mouseY) {
	var box = this.pixToBox( { x: mouseX - this.offset.x, y : mouseY - this.offset.y } );
	var pix = this.boxToPix(box, true); //get center point of new defense
	
	for(var i = 0; i < this.stage.paths.length; i++) {
		var path = this.stage.paths[i];
		for(var j = 0; j < path.length; j++) {
			if(path[j][0] === box.x && path[j][1] === box.y) { //cannot block enemy's path
				return false;
			}
		}
	}
	
	for(var i = 0; i < this.defense.length; i++) {
		if(this.defense[i].x === pix.x && this.defense[i].y === pix.y) { //cannot build on top of existing weapons
			return false;
		}
	}
	
	if(Math.abs(base.x - pix.x) <= this.tile_size && Math.abs(base.y - pix.y) <= this.tile_size) { //cannot block our base
		return false;
	}
	
	if(battleData.weaponPlanned === null) {
		battleData.enterPlanMode();
	}
	battleData.weaponPlanned.x = pix.x;
	battleData.weaponPlanned.y = pix.y;
	
	return true;
};

board.addDefense = function() { //add defense unit on the tile clicked by mouse
	this.defense.push(battleData.weaponPlanned);
};

board.getDefense = function(mouseX, mouseY) {
	var center = this.boxToPix(this.pixToBox({ x: mouseX - this.offset.x, y: mouseY - this.offset.y }), true);
	
	for(var i = 0; i < this.defense.length; i++) {
		var weapon = this.defense[i];
		if(weapon.x === center.x && weapon.y === center.y) {
			return weapon;
		}
	}
	return null;
};

board.removeDefense = function(weapon) {
	for(var i = 0; i < this.defense.length; i++) {
		if(weapon === this.defense[i]) {
			this.defense.splice(i, 1);
			return;
		}
	}
};

board.addEnemy = function(enemyObject, pathIndex) { //parameter: constructor to create enemy unit
	var path = this.stage.paths[pathIndex];
	var enemy = new enemyObject(this.boxToPix(path[0][0], true), this.boxToPix(path[0][1], true));
	enemy.path = pathIndex;
	
	if(enemy.domain === "land") { //land unit is put at front so it'd be drawn first (will be obscured by air units)
		this.enemies.push(enemy); //enemies are drawn from index n to 0
	}
	else if(enemy.domain === "air") { //air unit is put at back so it'd be drawn later
		this.enemies.unshift(enemy);
	}
	battleData.enemy[1]++;
};

board.width = function() {
	return this.stage.col * this.tile_size;
};

board.height = function() {
	return this.stage.row * this.tile_size;
};

board.onEnemyDamaged = function(index) {
	var enemy = this.enemies[index];
	if(enemy.health <= enemy.damage) {
		battleData.money += enemy.reward;
		battleData.score += enemy.exp;
		this.enemies.splice(index, 1); //if enemy's dead, remove it
		battleData.enemy[0]++;
	}
};
