
/*
	Class for result display at the end of game.
*/
var Result = function(x, y) {
	this.win = false; //win or lose?
	
	this.x = x;
	this.y = y;
	this.width = 400;
	this.height = 300;
	
	this.buttons = [
		new Button (-100, 100, 150, 50, "PLAY", new TextImage(20, "Play Again", [255, 255, 255])),
		new Button (100, 100, 150, 50, "NEXT", new TextImage(20, "Next Stage", [255, 255, 255]))
	];
};

Result.prototype.draw = function(processing) {
	processing.fill(0, 0, 0);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.rect(-this.width/2, -this.height/2, this.width, this.height); //dark background
	
	processing.textSize(30);
	if(this.win === true) {
		processing.fill(50, 255, 50);
		processing.text("MISSION ACCOMPLISHED", -155, -100);
	}
	else {
		processing.fill(255, 50, 50);
		processing.text("MISSION FAILED", -100, -100);
	}
	
	processing.textSize(20);
	processing.fill(255, 255, 255);
	processing.text("EXP Gained", -180, -50);
	processing.text("HP Remaining:", -180, -20);
	processing.text("Enemy Destroyed:", -180, 10);
	processing.text("Bonus Money:", -180, 40);
	
	processing.textAlign(processing.RIGHT);
	
	processing.text(battleData.score, 180, -50);
	processing.text(battleData.hp + "/" + player.health, 180, -20);
	processing.text(battleData.enemy[0] + "/" + battleData.enemy[1], 180, 10);
	processing.text("$" + Math.floor(player.money/10), 180, 40);
	
	for(var i = 0; i < this.buttons.length; i++) {
		this.buttons[i].draw(processing);
	}
	
	processing.popMatrix();
};