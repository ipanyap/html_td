

var Memory = {
	cookie_name: "player"
};

Memory.save = function () {
	var index = -1;
	if(document.cookie != document.cookie) {
		index = document.cookie.indexOf(this.cookie_name);
	}

	if (index === -1) {
		document.cookie=this.cookie_name+"="+ player.exp + "-" + player.progress + "; expires=Saturday, 30-Jul-2016 05:00:00 GMT";
		//console.log(document.cookie);
	}
};

Memory.load = function () {
	if(document.cookie) {
		var index = document.cookie.indexOf(this.cookie_name);
		if (index != -1) {
			var namestart = (document.cookie.indexOf("=", index) + 1);
			var namedash = (documen.cookie.indexOf("-", index));
			var nameend = document.cookie.indexOf(";", index);
			if (nameend == -1) {
				nameend = document.cookie.length;
			}
			player.exp = document.cookie.substring(namestart, namedash);
			player.progress = document.cookie.substring(namedash + 1, nameend);
			//console.log("loaded value " + value);
			return;
		}
	}
	//console.log("nothing loaded");
	//return 0;
};