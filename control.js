

var InfoDialog = function(x, y) {
	this.x = x;
	this.y = y;
	this.width = 400;
	this.height = 300;
	
	this.close_button = new Button (150, -100, 30, 30, "CLOSE", new IconImage("close"));
	this.show = false;
	
	this.weapon = null;
	this.caption = null;
	this.description = null;
};

InfoDialog.prototype.draw = function(processing) {
	processing.fill(0, 0, 0);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.rect(-this.width/2, -this.height/2, this.width, this.height); //dark background

	this.close_button.draw(processing);
	this.weapon.draw(processing);
	
	processing.fill(255, 255, 255);
	processing.text(this.caption, -50, -90, 200, 200);
	processing.textLeading(20);
	processing.text(this.description, -170, -10, 240, 200);
	
	processing.popMatrix();
};

InfoDialog.prototype.setData = function() {
	var type = battleData.weaponSelected.get();
	this.weapon = new type(-140, -70);
	this.weapon.scale = 3;
	this.caption = this.weapon.name;
	this.description = weaponData[this.weapon.name].description;
};

/*
	Check if mouse pointer is within dialog area.
*/
InfoDialog.prototype.isMouseInside = function(mouseX, mouseY) {
	return Math.abs(mouseX - this.x) < this.width/2 && Math.abs(mouseY - this.y) < this.height/2;
}

/*
	Class for game controller.
*/
var Control = function(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	
	//create weapon buttons
	this.weapons = [
		/*new WeaponButton (50, this.height/2, 50, 50, "Turret", new Turret(0, -5)),
		new WeaponButton (150, this.height/2, 50, 50, "Cannon", new Cannon(0, -5)),
		new WeaponButton (250, this.height/2, 50, 50, "Frost", new Frost(0, -5))*/
		
	];
	var button_x = 50;
	for(var i = 0; i < weaponList.length; i++) {
		var name = weaponList[i].name;
		var weapon = weaponList[i].func;
		if(player.exp >= weaponData[name].req_exp) {
			this.weapons.push(new WeaponButton (button_x, this.height/2, 50, 50, name, new weapon(0, -5)));
			button_x += 100;
		}
	}
	
	this.pause_button = new Button (720, this.height/2, 30, 30, "Pause", new IconImage("play"));
	this.speed_button = new Button (770, this.height/2, 30, 30, "Speed", new IconImage("fast"));
	
	this.info_button = new Button (50, this.height/2, 50, 50, "Info", new IconImage("info"));
	this.retreat_button = new Button (150, this.height/2, 50, 50, "Cancel", new IconImage("cancel"));
	
	this.upgrade_button = new Button (250, this.height/2, 50, 50, "Upgrade", new IconImage("upgrade"));
	this.sell_button = new Button (350, this.height/2, 50, 50, "Sell", new IconImage("sell"));
};

Control.prototype.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.noStroke();
	processing.fill(10, 10, 10);
	processing.rect(0, 0, this.width, this.height);
	
	//draw buttons
	if(battleData.isBuilding || battleData.isUpdating) {
		this.info_button.draw(processing);
		this.retreat_button.draw(processing);
		
		if(battleData.isUpdating === true) {
			var weapon = battleData.weaponSelected;
			if(weapon.level < weapon.upgrades.length) {
				this.upgrade_button.enabled = (weapon.upgrades[weapon.level].price <= player.money);
			}
			else {
				this.upgrade_button.enabled = false;
			}
			this.upgrade_button.draw(processing);
			
			this.sell_button.draw(processing);
		}
	}
	else {
		for(var i = 0; i < this.weapons.length; i++) {
			var button = this.weapons[i];
			button.enabled = (button.image.price <= player.money); //disable button if not affordable
			button.draw(processing);
		}
	}
	this.pause_button.draw(processing);
	this.speed_button.draw(processing);
	
	processing.popMatrix();
};

/*
	Check if mouse pointer is within controller area.
*/
Control.prototype.isMouseInside = function(mouseX, mouseY) {
	return	mouseX > this.x &&
			mouseX < (this.x + this.width) &&
			mouseY > this.y &&
			mouseY < (this.y + this.height);
}

Control.prototype.restart = function() {
	this.pause_button.image.type = "play";
	
	this.weapons.splice(0, this.weapons.length);
	var button_x = 50;
	for(var i = 0; i < weaponList.length; i++) {
		var name = weaponList[i].name;
		var weapon = weaponList[i].func;
		if(player.exp >= weaponData[name].req_exp) {
			this.weapons.push(new WeaponButton (button_x, this.height/2, 50, 50, name, new weapon(0, -5)));
			button_x += 100;
		}
	}
};
