
/*
	The main function who manages scenes
*/
var scene = function(processing) {
	var w = 800;
	var h = 600;
	
	processing.size( w, h );
	processing.frameRate( 60 );
	
	//load font
	//var font = processing.loadFont("Calibri");
	var font = processing.createFont("neuropol", 20);
	processing.textFont(font, 20);
	
	start.enterGame = function(processing) {
		select.run(processing);
	};
	
	select.enterGame = function(processing) {
		game.stage_idx = select.index;
		game.run(processing);
	};
	
	game.quitGame = function(processing) {
		start.run(processing);
	};
	
	Memory.load();
	start.run(processing);
	
	/*var enemy = new SonicRocket(400, 300, 0, 0, 0, 0);
	enemy.scale = 4;
	processing.draw = function() {
		processing.background(102, 123.5, 127.5);
		enemy.draw(processing);
	};*/
};