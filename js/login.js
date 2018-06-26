$(document).ready(function() {
	$("#Tnum").focusout(function() {
		/*console.log($("#Tnum").val());*/
		console.log($("#Tnum").val().length)
		var TnumFlag = true;
		if($("#Tnum").val().length != 11) {
			TnumFlag = false;
		} else {
			var ival = parseInt($("#Tnum").val());
			if(isNaN(ival)) {
				TnumFlag = false
			}
		}
		console.log(TnumFlag)
		if(!TnumFlag) {
			$("#Tnumalert").css("display", "block");
		} else {
			$("#Tnumalert").css("display", "none");
		}
	})
})