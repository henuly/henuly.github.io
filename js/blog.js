window.onresize = function() {
	var mainwidth = document.getElementById("main").offsetWidth;
	if(mainwidth < 1230) {
		document.getElementById("info").style.display = "none";
	} else {
		document.getElementById("info").style.display = "block";
	}
}