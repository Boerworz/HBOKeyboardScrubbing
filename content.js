document.addEventListener("keydown", function(e) {
	var player = document.getElementById("swf");
	var absoluteAdjustmentInSeconds = e.shiftKey ? 15 : 5;
	if (e.keyCode == 37 /* Left arrow key */) {
		player.setPosition(player.getPosition() - absoluteAdjustmentInSeconds);
	} else if (e.keyCode == 39 /* Right arrow key */) {
		player.setPosition(player.getPosition() + absoluteAdjustmentInSeconds);
	}
});
