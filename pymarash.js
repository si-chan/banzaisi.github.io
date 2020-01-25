(function(ext) {
	// URL for the server
	const pymarashserver = 'http://localhost:14275/'
	
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};	
	
	// HTTP client function
	function sendMessage(command, data) {
		$.ajax({
			type: 'GET',
			url: 'http://localhost:14275/'+command+'/1/'+data,
			dataType: 'html',
			success: function(data) {}
		});
	};
	
	// Turn the robot arm light on
	ext.lighton = function() {
		sendMessage('lighton', 0);
	};
	
	// Turn the robot arm light off
	ext.lightoff = function() {
		sendMessage('lightoff', 0);
	};
	
	ext.rotatecw = function() {
		

	// Block and block menu description
	var descriptor = {
		blocks: [
			// Block type, block name, function name
			[' ', 'Light ON', 'lighton'],
			[' ', 'Light OFF', 'lightoff'],

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
	};

	// Register the extension
	ScratchExtensions.register('RobotArm', descriptor, ext);
	
})({});
