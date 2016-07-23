
/*
	Stage Select Screen
*/
var select = {
	title : 'Stage Select',
	index : 0,
	leftButton : new Button(100, 300, 50, 50, 'Previous', new IconImage("left")),
	rightButton : new Button(700, 300, 50, 50, 'Next', new IconImage("right")),
	playButton : new Button(400, 500, 300, 50, 'PLAY', new TextImage(20, 'PLAY', [255, 255, 255])),
	enterGame : function(processing) {}
};

select.move = function(right) {
	if(right) { //move right
		this.index++;
		this.index %= Stage.length;
	}
	else { //move left
		this.index--;
		if(this.index < 0) {
			this.index += Stage.length;
		}
	}
};

select.draw = function(processing) {
	processing.background(0, 0, 0);
			
	processing.fill(255, 255, 255);
	processing.textAlign(processing.CENTER);
	
	processing.textSize(40);
	processing.text(this.title, 400, 100);
	
	for(var i = 0; i < Stage.length; i++) {
		var indicator_x = processing.width/2 - 30 * (Math.floor(Stage.length/2) - i);
		if(i === this.index) {
			processing.ellipse(indicator_x, 450, 15, 15);
		}
		else {
			processing.ellipse(indicator_x, 450, 10, 10);
		}
	}
	
	this.leftButton.draw(processing);
	this.rightButton.draw(processing);
	this.playButton.draw(processing);
	
	processing.noLoop();
};

select.run = function(processing) {
	processing.mousePressed = function() {};
	processing.mouseDragged = function() {};
	processing.mouseReleased = function() {};
	
	processing.mouseClicked = function() {
		if(select.leftButton.isMouseInside(processing.mouseX, processing.mouseY)) {
			select.move(false);
			processing.loop();
		}
		else if(select.rightButton.isMouseInside(processing.mouseX, processing.mouseY)) {
			select.move(true);
			processing.loop();
		}
		else if(select.playButton.isMouseInside(processing.mouseX, processing.mouseY)) {
			if(select.index <= player.progress) {
				select.enterGame(processing);
				processing.loop();
			}
		}
	};
	
	processing.draw = function() {
		select.draw(processing);
	};
};