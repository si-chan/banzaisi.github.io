(function(ext)  {
	const baseURL = "http://localhost:14275/";
	const http = new XMLHttpRequest();

	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status: 2, msg: "Ready"};
	};	
	
	ext.lightOn(args) {
		$.ajax({
			url: "http://localhost:14275/lighton/1/1",
			complete: function() {
				callback();
			}
		});
	};
	
	ext.lightOff(args) {
		$.ajax({
			url: "http://localhost:14275/lightoff/1/1",
			complete: function() {
				callback();
			}
		});
	};
	
	var descriptor = {
		["w", "Rotate clock-wise for %n second(s)", "rotatecw", 1],
		["w", "Rotate anti clock-wise for %n second(s)", "rotateccw", 1],

		["w", "Shoulder up for %n second(s)", "shoulderup", 1],
		["w", "Shoulder down for %n second(s)", "shoulderdown", 1],

		["w", "Elbow up for %n second(s)", "elbowup", 1],
		["w", "Elbow down for %n second(s)", "elbowdown", 1],

		["w", "Wrist up for %n second(s)", "wristup", 1],
		["w", "Wrist down for %n second(s)", "wristdown", 1],

		["w", "Grip close for %n second(s)", "gripopen", 1],
		["w", "Grip open for %n second(s)", "gripclose", 1],

		[" ", "Light ON", "lighton"],
		[" ", "Light OFF", "lightoff"] 
	};

	ScratchExtensions.register("RobotArm", descriptor, ext);
	
})({});
