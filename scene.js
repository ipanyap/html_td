
/*
	The main function who manages user inputs
*/
var scene = function(processing) {
	var w = 800;
	var h = 600;
	var stage_idx = 0;
	
	processing.size( w, h );
	processing.frameRate( 60 );
	
	//load font
	var font = processing.loadFont("Source Sans Pro");
	//var font = processing.loadFont("NEUROPOL.ttf");
	processing.textFont(font, 20);

	board.restart(Stage[stage_idx]);
	control.restart();
	waveGenerator.restart(Stage[stage_idx].waves);
	
	var isScrolling = false;
	var enemyIntervalFrame = battleData.time;
	
	var screen = "battle"; //which screen to display
	var startScene = null;
	var battleScene = null;
	
	if(board.width() < w) {
		board.offset.x = (w - board.width())/2;
	}
	if(board.height() < h - control.height - statPanel.height) {
		board.offset.y = (h - control.height - board.height() + statPanel.height)/2;
	}
	
	/*var enemy = new Skull(400, 300, 0, 0, 0, 0);
	processing.draw = function() {
		processing.background(102, 123.5, 127.5);
		enemy.draw(processing);
	};*/
	
	startScene = function() {
		processing.mousePressed = function() {};
		processing.mouseDragged = function() {};
		processing.mouseReleased = function() {};
		
		processing.mouseClicked = function() {
			screen = "battle";
			battleScene();
			processing.loop();
		};
		
		processing.draw = function() {
			processing.background(0, 0, 0);
			
			processing.fill(250, 250, 250);
			
			processing.textSize(100);
			processing.text("TOWER DEFENSE", 60, 400);
			
			processing.textSize(20);
			processing.text("Touch anywhere to start", 300, 500);
			
			processing.noLoop();
		}
	};
	
	//function which controls the battle scene
	battleScene = function() {
		battleData.reset(Stage[stage_idx].health, Stage[stage_idx].fund);
	
		processing.mousePressed = function() {
			if(battleData.gameOver === true) {
				return;
			}
			
			if(control.isMouseInside(processing.mouseX, processing.mouseY) === false &&
				statPanel.isMouseInside(processing.mouseX, processing.mouseY) === false) { //catch if outside controller
				if(battleData.isBuilding === false) {
					isScrolling = true; //go to scroll mode
				}
			}
		};
		
		processing.mouseDragged = function() {
			if(isScrolling) { //move (scroll) the view
			//console.log("height = " + board.height());
				if(board.width() > w) {
					board.offset.x += (processing.mouseX - processing.pmouseX);
					board.offset.x = processing.constrain(board.offset.x, processing.width - board.width(), 0);
				}
				if(board.height () > h - control.height - statPanel.height) {
					board.offset.y += (processing.mouseY - processing.pmouseY);
					board.offset.y = processing.constrain(board.offset.y, processing.height - board.height() - control.height, 0 + statPanel.height);
					//console.log("!");
				}
			}
		};
		
		processing.mouseClicked = function() {
			//processing result screen if in game over state
			if(battleData.gameOver === true) {
				var resultX = processing.mouseX - result.x;
				var resultY = processing.mouseY - result.y;
				if(result.buttons[0].isMouseInside(resultX, resultY)) {
					//play again
					battleData.reset(Stage[stage_idx].health, Stage[stage_idx].fund);
					board.restart();
					waveGenerator.restart();
					control.restart();
					statPanel.restart();
					enemyIntervalFrame = 0;
					waveView.show = false;
					processing.loop();
				}
				else if(result.buttons[1].isMouseInside(resultX, resultY) && result.buttons[1].enabled === true) {
					//next stage
					if(stage_idx < Stage.length-1) {
						stage_idx++;
						board.restart(Stage[stage_idx]);
						waveGenerator.restart(Stage[stage_idx].waves);
						battleData.reset(Stage[stage_idx].health, Stage[stage_idx].fund);
						control.restart();
						statPanel.restart();
						enemyIntervalFrame = 0;
						processing.loop();
					}
					else {
						stage_idx = 0;
						board.restart(Stage[stage_idx]);
						waveGenerator.restart(Stage[stage_idx].waves);
						battleData.reset(Stage[stage_idx].health, Stage[stage_idx].fund);
						control.restart();
						statPanel.restart();
						enemyIntervalFrame = 0;
						startScene();
						processing.loop();
					}
				}
				
				return; //ignore further processing
			}
			
			//process clicks that happen within menu area
			if(menu.show === true) {
				var resultX = processing.mouseX - menu.x;
				var resultY = processing.mouseY - menu.y;
				if(menu.buttons[0].isMouseInside(resultX, resultY)) {
					menu.show = false;
					processing.loop();
				}
				else if(menu.buttons[1].isMouseInside(resultX, resultY)) {
					battleData.reset(Stage[stage_idx].health, Stage[stage_idx].fund);
					board.restart();
					waveGenerator.restart();
					control.restart();
					statPanel.restart();
					enemyIntervalFrame = 0;
					menu.show = false;
					processing.loop();
				}
				else if(menu.buttons[2].isMouseInside(resultX, resultY)) {
					menu.show = false;
					
					startScene();
					processing.loop();
				}
				
				return; //ignore further processing
			}
			
			if(announcement.show === true) {
				var aX = processing.mouseX - announcement.x;
				var aY = processing.mouseY - announcement.y;
				
				if(announcement.ok_button.isMouseInside(aX, aY)) {
					announcement.show = false;
					processing.loop();
				}
				
				return;
			}
			
			//process clicks that happen within formation view area
			if(waveView.show === true) {
				if(waveView.isMouseInside(processing.mouseX, processing.mouseY)) {
					//process mouse clicked in the buttons
					var boxX = processing.mouseX - waveView.x;
					var boxY = processing.mouseY - waveView.y;
					
					for(var i = 0; i < waveView.buttons.length; i++) {
						if(waveView.buttons[i].isMouseInside(boxX, boxY)) {
							waveView.select(i);
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
				
				if(infoDialog.buildButton.isMouseInside(actX, actY)) {
					//build weapon
					board.addDefense();
					battleData.money -= battleData.weaponSelected.price;
					
					battleData.enterNormalMode();
					infoDialog.show = false;
				}
				else if(infoDialog.cancelButton.isMouseInside(actX, actY)) {
					battleData.enterNormalMode();
					infoDialog.show = false;
				}
			}
			if(battleData.isUpdating) {
				var actX = processing.mouseX - infoDialog.x;
				var actY = processing.mouseY - infoDialog.y;
				
				if(infoDialog.upgradeButton.isMouseInside(actX, actY)) {
					if(infoDialog.upgradeButton.enabled) {
						var weapon = battleData.weaponSelected;
						battleData.money -= weapon.upgrades[weapon.level].price;
						weapon.upgrade();
						
						infoDialog.setData();
					}
					return;
				}
				else if(infoDialog.sellButton.isMouseInside(actX, actY)) {
					battleData.money += battleData.weaponSelected.value();
					board.removeDefense(battleData.weaponSelected);
					
					battleData.enterNormalMode();
					infoDialog.show = false;
				}
			}
			
			//process clicks that happen within control area
			if(control.isMouseInside(processing.mouseX, processing.mouseY) === true) {
				//process mouse clicked in the buttons
				var controlX = processing.mouseX - control.x;
				var controlY = processing.mouseY - control.y;
				
				//added as part of actionPanel
				if(battleData.isUpdating) {
				}
				else { //control displaying weapon buttons
					for(var i = 0; i < control.weapons.length; i++) {
						var button = control.weapons[i];
						if(button.isMouseInside(controlX, controlY)) {
							if(button.enabled === true) {
								var currentWeapon = battleData.weaponSelected;
								battleData.enterBuildMode(button.image); //go to build mode
								
								if(battleData.isPlanning()) {
									var currentX = battleData.weaponPlanned.x;
									var currentY = battleData.weaponPlanned.y
									battleData.enterPlanMode();
									if(board.planDefense(currentX, currentY)) {
										infoDialog.setData();
									}
								}
								else if(battleData.isBuilding && currentWeapon === button.image) {
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
			if(statPanel.isMouseInside(processing.mouseX, processing.mouseY) === true) {
				//process mouse clicked in the buttons
				var statX = processing.mouseX - statPanel.x;
				var statY = processing.mouseY - statPanel.y;
				
				if(statPanel.wave_button.isMouseInside(statX, statY)) {
					waveView.setData(waveGenerator.waves[waveGenerator.index]);
					waveView.show = true;
				}
				else if(statPanel.setting_button.isMouseInside(statX, statY)) {
					menu.show = true;
				}
				
				else if(statPanel.speed_button.isMouseInside(statX, statY)) {
					if(statPanel.speed_button.image.type === "play") {
						battleData.peacePeriod = false;
						if(battleData.speed === 1) {
							statPanel.speed_button.image.type = "fast";
						}
						else if(battleData.speed === 2) {
							statPanel.speed_button.image.type = "slow";
						}
					}
					else if(statPanel.speed_button.image.type === "fast") {
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
				if(board.planDefense(processing.mouseX, processing.mouseY) === true) {
					infoDialog.setData();
				}
			}
			else {
				//select weapon
				var weapon = board.getDefense(processing.mouseX, processing.mouseY);
				if(weapon !== null && weapon !== battleData.weaponSelected) {
					battleData.enterUpdateMode(weapon);
					infoDialog.setData();
				}
				else {
					battleData.enterNormalMode();
				}
			}
		};
		
		processing.mouseReleased = function() {
			isScrolling = false;
		};
		
		processing.draw = function() {
			if(board.pause === false) {
				//battleData.time++;
				battleData.time += battleData.speed;
			}
			
			if(announcementList.length > 0 && announcement.show === false) {
				announcement.title = announcementList[0].title;
				announcement.message = announcementList[0].message;
				announcement.show = true;
				announcementList.splice(0, 1);
			}
			
			processing.background(102, 123.5, 127.5);
			//processing.background(100, 100, 100);
			
			if(battleData.gameOver === false) {
				if(!battleData.peacePeriod && battleData.time - enemyIntervalFrame >= 60) { //generate enemy
					var enemy = waveGenerator.generateNext();
					if(enemy === null) { //no more enemy in a wave
						if(board.enemies.length === 0) { //wait until all current wave's enemies disappear
							var success = waveGenerator.nextWave();
							if(success === true) {
								//waveGenerator.pause = true;
								battleData.peacePeriod = true;
								battleData.speed = 1;
								statPanel.speed_button.image.type = "play";
							}
							else {
								//win game
								battleData.gameOver = true;
								result.set(true);
								board.pause = true;
								player.exp += battleData.score;
							}
						}
					}
					else {
						board.addEnemy(enemy);
						enemyIntervalFrame = battleData.time;
					}
				}
				
				if(battleData.hp === 0) {
					battleData.gameOver = true;
					result.set(false);
					board.pause = true;
				}
			}
			
			board.draw(processing);
			control.draw(processing);
			statPanel.draw(processing);
			
			//print status information
			/*processing.fill(255, 255, 255);
			processing.text("HP: " + battleData.hp, 550, 20, 50, 50);
			//processing.text(battleData.hp + "/", 220, 20, 100, 50);
			processing.text("$" + battleData.money, 500, 20, 100, 50);
			processing.text("Wave " + (waveGenerator.index+1) + "/" + waveGenerator.waves.length, 620, 20, 150, 50);
			processing.text("EXP : " + battleData.score, 300, 20, 150, 50);*/
			
			//draw player's HP bar
			/*processing.stroke(255, 255, 255);
			processing.noFill();
			processing.rect(80, 22 - 4, 123, 10);
			processing.noStroke();
			var percent = battleData.hp / player.health;
			if(percent > 0.75) { processing.fill(0, 200, 0); }
			else if(percent > 0.5) { processing.fill(250, 250, 0); }
			else if(percent > 0.25) { processing.fill(250, 150, 0); }
			else { processing.fill(200, 0, 0); }

			processing.rect(82, 24 - 4, 120 * percent, 7);*/
			
			if( battleData.isPlanning() || battleData.isUpdating ) {
				infoDialog.draw(processing);
			}
			
			if(battleData.gameOver === true) {
				result.draw(processing);
				processing.noLoop();
			}
			else if(menu.show == true) {
				menu.draw(processing);
				processing.noLoop();
			}
			else if(announcement.show == true) {
				annoucement.draw(processing);
				processing.noLoop();
			}
			else if(waveView.show === true) {
				waveView.draw(processing);
			}
		}
	};
	
	startScene();
};