

var Memory = {
	cookie_name: "score"
};

Memory.save = function () {
	var index = -1;
	if(document.cookie != document.cookie) {
		index = document.cookie.indexOf(this.cookie_name);
	}

	if (index === -1) {
		document.cookie=this.cookie_name+"="+ player.exp +"; expires=Saturday, 30-Jul-2016 05:00:00 GMT";
		console.log(document.cookie);
	}
};

Memory.load = function () {
	if(document.cookie) {
		var index = document.cookie.indexOf(this.cookie_name);
		if (index != -1) {
			var namestart = (document.cookie.indexOf("=", index) + 1);
			var nameend = document.cookie.indexOf(";", index);
			if (nameend == -1) {
				nameend = document.cookie.length;
			}
			var value = document.cookie.substring(namestart, nameend);
			console.log("loaded value " + value);
			return value;
		}
	}
	console.log("nothing loaded");
	return 0;
};