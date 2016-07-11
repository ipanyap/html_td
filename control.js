

var infoDialog = {
	x : 400,
	y : 300,
	width : 300,
	height : 250,
	
	//close_button = new Button (150, -100, 30, 30, "CLOSE", new IconImage("close"));
	show : false,
	//upgradeButton : new Button (100, 100, 100, 50, "Upgrade", new TextImage(20, "Upgrade", [255, 255, 255])),
	//sellButton : new Button (-100, 100, 100, 50, "Sell", new TextImage(20, "Sell", [255, 255, 255])),
	
	weapon : undefined,
	caption : '',
	description : ''
};

infoDialog.draw = function(processing) {
	processing.fill(0, 0, 0, 100);
	processing.strokeWeight(2);
	processing.stroke(150, 150, 255);
	
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.rect(-this.width/2, -this.height/2, this.width, this.height); //dark background

	processing.strokeWeight(1);
	processing.stroke(0, 0, 0);
	//this.close_button.draw(processing);
	this.weapon.draw(processing);
	
	//this.upgradeButton.draw(processing);
	//this.sellButton.draw(processing);
	
	processing.textSize(20);
	processing.fill(255, 255, 255, 150);
	processing.text(this.caption, -30, -80, 150, 100);
	processing.textSize(15);
	processing.textLeading(20);
	processing.text(this.description, -130, -20, 280, 140);
	
	processing.popMatrix();
};

infoDialog.setData = function() {
	var absX = battleData.weaponSelected.x + board.offset.x;
	var absY = battleData.weaponSelected.y + board.offset.y;
	
	//determine information dialog location based on weapon's location
	var viewport = board.viewport;
	if(absX < viewport.x + viewport.w/2) this.x = viewport.w + viewport.x - 20 - this.width/2;
	else this.x = viewport.x + 20 + this.width/2;
	if(absY < viewport.y + viewport.h/2) this.y = viewport.h + viewport.y - 20 - this.height/2;
	else this.y = viewport.y + 20 + this.height/2;
	
	var type = battleData.weaponSelected.get();
	this.weapon = new type(-100, -70);
	this.weapon.scale = 2.5;
	this.caption = this.weapon.name;
	this.description = weaponData[this.weapon.name].description;
	
	this.show = true;
};

/*
	Check if mouse pointer is within dialog area.
*/
infoDialog.isMouseInside = function(mouseX, mouseY) {
	return Math.abs(mouseX - this.x) < this.width/2 && Math.abs(mouseY - this.y) < this.height/2;
}

var actionPanel = {
	x : 0,
	y : 0,
	//infoButton : new Button (0, 50, 50, 50, "Info", new IconImage("info")),
	upgradeButton : new Button (60, 0, 50, 50, "Upgrade", new IconImage("upgrade")),
	sellButton : new Button (-60, 0, 50, 50, "Sell", new IconImage("sell"))
};

actionPanel.set = function(weapon) {
	this.x = weapon.x;
	this.y = weapon.y;
	
	//var weapon = battleData.weaponSelected;
	if(weapon.level < weapon.upgrades.length) {
		this.upgradeButton.image.price = weapon.upgrades[weapon.level].price;
		this.upgradeButton.enabled = (weapon.upgrades[weapon.level].price <= battleData.money);
	}
	else {
		this.upgradeButton.image.price = 0;
		this.upgradeButton.enabled = false;
	}
	this.sellButton.image.price = weapon.value();
};

actionPanel.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	//this.infoButton.draw(processing);
	this.upgradeButton.draw(processing);
	this.sellButton.draw(processing);
	
	processing.popMatrix();
};

/*
	Class for game controller.
*/
var control = {
	x : 0,
	y : 520,
	width : 800,
	height : 80,
	
	//create weapon buttons
	weapons : [],
	
	//this.pause_button = new Button (720, this.height/2, 30, 30, "Pause", new IconImage("play"));
	//this.speed_button = new Button (770, this.height/2, 30, 30, "Speed", new IconImage("play"));
	
	info_button : new Button (50, 40, 50, 50, "Info", new IconImage("info")),
	retreat_button : new Button (150, 40, 50, 50, "Cancel", new IconImage("cancel"))
	
	//this.upgrade_button = new Button (250, this.height/2, 50, 50, "Upgrade", new IconImage("upgrade"));
	//this.sell_button = new Button (350, this.height/2, 50, 50, "Sell", new IconImage("sell"));
};

control.draw = function(processing) {
	processing.pushMatrix();
	processing.translate(this.x, this.y);
	
	processing.noStroke();
	processing.fill(10, 10, 10);
	processing.rect(0, 0, this.width, this.height);
	
	//draw buttons
	//if(battleData.isBuilding /*|| battleData.isUpdating*/) {
		//this.info_button.draw(processing);
		//this.retreat_button.draw(processing);
		
		/*if(battleData.isUpdating === true) {
			var weapon = battleData.weaponSelected;
			if(weapon.level < weapon.upgrades.length) {
				this.upgrade_button.enabled = (weapon.upgrades[weapon.level].price <= battleData.money);
			}
			else {
				this.upgrade_button.enabled = false;
			}
			this.upgrade_button.draw(processing);
			
			this.sell_button.draw(processing);
		}*/
	//}
	//else {
		for(var i = 0; i < this.weapons.length; i++) {
			var button = this.weapons[i];
			button.enabled = (button.image.price <= battleData.money); //disable button if not affordable
			button.draw(processing);
			
			if(battleData.isBuilding === true && button.image === battleData.weaponSelected) {
				processing.noFill();
				processing.stroke(0, 255, 0);
				processing.strokeWeight(3);
				processing.rect(button.x - 30, button.y - 30, 60, 60, 4);
				processing.strokeWeight(1);
			}
		}
	//}
	//this.pause_button.draw(processing);
	//this.speed_button.draw(processing);
	
	processing.popMatrix();
};

/*
	Check if mouse pointer is within controller area.
*/
control.isMouseInside = function(mouseX, mouseY) {
	return	mouseX > this.x &&
			mouseX < (this.x + this.width) &&
			mouseY > this.y &&
			mouseY < (this.y + this.height);
}

control.restart = function() {
	//this.pause_button.image.type = "play";
	//this.speed_button.image.type = "play";
	
	this.weapons.splice(0, this.weapons.length);
	var button_x = 150;
	for(var i = 0; i < weaponList.length; i++) {
		var name = weaponList[i].name;
		var weapon = weaponList[i].func;
		if(player.exp >= weaponData[name].req_exp) {
			this.weapons.push(new WeaponButton (button_x, this.height/2, 50, 50, name, new weapon(0, -5)));
			button_x += 100;
		}
	}
};
