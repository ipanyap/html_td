

var FormationView = function(x, y) {
	this.x = x;
	this.y = y;
	this.width = 400;
	this.height = 400;
	
	this.show = false;
	
	this.buttons = [];
	this.photo = null;
	this.name = "N/A";
	this.description = "No data";
	this.selection = 0;
};

FormationView.prototype.draw = function(processing) {
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

FormationView.prototype.select = function(id) {
	this.selection = id;
	var enemy = this.buttons[id].image.get();
	this.photo = new enemy(-120, 90);
	this.photo.scale = 2;
	this.photo.for_display = true;
	this.name = this.buttons[id].image.name;
	this.description = enemyData[this.buttons[id].image.name].description;
};

FormationView.prototype.setData = function(wave) {
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
FormationView.prototype.isMouseInside = function(mouseX, mouseY) {
	return Math.abs(mouseX - this.x) < this.width/2 && Math.abs(mouseY - this.y) < this.height/2;
}

/*
	Class for game status panel.
*/
var StatusPanel = function(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	
	this.wave_button = new Button (700, this.height/2, 30, 30, "Wave", new IconImage("wave"));
	this.setting_button = new Button (770, this.height/2, 30, 30, "Settings", new IconImage("settings"));
};

StatusPanel.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.noStroke();
	processing.fill(10, 10, 10);
	processing.rect(0, 0, this.width, this.height);
	
	this.wave_button.draw(processing);
	this.setting_button.draw(processing);
	
	processing.popMatrix();
};

/*
	Check if mouse pointer is within status panel area.
*/
StatusPanel.prototype.isMouseInside = function(mouseX, mouseY) {
	return	mouseX > this.x &&
			mouseX < (this.x + this.width) &&
			mouseY > this.y &&
			mouseY < (this.y + this.height);
}

StatusPanel.prototype.restart = function() {
};