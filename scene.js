
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
			[16, 6], [15, 6], [14, 6], [14, 5], [14, 4], [15, 4], [16, 4], [17, 4]
		],
		waves : [
			[
				{ enemy: Quadrone, amount: 5 }
			],
			[
				{ enemy: Quadrone, amount: 15 }
			],
			[
				{ enemy: Quadrone, amount: 10 },
				{ enemy: Hovercraft, amount: 2 }
			],
			[
				{ enemy: Quadrone, amount: 15 },
				{ enemy: Hovercraft, amount: 5 }
			],
			[
				{ enemy: Hovercraft, amount: 15 }
			],
			[
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: Quadrone, amount: 10 }
			],
			[
				{ enemy: Quadrone, amount: 15 },
				{ enemy: Hovercraft, amount: 15 }
			],
			[
				{ enemy: Quadrone, amount: 10 },
				{ enemy: Hovercraft, amount: 20 },
				{ enemy: Quadrone, amount: 10 }
			],
			[
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: Quadrone, amount: 20 },
				{ enemy: Hovercraft, amount: 10 }
			],
			[
				{ enemy: Hovercraft, amount: 30 }
			],
			[
				{ enemy: Quadrone, amount: 10 },
				{ enemy: Hovercraft, amount: 10 },
				{ enemy: SteelTank, amount: 5 }
			]
		],
		fund : 200,
		health : 10,
		base : [18, 4]
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
			[15, 11], [16, 11], [17, 11]//, [18, 11], [19, 11], [20, 11]
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
		],
		fund : 300,
		health : 10,
		base : [18, 11]
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
			[2, 13], [2, 12], [2, 11]//, [1, 11], [0, 11], [-1, 11]
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
		],
		fund : 300,
		health : 10,
		base : [2, 10]
	},
	{ //stage 4
		row : 15,
		col : 22,
		paths : [
			[-1, 12], [0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [4, 11], [4, 10], [4, 9],
			[4, 8], [5, 8], [6, 8], [7, 8], [7, 7], [7, 6], [7, 5], [7, 4], [7, 3], [7, 2],
			[8, 2], [9, 2], [10, 2], [11, 2], [12, 2], [13, 2], [14, 2], [15, 2], [16, 2],
			[17, 2], [18, 2], [18, 3], [18, 4], [18, 5], [18, 6], [18, 7], [17, 7], [16, 7],
			[15, 7], [15, 8], [15, 9], [15, 10], [14, 10], [13, 10], [13, 11], [13, 12]//, [13, 13],
			//[13, 14], [13, 15]
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
		],
		fund : 300,
		health : 10,
		base : [13, 13]
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
			[17, 9]//, [18, 9], [19, 9], [20, 9]
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
		],
		fund : 400,
		health : 10,
		base : [18, 9]
	},
	{ //stage 6
		row : 13,
		col : 20,
		paths : [
			[2, 13], [2, 12], [2, 11], [2, 10], [2, 9], [2, 8], [3, 8], [4, 8], [5, 8], [5, 7],
			[5, 6], [5, 5], [5, 4], [5, 3], [5, 2], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1],
			[10, 1], [11, 1], [11, 2], [11, 3], [12, 3], [13, 3], [14, 3], [15, 3], [16, 3],
			[17, 3], [17, 4], [17, 5], [17, 6], [17, 7], [17, 8], [17, 9], [16, 9], [15, 9],
			[14, 9], [13, 9], [12, 9], [12, 10]//, [12, 11], [12, 12], [12, 13]
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
		],
		fund : 400,
		health : 10,
		base : [12, 11]
	},
	{ //stage 7
		row : 13,
		col : 20,
		paths : [
			[-1, 12], [0, 12], [1, 12], [2, 12], [3, 12], [4, 12], [4, 11], [4, 10], [4, 9], [4, 8],
			[4, 7], [3, 7], [3, 6], [3, 5], [3, 4], [3, 3], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
			[8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [9, 7], [10, 7], [11, 7], [12, 7],
			[12, 6], [12, 5], [12, 4], [13, 4], [14, 4], [15, 4], [16, 4], [17, 4], [18, 4],
			[18, 5], [18, 6]//, [18, 7], [19, 7], [20, 7]
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
		],
		fund : 400,
		health : 10,
		base : [18, 7]
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
			
			/*if(battleData.isUpdating) {
				return;
			}*/
			
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
					board.offset.x = processing.constrain(board.offset.x, processing.width - (board.stage.col * board.tile_size), 0);
				}
				if(board.height () > h - control.height - statPanel.height) {
					board.offset.y += (processing.mouseY - processing.pmouseY);
					board.offset.y = processing.constrain(board.offset.y, processing.height - (board.stage.row * board.tile_size) - control.height, 0 + statPanel.height);
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
			/*if(infoDialog.show === true) {
				infoDialog.show = false;
				
				return; //ignore further processing
			}*/
			
			//process clicks that happen within action panel area
			if(battleData.isBuilding && battleData.weaponPlanned !== null) {
				//var actX = processing.mouseX - board.offset.x - actionPanel.x;
				//var actY = processing.mouseY - board.offset.y - actionPanel.y;
				
				var actX = processing.mouseX - infoDialog.x;
				var actY = processing.mouseY - infoDialog.y;
				
				//if(actionPanel.buildButton.isMouseInside(actX, actY)) {
				if(infoDialog.buildButton.isMouseInside(actX, actY)) {
					//build weapon
					board.addDefense();
					battleData.money -= battleData.weaponSelected.price;
					
					battleData.enterNormalMode();
					infoDialog.show = false;
				}
				//else if(actionPanel.cancelButton.isMouseInside(actX, actY)) {
				else if(infoDialog.cancelButton.isMouseInside(actX, actY)) {
					battleData.enterNormalMode();
					infoDialog.show = false;
				}
			}
			if(battleData.isUpdating) {
				//var actX = processing.mouseX - board.offset.x - actionPanel.x;
				//var actY = processing.mouseY - board.offset.y - actionPanel.y;
				
				var actX = processing.mouseX - infoDialog.x;
				var actY = processing.mouseY - infoDialog.y;
				
				//if(actionPanel.upgradeButton.enabled && actionPanel.upgradeButton.isMouseInside(actX, actY)) {
				if(/*infoDialog.upgradeButton.enabled &&*/ infoDialog.upgradeButton.isMouseInside(actX, actY)) {
					if(infoDialog.upgradeButton.enabled) {
						var weapon = battleData.weaponSelected;
						battleData.money -= weapon.upgrades[weapon.level].price;
						weapon.upgrade();
						/*if(weapon.level < weapon.upgrades.length) {
							//actionPanel.upgradeButton.image.price = weapon.upgrades[weapon.level].price;
							infoDialog.upgradeButton.setPrice(weapon.upgrades[weapon.level].price);
						}
						else {
							//actionPanel.upgradeButton.image.price = 0;
							infoDialog.upgradeButton.setPrice(0);
						}*/
						
						//infoDialog.show = false;
						
						infoDialog.setData();
					}
					return;
				}
				//else if(actionPanel.sellButton.isMouseInside(actX, actY)) {
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
				
				/*if(battleData.isBuilding) {
					if(control.info_button.isMouseInside(controlX, controlY)) {
						infoDialog.setData();
						infoDialog.show = true;
					}
					else if(control.retreat_button.isMouseInside(controlX, controlY)) {
						battleData.isBuilding = false;
						battleData.isUpdating = false;
						battleData.weaponSelected = null;
						infoDialog.show = false;
					}
				}*/
				//added as part of actionPanel
				/*else*/ if(battleData.isUpdating) {
				}
				else { //control displaying weapon buttons
					for(var i = 0; i < control.weapons.length; i++) {
						var button = control.weapons[i];
						if(button.isMouseInside(controlX, controlY)) {
							//var price = control.weapons[i].image.price;
							if(button.enabled === true) {
								battleData.enterBuildMode(button.image); //go to build mode
								
								if(battleData.weaponPlanned !== null) {
									var currentX = battleData.weaponPlanned.x;
									var currentY = battleData.weaponPlanned.y
									battleData.enterPlanMode();
									if(board.planDefense(currentX, currentY)) {
										infoDialog.setData();
									}
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
						//waveGenerator.pause = false;
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
					//actionPanel.set(battleData.weaponPlanned);
					infoDialog.setData();
				}
			}
			else {
				//select weapon
				var weapon = board.getDefense(processing.mouseX, processing.mouseY);
				if(weapon !== null && weapon !== battleData.weaponSelected) {
					battleData.enterUpdateMode(weapon);
					//actionPanel.set(weapon);
					infoDialog.setData();
				}
				else {
					battleData.enterNormalMode();
				}
			}
			//infoDialog.show = false;
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
			statPanel.draw(processing);
			
			//print status information
			processing.fill(255, 255, 255);
			processing.text("HP: " + battleData.hp, 550, 20, 50, 50);
			//processing.text(battleData.hp + "/", 220, 20, 100, 50);
			processing.text("$" + battleData.money, 500, 20, 100, 50);
			processing.text("Wave " + (waveGenerator.index+1) + "/" + waveGenerator.waves.length, 620, 20, 150, 50);
			processing.text("EXP : " + battleData.score, 300, 20, 150, 50);
			
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
			
			if( (battleData.isBuilding && battleData.weaponPlanned !== null) || battleData.isUpdating ) {
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