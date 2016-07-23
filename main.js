
/*
	The main function who manages scenes
*/
var scene = function(processing) {
	var w = 800;
	var h = 600;
	
	processing.size( w, h );
	processing.frameRate( 60 );
	
	//load font
	var font = processing.loadFont("Calibri");
	//var font = processing.loadFont("NEUROPOL.ttf");
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
	
	player.exp = Memory.load();
	start.run(processing);
};