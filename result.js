
/*
	Class for result display at the end of game.
*/
var result = {
	win : false, //win or lose?
	
	x : 400,
	y : 300,
	width : 400,
	height : 300,
	
	buttons : [
		new Button (-100, 100, 150, 50, "PLAY", new TextImage(20, "Play Again", [255, 255, 255])),
		new Button (100, 100, 150, 50, "NEXT", new TextImage(20, "Next Stage", [255, 255, 255]))
	]
};

result.set = function(win) {
	this.win = win;
	this.buttons[1].enabled = win;
};

result.draw = function(processing) {
	processing.fill(0, 0, 0, 180);
	processing.strokeWeight(1);
	processing.stroke(150, 150, 255);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.rect(-this.width/2, -this.height/2, this.width, this.height); //dark background
	
	processing.stroke(0, 0, 0);
	processing.textAlign(processing.CENTER);
	processing.textSize(25);
	if(this.win === true) {
		processing.fill(50, 255, 50);
		processing.text("MISSION ACCOMPLISHED", 0, -100);
	}
	else {
		processing.fill(255, 50, 50);
		processing.text("MISSION FAILED", 0, -100);
	}
	
	processing.textSize(17);
	processing.textAlign(processing.LEFT);
	processing.fill(255, 255, 255);
	processing.text("EXP Gained", -180, -50);
	processing.text("HP Remaining:", -180, -20);
	processing.text("Enemy Destroyed:", -180, 10);
	processing.text("Bonus Money:", -180, 40);
	
	processing.textAlign(processing.RIGHT);
	
	processing.text(battleData.score, 180, -50);
	processing.text(battleData.hp, 180, -20);
	processing.text(battleData.enemy[0] + "/" + battleData.enemy[1], 180, 10);
	processing.text("$" + Math.floor(battleData.money/10), 180, 40);
	
	for(var i = 0; i < this.buttons.length; i++) {
		this.buttons[i].draw(processing);
	}
	
	processing.popMatrix();
};


/*
	Class for settings display during the game.
*/
var menu = {
	x : 400,
	y : 300,
	width : 400,
	height : 300,
	
	buttons : [
		new Button (0, -100, 150, 50, "RESUME", new TextImage(20, "CONTINUE", [255, 255, 255])),
		new Button (0, 0, 150, 50, "RESTART", new TextImage(20, "RESTART", [255, 255, 255])),
		new Button (0, 100, 150, 50, "EXIT", new TextImage(20, "ABORT", [255, 255, 255]))
	],
	
	show : false
};

menu.draw = function(processing) {
	processing.fill(0, 0, 0, 180);
	processing.strokeWeight(1);
	processing.stroke(150, 150, 255);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.rect(-this.width/2, -this.height/2, this.width, this.height); //dark background
	
	for(var i = 0; i < this.buttons.length; i++) {
		this.buttons[i].draw(processing);
	}
	
	processing.popMatrix();
};


/*
	Class for announcement display during the game.
*/
var announcement = {
	x : 400,
	y : 300,
	width : 400,
	height : 300,
	
	title : "",
	message : "",
	image : undefined,
	
	ok_button : new Button (0, 100, 150, 50, "OK", new TextImage(20, "OK", [255, 255, 255])),
	
	show : false
};

announcement.draw = function(processing) {
	processing.fill(0, 0, 0);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.rect(-this.width/2, -this.height/2, this.width, this.height); //dark background
	
	processing.fill(255, 255, 255);
	processing.text(this.title, -50, -90, 200, 200);
	processing.textLeading(20);
	processing.text(this.message, -170, -10, 240, 200);
	
	ok_button.draw(processing);
	
	processing.popMatrix();
};