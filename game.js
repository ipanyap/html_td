
var game = {
	stage_idx : 0,
	isScrolling : false,
	enemyIntervalFrame : battleData.time,
	quitGame : function(processing) {}
};

game.restart = function(stage_idx) {
	control.restart();
	statPanel.restart();
	this.enemyIntervalFrame = 0;
	menu.show = false;
	waveView.show = false;
	
	if(typeof stage_idx === "undefined") { //reset current stage
		board.restart();
		waveGenerator.restart();
	}
	else { //move to other stage
		this.stage_idx = stage_idx;
		board.restart(Stage[stage_idx]);
		waveGenerator.restart(Stage[stage_idx].waves);
	}
	battleData.reset(Stage[this.stage_idx].health, Stage[this.stage_idx].fund);
};

game.over = function(win) {
	battleData.gameOver = true;
	result.set(win);
	board.pause = true;
	if(win) {
		player.exp += battleData.score;
		if(this.stage_idx + 1 > player.progress) {
			player.progress = this.stage_idx + 1;
		}
		Memory.save();
	}
};

game.run = function(processing) {
	game.restart(this.stage_idx);
	
	if(board.width() < processing.width) {
		board.offset.x = (processing.width - board.width())/2;
	}
	if(board.height() < processing.height - control.height - statPanel.height) {
		board.offset.y = (processing.height - control.height - board.height() + statPanel.height)/2;
	}
	
	processing.mousePressed = function() {
		if(battleData.gameOver) {
			return;
		}
		
		if(!control.isMouseInside(processing.mouseX, processing.mouseY) && //catch if outside controller and stat panel
			!statPanel.isMouseInside(processing.mouseX, processing.mouseY)) {
			if(!battleData.isBuilding) {
				game.isScrolling = true; //go to scroll mode
			}
		}
	};
	
	processing.mouseDragged = function() {
		if(game.isScrolling) { //move (scroll) the view
			if(board.width() > processing.width) {
				board.offset.x += (processing.mouseX - processing.pmouseX);
				board.offset.x = processing.constrain(board.offset.x, processing.width - board.width(), 0);
			}
			if(board.height () > processing.height - control.height - statPanel.height) {
				board.offset.y += (processing.mouseY - processing.pmouseY);
				board.offset.y = processing.constrain(board.offset.y, processing.height - board.height() - control.height, 0 + statPanel.height);
			}
		}
	};
	
	processing.mouseReleased = function() {
		game.isScrolling = false;
	};
	
	processing.mouseClicked = function() {
		//processing result screen if in game over state
		if(battleData.gameOver) {
			var resultX = processing.mouseX - result.x;
			var resultY = processing.mouseY - result.y;
			if(result.buttons[0].isMouseInside(resultX, resultY)) { //play again
				game.restart();
				processing.loop();
			}
			else if(result.buttons[1].isMouseInside(resultX, resultY) && result.buttons[1].enabled) { //next stage
				if(game.stage_idx < Stage.length-1) {
					game.restart(game.stage_idx + 1); //advance to next stage
				}
				else { //reached last stage, quit game and restart
					game.restart(0);
					game.quitGame(processing);
				}
				processing.loop();
			}
			
			return; //ignore further processing
		}
		
		//process clicks that happen within menu area
		if(menu.show) {
			var menuX = processing.mouseX - menu.x;
			var menuY = processing.mouseY - menu.y;
			if(menu.buttons[0].isMouseInside(menuX, menuY)) { //continue game
				menu.show = false;
				processing.loop();
			}
			else if(menu.buttons[1].isMouseInside(menuX, menuY)) { //restart game
				game.restart();
				processing.loop();
			}
			else if(menu.buttons[2].isMouseInside(menuX, menuY)) { //quit game
				game.restart(0);
				processing.loop();
				game.quitGame(processing);
			}
			
			return; //ignore further processing
		}
		
		//process clicks that happen within formation view area
		if(waveView.show) {
			if(waveView.isMouseInside(processing.mouseX, processing.mouseY)) {
				//process mouse clicked in the buttons
				var boxX = processing.mouseX - waveView.x;
				var boxY = processing.mouseY - waveView.y;
				
				for(var i = 0; i < waveView.buttons.length; i++) {
					if(waveView.buttons[i].isMouseInside(boxX, boxY)) {
						waveView.select(i); //select and display enemy info
						break;
					}
				}
			}
			else {
				waveView.show = false;
			}
			
			return; //ignore further processing
		}
		
		//process clicks that happen within information dialog area
		if(battleData.isPlanning()) {
			var actX = processing.mouseX - infoDialog.x;
			var actY = processing.mouseY - infoDialog.y;
			
			if(infoDialog.buildButton.isMouseInside(actX, actY)) { //build weapon
				board.addDefense();
				battleData.money -= battleData.weaponSelected.price;
				
				battleData.enterNormalMode();
				infoDialog.show = false;
			}
			else if(infoDialog.cancelButton.isMouseInside(actX, actY)) { //cancel build
				battleData.enterNormalMode();
				infoDialog.show = false;
			}
		}
		if(battleData.isUpdating) {
			var actX = processing.mouseX - infoDialog.x;
			var actY = processing.mouseY - infoDialog.y;
			
			if(infoDialog.upgradeButton.isMouseInside(actX, actY)) { //upgrade weapon
				if(infoDialog.upgradeButton.enabled) {
					var weapon = battleData.weaponSelected;
					battleData.money -= weapon.upgrades[weapon.level].price;
					weapon.upgrade();
					
					infoDialog.setData();
				}
				return;
			}
			else if(infoDialog.sellButton.isMouseInside(actX, actY)) { //sell weapon
				battleData.money += battleData.weaponSelected.value();
				board.removeDefense(battleData.weaponSelected);
				
				battleData.enterNormalMode();
				infoDialog.show = false;
			}
		}
		
		//process clicks that happen within control area
		if(control.isMouseInside(processing.mouseX, processing.mouseY)) {
			//process mouse clicked in the buttons
			var controlX = processing.mouseX - control.x;
			var controlY = processing.mouseY - control.y;
			
			if(!battleData.isUpdating) { //control displaying weapon buttons
				for(var i = 0; i < control.weapons.length; i++) {
					var button = control.weapons[i];
					if(button.isMouseInside(controlX, controlY)) {
						if(button.enabled) {
							var currentWeapon = battleData.weaponSelected;
							battleData.enterBuildMode(button.image); //go to build mode
							
							if(battleData.isPlanning()) { //in planning mode, this will switch the weapon to build
								battleData.enterPlanMode();
								infoDialog.setData();
							}
							else if(battleData.isBuilding && currentWeapon === button.image) { //click on same button twice
								battleData.enterNormalMode();
							}
							
							break;
						}
					}
				}
			}
			
			return; //ignore further processing
		}
		
		//process clicks that happen within status panel area
		if(statPanel.isMouseInside(processing.mouseX, processing.mouseY)) {
			//process mouse clicked in the buttons
			var statX = processing.mouseX - statPanel.x;
			var statY = processing.mouseY - statPanel.y;
			
			if(statPanel.wave_button.isMouseInside(statX, statY)) { //display wave information
				waveView.setData(waveGenerator.waves[waveGenerator.index]);
				waveView.show = true;
			}
			else if(statPanel.setting_button.isMouseInside(statX, statY)) { //display game menu
				menu.show = true;
			}
			else if(statPanel.speed_button.isMouseInside(statX, statY)) { //play wave or change speed
				if(statPanel.speed_button.image.type === "play") {
					battleData.peacePeriod = false;
					statPanel.speed_button.image.type = "slow";
				}
				if(statPanel.speed_button.image.type === "fast") {
					battleData.speed = 2;
					statPanel.speed_button.image.type = "slow";
				}
				else if(statPanel.speed_button.image.type === "slow") {
					battleData.speed = 1;
					statPanel.speed_button.image.type = "fast";
				}
			}
			
			return; //ignore further processing
		}
		
		//finally, process clicks that happen within the board
		if(battleData.isBuilding) {
			if(board.planDefense(processing.mouseX, processing.mouseY)) {
				infoDialog.setData();
			}
		}
		else {
			//select weapon
			var weapon = board.getDefense(processing.mouseX, processing.mouseY);
			if(weapon !== null && weapon !== battleData.weaponSelected) { //a defense selected
				battleData.enterUpdateMode(weapon);
				infoDialog.setData();
			}
			else { //selected no defense
				battleData.enterNormalMode();
			}
		}
	};
	
	processing.draw = function() {
		if(!board.pause) {
			battleData.time += battleData.speed;
		}
		
		if(!battleData.gameOver) {
			if(!battleData.peacePeriod && battleData.time - game.enemyIntervalFrame >= 60) { //generate enemy
				var enemy = waveGenerator.generateNext();
				if(enemy === null) { //no more enemy in a wave
					if(board.enemies.length === 0) { //wait until all current wave's enemies disappear
						var success = waveGenerator.nextWave();
						if(success) { //next wave
							battleData.peacePeriod = true;
							battleData.speed = 1;
							statPanel.speed_button.image.type = "play";
						}
						else { //win game
							game.over(true);
						}
					}
				}
				else { //spawn next enemy
					board.addEnemy(enemy);
					game.enemyIntervalFrame = battleData.time;
				}
			}
			
			if(battleData.hp === 0) { //lose game
				game.over(false);
			}
		}
		
		board.draw(processing);
		control.draw(processing);
		statPanel.draw(processing);
		
		if( battleData.isPlanning() || battleData.isUpdating ) {
			infoDialog.draw(processing);
		}
		
		if(battleData.gameOver) {
			result.draw(processing);
			processing.noLoop();
		}
		else if(menu.show) {
			menu.draw(processing);
			processing.noLoop();
		}
		else if(announcement.show) {
			annoucement.draw(processing);
			processing.noLoop();
		}
		else if(waveView.show) {
			waveView.draw(processing);
		}
	}
};