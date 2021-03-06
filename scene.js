
var Stage = [
	{ //stage 1
		row : 13,
		col : 20,
		paths : [
			[5, -1], [5, 0], [5, 1], [4, 1], [3, 1], [3, 2], [3, 3], [4, 3], [4, 4],
			[5, 4], [6, 4], [6, 5], [6, 6], [7, 6], [8, 6], [8, 7], [8, 8], [8, 9],
			[8, 10], [7, 10], [6, 10], [6, 11], [6, 12], [7, 12], [8, 12], [9, 12],
			[10, 12], [11, 12], [12, 12], [13, 12], [14, 12], [15, 12],
			[15, 11], [16, 11], [17, 11], [17, 10], [17, 9], [17, 8], [16, 8], [16, 7],
			[16, 6], [15, 6], [14, 6], [14, 5], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4],
			[19, 4], [20, 4]
		],
		waves : [
			[
				{ enemy: Quadrone, amount: 5 }
			],
			[
				{ enemy: Quadrone, amount: 9 },
				{ enemy: Hovercraft, amount: 2 }
			],
			[
				{ enemy: Hovercraft, amount: 5 },
				{ enemy: Quadrone, amount: 10 },
				{ enemy: Hovercraft, amount: 5 }
			]
		]
	},
	{ //stage 2
		row : 16,
		col : 20,
		paths : [
			[-1, 4], [0, 4], [1, 4], [1, 5], [2, 5], [3, 5], [3, 6],
			[3, 7], [3, 8], [3, 9], [3, 10], [3, 11], [3, 12],
			[4, 12], [5, 12], [6, 12], [7, 12], [8, 12], [8, 11],
			[8, 10], [8, 9], [7, 9], [7, 8], [7, 7], [7, 6],
			[7, 5], [7, 4], [6, 4], [5, 4], [5, 3], [5, 2],
			[5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1],
			[11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1],
			[17, 1], [18, 1], [18, 2], [18, 3], [18, 4], [18, 5],
			[18, 6], [17, 6], [16, 6], [15, 6], [14, 6], [13, 6],
			[13, 7], [13, 8], [13, 9], [13, 10], [13, 11], [14, 11],
			[15, 11], [16, 11], [17, 11], [18, 11], [19, 11], [20, 11]
		],
		waves : [
			[
				{ enemy: Quadrone, amount: 8 },
				{ enemy: Hovercraft, amount: 5 }
			],
			[
				{ enemy: Quadrone, amount: 5 },
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: SteelTank, amount: 3 }
			],
			[
				{ enemy: Hovercraft, amount : 7 },
				{ enemy: SteelTank, amount: 4 },
				{ enemy: Quadrone, amount: 5 }
			]
		]
	},
	{ //stage 3
		row : 18,
		col : 20,
		paths : [
			[-1, 6], [0, 6], [1, 6], [2, 6], [2, 5], [2, 4], [2, 3], [2, 2],
			[3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2], [9, 3],
			[10, 3], [11, 3], [11, 4], [11, 5], [11, 6], [12, 6], [13, 6], [14, 6],
			[14, 7], [14, 8], [14, 9], [14, 10], [14, 11], [13, 11], [12, 11],
			[11, 11], [11, 12], [11, 13], [11, 14], [10, 14], [9, 14], [9, 15],
			[8, 15], [7, 15], [6, 15], [5, 15], [4, 15], [3, 15], [2, 15], [2, 14],
			[2, 13], [2, 12], [2, 11], [1, 11], [0, 11], [-1, 11]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: SteelTank, amount : 5 },
			],
			[
				{ enemy: SteelTank, amount : 5 },
				{ enemy: EagleJet, amount : 3 }
			],
			[
				{ enemy: SteelTank, amount : 10 },
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: EagleJet, amount : 3 }
			],
			[
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: EagleJet, amount : 5 }
			]
		]
	},
	{ //stage 4
		row : 15,
		col : 22,
		paths : [
			[-1, 12], [0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [4, 11], [4, 10], [4, 9],
			[4, 8], [5, 8], [6, 8], [7, 8], [7, 7], [7, 6], [7, 5], [7, 4], [7, 3], [7, 2],
			[8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2],
			[17, 2], [18, 2], [18, 3], [18, 4], [18, 5], [18, 6], [18, 7], [17, 7], [16, 7],
			[15, 7], [15, 8], [15, 9], [15, 10], [14, 10], [13, 10], [13, 11], [13, 12], [13, 13],
			[13, 14], [13, 15]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: EagleJet, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 3 },
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: EagleJet, amount : 3 },
				{ enemy: SteelTank, amount : 3 }
			],
			[
				{ enemy: SteelTank, amount : 5 },
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SonicRocket, amount : 3 }
			]
		]
	},
	{ //stage 5
		row : 19,
		col : 20,
		paths : [
			[-1, 17], [0, 17], [1, 17], [2, 17], [2, 16], [2, 15], [2, 14], [2, 13], [3, 13],
			[4, 13], [5, 13], [5, 14], [5, 15], [5, 16], [5, 17], [6, 17], [7, 17], [8, 17],
			[8, 16], [8, 15], [8, 14], [8, 13], [8, 12], [8, 11], [8, 10], [8, 9], [8, 8], [8, 7],
			[8, 6], [8, 5], [8, 4], [8, 3], [8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2],
			[14, 2], [15, 2], [16, 2], [16, 3], [16, 4], [16, 5], [16, 6], [16, 7], [16, 8], [16, 9],
			[17, 9], [18, 9], [19, 9], [20, 9]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 4 },
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SteelTank, amount : 5 }
			],
			[
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SonicRocket, amount : 5 },
				{ enemy: EagleJet, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 5 },
				{ enemy: MagmaTank, amount : 3 }
			],
			[
				{ enemy: SteelTank, amount : 4 },
				{ enemy: EagleJet, amount : 4 },
				{ enemy: MagmaTank, amount : 4},
				{ enemy: SonicRocket, amount : 4 }
			]
		]
	},
	{ //stage 6
		row : 13,
		col : 20,
		paths : [
			[2, 13], [2, 12], [2, 11], [2, 10], [2, 9], [2, 8], [3, 8], [4, 8], [5, 8], [5, 7],
			[5, 6], [5, 5], [5, 4], [5, 3], [5, 2], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1],
			[10, 1], [11, 1], [11, 2], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3],
			[17, 3], [17, 4], [17, 5], [17, 6], [17, 7], [17, 8], [17, 9], [16, 9], [15, 9],
			[14, 9], [13, 9], [12, 9], [12, 10], [12, 11], [12, 12], [12, 13]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 10 },
				{ enemy: SteelTank, amount : 5 },
				{ enemy: EagleJet, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 10 },
				{ enemy: EagleJet, amount : 10 }
			],
			[
				{ enemy: EagleJet, amount : 8 },
				{ enemy: MagmaTank, amount : 10 }
			],
			[
				{ enemy: EagleJet, amount : 10 },
				{ enemy: SonicRocket, amount : 8 }
			],
			[
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SonicRocket, amount : 5 },
				{ enemy: Phantom, amount : 5 }
			]
		]
	},
	{ //stage 7
		row : 13,
		col : 20,
		paths : [
			[-1, 12], [0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [4, 11], [4, 10], [4, 9], [4, 8],
			[4, 7], [3, 7], [3, 6], [3, 5], [3, 4], [3, 3], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
			[8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7],
			[12, 6], [12, 5], [12, 4], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4],
			[18, 5], [18, 6], [18, 7], [19, 7], [20, 7]
		],
		waves : [
			[
				{ enemy: Hovercraft, amount : 5 },
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SteelTank, amount : 5 }
			],
			[
				{ enemy: EagleJet, amount : 5 },
				{ enemy: SteelTank, amount : 5 }
			],
			[
				{ enemy: SteelTank, amount : 5 },
				{ enemy: SonicRocket, amount : 5 }
			],
			[
				{ enemy: SonicRocket, amount : 5 },
				{ enemy: MagmaTank, amount : 5 }
			],
			[
				{ enemy: MagmaTank, amount : 5 },
				{ enemy: Phantom, amount : 5 }
			]
		]
	}
];

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
	var font = processing.loadFont("Calibri");
	//var font = processing.loadFont("NEUROPOL.ttf");
	processing.textFont(font, 20);

	var board = new Board(Stage[stage_idx]);
	var control = new Control(0, 520, 800, 80);
	var gen = new WaveGenerator(Stage[stage_idx].waves);
	var result = new Result(400, 300);
	var info = new InfoDialog(400, 300);
	var stat = new StatusPanel(0, 0, 800, 40);
	var formation = new FormationView(600, 240);
	var menu = new Menu(400, 300);
	var announcement = new Announcement(400, 300);
	
	var isScrolling = false;
	var enemyIntervalFrame = battleData.time;
	
	var screen = "battle"; //which screen to display
	var startScene = null;
	var battleScene = null;
	
	if(board.width() < w) {
		board.x_offset = (w - board.width())/2;
	}
	if(board.height() < h - control.height - stat.height) {
		board.y_offset = (h - control.height - board.height() + stat.height)/2;
	}
	
	/*var enemy = new Phantom(400, 300, 0, 0, 0, 0);
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
	
		processing.mousePressed = function() {
			if(battleData.gameOver === true) {
				return;
			}
			
			if(control.isMouseInside(processing.mouseX, processing.mouseY) === false &&
				stat.isMouseInside(processing.mouseX, processing.mouseY) === false) { //catch if outside controller
				if(battleData.isBuilding === false) {
					isScrolling = true; //go to scroll mode
				}
			}
		};
		
		processing.mouseDragged = function() {
			if(isScrolling) { //move (scroll) the view
			//console.log("height = " + board.height());
				if(board.width() > w) {
					board.x_offset += (processing.mouseX - processing.pmouseX);
					board.x_offset = processing.constrain(board.x_offset, processing.width - (board.col * board.tile_size), 0);
				}
				if(board.height () > h - control.height - stat.height) {
					board.y_offset += (processing.mouseY - processing.pmouseY);
					board.y_offset = processing.constrain(board.y_offset, processing.height - (board.row * board.tile_size) - control.height, 0 + stat.height);
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
					battleData.reset();
					board.restart();
					gen.restart();
					control.restart();
					enemyIntervalFrame = 0;
					formation.show = false;
					processing.loop();
				}
				else if(result.buttons[1].isMouseInside(resultX, resultY) && result.buttons[1].enabled === true) {
					//next stage
					if(stage_idx < Stage.length-1) {
						stage_idx++;
						board = new Board(Stage[stage_idx]);
						gen = new WaveGenerator(Stage[stage_idx].waves);
						battleData.reset();
						control.restart();
						enemyIntervalFrame = 0;
						processing.loop();
					}
					else {
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
					battleData.reset();
					board.restart();
					gen.restart();
					control.restart();
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
			if(formation.show === true) {
				if(formation.isMouseInside(processing.mouseX, processing.mouseY)) {
					//process mouse clicked in the buttons
					var boxX = processing.mouseX - formation.x;
					var boxY = processing.mouseY - formation.y;
					
					for(var i = 0; i < formation.buttons.length; i++) {
						if(formation.buttons[i].isMouseInside(boxX, boxY)) {
							formation.select(i);
							break;
						}
					}
				}
				else {
					formation.show = false;
				}
				
				return; //ignore further processing
			}
			
			//process clicks that happen within control area
			if(control.isMouseInside(processing.mouseX, processing.mouseY) === true) {
				//process mouse clicked in the buttons
				var controlX = processing.mouseX - control.x;
				var controlY = processing.mouseY - control.y;
				
				if(battleData.isBuilding || battleData.isUpdating) { //control displaying non-weapon buttons
					if(control.info_button.isMouseInside(controlX, controlY)) {
						info.setData();
						info.show = true;
					}
					else if(control.retreat_button.isMouseInside(controlX, controlY)) {
						battleData.isBuilding = false;
						battleData.isUpdating = false;
						battleData.weaponSelected = null;
						info.show = false;
					}
					else if(battleData.isUpdating === true) {
						if(control.upgrade_button.enabled && control.upgrade_button.isMouseInside(controlX, controlY)) {
							var weapon = battleData.weaponSelected;
							player.money -= weapon.upgrades[weapon.level].price;
							weapon.upgrade();
							if(weapon.level < weapon.upgrades.length) {
								control.upgrade_button.image.price = weapon.upgrades[weapon.level].price;
							}
							else {
								control.upgrade_button.image.price = 0;
							}
							
							/*battleData.isUpdating = false;
							battleData.weaponSelected = null;*/
							info.show = false;
						}
						else if(control.sell_button.isMouseInside(controlX, controlY)) {
							player.money += battleData.weaponSelected.value();
							board.removeDefense(battleData.weaponSelected);
							
							battleData.isUpdating = false;
							battleData.weaponSelected = null;
							info.show = false;
						}
					}
				}
				else { //control displaying weapon buttons
					for(var i = 0; i < control.weapons.length; i++) {
						var button = control.weapons[i];
						if(button.isMouseInside(controlX, controlY)) {
							//var price = control.weapons[i].image.price;
							if(button.enabled === true) {
								battleData.isBuilding = true; //go to build mode
								battleData.weaponSelected = button.image;
								break;
							}
						}
					}
				}
				
				if(control.pause_button.isMouseInside(controlX, controlY)) {
					if(control.pause_button.caption === "Pause") {
						if(control.pause_button.image.type === "pause") {
							board.pause = true;
							control.pause_button.image.type = "play";
						}
						else if(control.pause_button.image.type === "play") {
							board.pause = false;
							control.pause_button.image.type = "pause";
						}
					}
				}
				
				if(control.speed_button.isMouseInside(controlX, controlY)) {
					if(control.speed_button.image.type === "fast") {
						battleData.speed = 2;
						control.speed_button.image.type = "slow";
					}
					else if(control.speed_button.image.type === "slow") {
						battleData.speed = 1;
						control.speed_button.image.type = "fast";
					}
				}
				
				return; //ignore further processing
			}
			
			//process clicks that happen within information dialog area
			if(info.show === true) {
				if(info.isMouseInside(processing.mouseX, processing.mouseY)) {
					//process mouse clicked in the buttons
					var boxX = processing.mouseX - info.x;
					var boxY = processing.mouseY - info.y;
					
					if(info.close_button.isMouseInside(boxX, boxY) == true) {
						info.show = false;
					}
				}
				
				return; //ignore further processing
			}
			
			//process clicks that happen within status panel area
			if(stat.isMouseInside(processing.mouseX, processing.mouseY) === true) {
				//process mouse clicked in the buttons
				var statX = processing.mouseX - stat.x;
				var statY = processing.mouseY - stat.y;
				
				if(stat.wave_button.isMouseInside(statX, statY)) {
					formation.setData(gen.waves[gen.index]);
					formation.show = true;
				}
				else if(stat.setting_button.isMouseInside(statX, statY)) {
					menu.show = true;
				}
				
				return; //ignore further processing
			}
			
			//finally, process clicks that happen within the board
			if(battleData.isBuilding) {
				//build weapon
				if(board.addDefense(processing.mouseX, processing.mouseY) == true) {
					/*for(var i = 0; i < control.weapons.length; i++) {
						if(control.weapons[i].caption === battleData.weaponSelected) {
							player.money -= control.weapons[i].image.price; //apply the cost
							break;
						}
					}*/
					player.money -= battleData.weaponSelected.price;
				}
				battleData.isBuilding = false;
				battleData.weaponSelected = null;
			}
			else {
				//select weapon
				var weapon = board.getDefense(processing.mouseX, processing.mouseY);
				if(weapon !== null) {
					battleData.isUpdating = true;
					battleData.weaponSelected = weapon;
					if(weapon.level < weapon.upgrades.length) {
						control.upgrade_button.image.price = weapon.upgrades[weapon.level].price;
					}
					else {
						control.upgrade_button.image.price = 0;
					}
					control.sell_button.image.price = weapon.value();
				}
				else {
					battleData.isUpdating = false;
					battleData.weaponSelected = null;
				}
			}
			info.show = false;
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
				if(battleData.time - enemyIntervalFrame >= 60) { //generate enemy
					var enemy = gen.generateNext();
					if(enemy === null) { //no more enemy in a wave
						if(board.enemies.length === 0) { //wait until all current wave's enemies disappear
							var success = gen.nextWave();
							if(success === false) {
								//win game
								battleData.gameOver = true;
								result.buttons[1].enabled = true;
								result.win = true;
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
					result.buttons[1].enabled = false;
					result.win = false;
					board.pause = true;
				}
			}
			
			board.draw(processing);
			control.draw(processing);
			stat.draw(processing);
			
			//print status information
			processing.fill(255, 255, 255);
			processing.text("HP", 50, 20, 50, 50);
			processing.text(battleData.hp + "/" + player.health, 220, 20, 100, 50);
			processing.text("$" + player.money, 500, 20, 100, 50);
			processing.text("Wave " + (gen.index+1) + "/" + gen.waves.length, 600, 20, 150, 50);
			processing.text("EXP : " + player.exp, 300, 20, 150, 50);
			
			//draw player's HP bar
			processing.stroke(255, 255, 255);
			processing.noFill();
			processing.rect(80, 22 - 4, 123, 10);
			processing.noStroke();
			var percent = battleData.hp / player.health;
			if(percent > 0.75) { processing.fill(0, 200, 0); }
			else if(percent > 0.5) { processing.fill(250, 250, 0); }
			else if(percent > 0.25) { processing.fill(250, 150, 0); }
			else { processing.fill(200, 0, 0); }

			processing.rect(82, 24 - 4, 120 * percent, 7);
			
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
			else if(info.show === true) {
				info.draw(processing);
			}
			else if(formation.show === true) {
				formation.draw(processing);
			}
		}
	};
	
	startScene();
};