
/*
	Class for drawing automatic text. This is to be used in button with texts
*/
var TextImage = function(weight, caption, color) {
	this.weight = weight; //font weight
	this.caption = caption; //text to be displayed
	this.color = color; //text color
}

TextImage.prototype.draw = function(processing) {
	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	processing.fill(this.color);
	
	processing.textSize(this.weight);
	processing.textAlign(processing.CENTER, processing.CENTER);
	processing.text(this.caption, 0, 0);
	processing.textAlign(processing.LEFT, processing.BASELINE);
}

/*
	Class for drawing certain icon. Used in special buttons
*/
var IconImage = function(type) {
	this.type = type;
	this.price = 0;
};

IconImage.prototype.draw = function(processing) {
	processing.noStroke();
	processing.fill(255, 255, 255);
	
	processing.pushMatrix();
	
	var label = ""
	if(this.type === "pause") {
		processing.rect(-10, -8, 8, 16);
		processing.rect(2, -8, 8, 16);
	}
	else if(this.type === "play") {
		processing.triangle(-8, -10, -8, 10, 8, 0);
	}
	else if(this.type === "info") {
		processing.rect(-4, -8, 8, 15);
		processing.ellipse(0, -15, 7, 7);
		label = "Info";
	}
	else if(this.type === "upgrade") {
		processing.rect(-7, -5, 14, 12);
		processing.triangle(-15, -5, 15, -5, 0, -20);
		processing.rect(10, 0, 10, 2);
		processing.rect(14, -4, 2, 10);
		
		if(this.price === 0) {
			label = "";
		}
		else {
			label = "$" + this.price;
		}
	}
	else if(this.type === "build") {
		processing.strokeWeight(5);
		processing.stroke(255, 255, 255);
		processing.line(-10, 0, -5, 5);
		processing.line(-5, 5, 10, -10);
		label = "Build";
	}
	else if(this.type === "cancel") {
		processing.pushMatrix();
		processing.translate(0, -5);
		processing.rotate(150);
		processing.rect(-5, -13, 10, 26);
		processing.rect(-13, -5, 26, 10);
		processing.popMatrix();
		label = "Cancel";
	}
	else if(this.type === "sell") {
		processing.textAlign(processing.CENTER, processing.CENTER);
		processing.textSize(30);
		processing.text("$", 0, -7);
		label = "$" + this.price;
	}
	else if(this.type === "wave") {
		processing.textAlign(processing.CENTER, processing.CENTER);
		processing.textSize(30);
		processing.text("?", 0, 0);
	}
	else if(this.type === "close") {
		processing.textAlign(processing.CENTER, processing.CENTER);
		processing.textSize(30);
		processing.text("X", 0, 0);
	}
	else if(this.type === "fast") {
		/*processing.triangle(0, -10, 0, 10, 10, 0);
		processing.triangle(-8, -10, -8, 10, 2, 0);*/
		processing.textAlign(processing.CENTER, processing.CENTER);
		processing.textSize(20);
		processing.text("1x", 0, 0);
	}
	else if(this.type === "slow") {
		/*processing.triangle(0, -6, 0, 6, 8, 0);
		processing.triangle(-6, -6, -6, 6, 2, 0);*/
		processing.textAlign(processing.CENTER, processing.CENTER);
		processing.textSize(20);
		processing.text("2x", 0, 0);
	}
	else if(this.type === "settings") {
		processing.pushMatrix();
		processing.ellipse(0, 0, 15, 15);
		for(var i = 0;i < 8; i++) {
			processing.rotate(Math.PI * i / 4);
			processing.rect(-10, -2, 20, 4);
		}
		processing.fill(0, 0, 0);
		processing.ellipse(0, 0, 7, 7);
		processing.popMatrix();
	}
	processing.textSize(13);
	processing.textAlign(processing.CENTER, processing.CENTER);
	processing.text(label, 0, 15);
	processing.textAlign(processing.LEFT, processing.BASELINE);
	
	processing.popMatrix();
};


