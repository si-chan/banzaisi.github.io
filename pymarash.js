(function(ext)  {
	const baseURL = "http://localhost:14275/";
	const http = new XMLHttpRequest();

	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status: 2, msg: "Ready"};
	};	
	
	ext.lightOn(args) {
		$.ajax({
			url: "http://localhost:14275/lighton/1/1"
		});
	};
	
	ext.lightOff(args) {
		$.ajax({
			url: "http://localhost:14275/lightoff/1/1"
		});
	};
	
	var descriptor = {
		[" ", "Light ON", "lighton"],
		[" ", "Light OFF", "lightoff"] 
	};

	ScratchExtensions.register("RobotArm", descriptor, ext);
	
})({});
