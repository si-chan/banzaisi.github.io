class ScratchRobotArm {
	const baseURL = "http://localhost:14275/";
	const http = new XMLHttpRequest();
	
	getInfo() {
		return {
			"id": "ScratchRobotArm",
			"name": "ScratchRobotArm",
			"blocks": [
				{
					"opcode": "lightOn",
					"blockType": "command",
					"text": "Light On",
				},
				{
					"opcode": "lightOff",
					"blockType": "command",
					"text": "Light Off",					
				}
			]
		}
	}
	
	lightOn(args) {
		http.open("GET", baseURL + "lighton/1/1";
		http.send();
	}
	
	lightOff(args) {
		http.open("GET", baseURL + "lightoff/1/1";
		http.send();
	}
	
}