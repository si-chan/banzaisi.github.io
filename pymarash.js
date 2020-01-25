(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
	ext._getStatus = function() {
		return {status: 2, msg: 'Ready'};
	};	
	
	// Turn the robot arm light on
	ext.lightOn = function() {
		$.ajax({
			url: 'http://localhost:14275/lighton/1/1',
			dataType: 'html',
			success: function(data) {}
		});
	};
	
	// Turn the robot arm light off
	ext.lightOff = function() {
		$.ajax({
			url: 'http://localhost:14275/lightoff/1/1',
			dataType: 'html',
			success: function(data) {}
		});
	};

	// Block and block menu description
	var descriptor = {
		blocks: [
			// Block type, block name, function name
			[' ', 'Light ON', 'lightOn'],
			[' ', 'Light OFF', 'lightOff'],
		]
	};

	// Register the extension
	ScratchExtensions.register('RobotArm', descriptor, ext);
	
})({});
