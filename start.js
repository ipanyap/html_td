
/*
	Start Screen
*/
var start = {
	title : 'Command & Defend',
	playButton : new Button(400, 500, 300, 50, 'START', new TextImage(20, 'START', [255, 255, 255])),
	enterGame : function(processing) {}
};

start.draw = function(processing) {
	processing.background(0, 0, 0);
			
	processing.fill(255, 255, 255);
	processing.textAlign(processing.CENTER);
	
	processing.textSize(60);
	processing.text(this.title, 400, 400);
	
	this.playButton.draw(processing);
	
	processing.noLoop();
};

start.run = function(processing) {
	processing.mousePressed = function() {};
	processing.mouseDragged = function() {};
	processing.mouseReleased = function() {};
	
	processing.mouseClicked = function() {
		if(start.playButton.isMouseInside(processing.mouseX, processing.mouseY)) {
			start.enterGame(processing);
			processing.loop();
		}
	};
	
	processing.draw = function() {
		start.draw(processing);
	};
};