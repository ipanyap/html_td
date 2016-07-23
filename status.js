

var waveView = {
	x : 600,
	y : 240,
	width : 400,
	height : 400,
	show : false,
	buttons : [],
	photo : null,
	name : "N/A",
	description : "No data",
	selection : 0
};

waveView.draw = function(processing) {
	processing.fill(0, 0, 0);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.rect(-this.width/2, -this.height/2, this.width, this.height); //dark background
	
	for(var i = 0; i < this.buttons.length; i++) {
		this.buttons[i].draw(processing);
	}
	
	processing.stroke(255, 255, 255);
	processing.noFill();
	processing.rect(-180, 0, 360, 180);
	
	//draw selection
	processing.strokeWeight(2);
	processing.stroke(255, 0, 0);
	processing.rect(this.buttons[this.selection].x - 30, this.buttons[this.selection].y - 30, 110, 62);
	
	processing.strokeWeight(1);
	processing.stroke(255, 255, 255);
	processing.rect(-160, 50, 80, 80, 5);
	if(this.photo !== null) {
		this.photo.draw(processing);
	}
	
	processing.fill(255, 255, 255);
	processing.textSize(30);
	processing.text(this.name, -50, 20, 200, 50);
	processing.textSize(20);
	processing.text(this.description, -50, 70, 200, 110);
	
	processing.popMatrix();
};

waveView.select = function(id) {
	this.selection = id;
	var enemy = this.buttons[id].image.get();
	this.photo = new enemy(-120, 90);
	this.photo.scale = 2;
	this.photo.for_display = true;
	this.name = this.buttons[id].image.name;
	this.description = enemyData[this.buttons[id].image.name].description;
};

waveView.setData = function(wave) {
	this.buttons.splice(0, this.buttons.length);
	
	for(var i = 0; i < wave.length; i++) {
		var enemy = wave[i].enemy;
		var x = i % 3;
		var y = Math.floor(i / 3);
		this.buttons.push(new EnemyButton(-150 + 130 * x, -150 + y * 70, 50, 50, "", new enemy(0, 0), wave[i].amount));
	}
	
	this.select(0);
};

/*
	Check if mouse pointer is within view area.
*/
waveView.isMouseInside = function(mouseX, mouseY) {
	return Math.abs(mouseX - this.x) < this.width/2 && Math.abs(mouseY - this.y) < this.height/2;
}

/*
	Class for game status panel.
*/
var statPanel = {
	x : 0,
	y : 0,
	width : 800,
	height : 40,
	wave_button : new Button (720, 20, 30, 30, "Wave", new IconImage("wave")),
	setting_button : new Button (30, 20, 30, 30, "Settings", new IconImage("settings")),
	speed_button : new Button (770, 20, 30, 30, "Speed", new IconImage("play"))
};

statPanel.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.noStroke();
	processing.fill(10, 10, 10);
	processing.rect(0, 0, this.width, this.height);
	
	this.wave_button.draw(processing);
	this.setting_button.draw(processing);
	this.speed_button.draw(processing);
	
	//print status information
	processing.fill(255, 255, 255);
	processing.text("HP: " + battleData.hp, 550, 20, 50, 50);
	processing.text("$" + battleData.money, 500, 20, 100, 50);
	processing.text("Wv " + (waveGenerator.index+1) + "/" + waveGenerator.waves.length, 620, 20, 150, 50);
	processing.text("EXP : " + battleData.score, 300, 20, 150, 50);
	
	processing.popMatrix();
};

/*
	Check if mouse pointer is within status panel area.
*/
statPanel.isMouseInside = function(mouseX, mouseY) {
	return	mouseX > this.x &&
			mouseX < (this.x + this.width) &&
			mouseY > this.y &&
			mouseY < (this.y + this.height);
}

statPanel.restart = function() {
	this.speed_button.image.type = "play";
};