/*
	Class for buttons.
*/
var Button = function(x, y, w, h, caption, image) {
	this.x = x; // (x, y) is the coordinate of the center of button
	this.y = y;
	this.width = w;
	this.height = h;
	this.caption = caption; //name or description of the button
	this.image = image; //image of the button
	this.enabled = true; //is the button clickable?
};

Button.prototype.draw = function(processing) {
	//processing.textAlign(processing.CENTER, processing.CENTER);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.stroke(255, 255, 255);
	//processing.fill(0, 0, 0);
	processing.noFill();
	processing.rect(-this.width/2, -this.height/2, this.width, this.height, 5);
	processing.fill(255, 255, 255);
	//processing.text(this.caption, this.x , this.y);

	this.image.draw(processing);
	
	if(this.enabled === false) { //cover the button with dark layer if disabled
		processing.noStroke();
		processing.fill(0, 0, 0, 100);
		processing.rect(-this.width/2, -this.height/2, this.width + 1, this.height + 1, 5);
	}
	
	processing.popMatrix();
	
	//processing.textAlign(processing.LEFT, processing.BASELINE);
};

/*
	Check if mouse pointer is over this button.
	Note that the mouse location must be in the same coordinate system as the button
*/
Button.prototype.isMouseInside = function(mouseX, mouseY) {
	return	Math.abs(mouseX - this.x) < this.width/2 && Math.abs(mouseY - this.y) < this.height/2;
}

var DialogButton = function(x, y, w, h, caption, image) {
	Button.call(this, x, y, w, h, caption, image);
	this.price = "";
};

DialogButton.prototype = Object.create(Button.prototype);

DialogButton.prototype.setPrice = function(price) {
	if(price === 0) {
		this.price = "";
	}
	else {
		this.price = " ($" + price + ")";
	}
};

DialogButton.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.strokeWeight(2);
	processing.stroke(150, 150, 255);
	processing.noFill();
	processing.rect(-this.width/2, -this.height/2, this.width, this.height);
	processing.fill(255, 255, 255);
	//processing.text(this.caption, this.x , this.y);

	processing.textSize(15);
	processing.textAlign(processing.CENTER, processing.CENTER);
	processing.text(this.caption + this.price, 0, 0);
	processing.textAlign(processing.LEFT, processing.BASELINE);
	
	if(this.enabled === false) { //cover the button with dark layer if disabled
		processing.noStroke();
		processing.fill(0, 0, 0, 100);
		processing.rect(-this.width/2, -this.height/2, this.width, this.height);
	}
	
	processing.popMatrix();
};

var WeaponButton = function(x, y, w, h, caption, image) {
	Button.call(this, x, y, w, h, caption, image);
};

WeaponButton.prototype = Object.create(Button.prototype);

WeaponButton.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.stroke(255, 255, 255);
	processing.fill(0, 0, 0);
	processing.rect(-this.width/2, -this.height/2, this.width, this.height, 5);
	processing.fill(255, 255, 255);
	//processing.text(this.caption, this.x , this.y);
	processing.textSize(15);
	processing.textAlign(processing.CENTER, processing.CENTER);
	processing.text("$" + this.image.price, 0, 15);
	processing.textAlign(processing.LEFT, processing.BASELINE);
	this.image.draw(processing);
	
	if(this.enabled === false) { //cover the button with dark layer if disabled
		processing.noStroke();
		processing.fill(0, 0, 0, 100);
		processing.rect(-this.width/2, -this.height/2, this.width + 1, this.height + 1, 5);
	}
	
	processing.popMatrix();
};


var EnemyButton = function(x, y, w, h, caption, image, amount) {
	Button.call(this, x, y, w, h, caption, image);
	
	image.for_display = true;
	this.amount = amount;
};

EnemyButton.prototype = Object.create(Button.prototype);

EnemyButton.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.stroke(255, 255, 255);
	processing.fill(0, 0, 0);
	processing.rect(-this.width/2, -this.height/2, this.width, this.height, 5);
	
	processing.fill(255, 255, 255);
	processing.textSize(25);
	processing.textAlign(processing.CENTER, processing.CENTER);
	processing.text("x " + this.amount, 50, 0);
	processing.textAlign(processing.LEFT, processing.BASELINE);
	this.image.draw(processing);
	
	processing.popMatrix();
};
