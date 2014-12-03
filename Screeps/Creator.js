module.exports = function() {
	var self = {};
	self.role = '';
	self.body = [];
	self.name = '';
	self.costs = [
		{"move":50},
		{"work":20},
		{"carry":50},
		{"attack":100},
		{"ranged_attack":150},
		{"heal":200},
		{"tough":5}
	];

	self.tick = function() { 
		if (self.exists()) self.process();
	};

	self.process = function() {};

	self.exists = function() {
		return (self.name.length > 0 && Game.creeps[self.name] != null);
	};
	
	self.getBuildCost = function () {
		var cost = 0;
		for (var x = 0;x < self.body.length;x++){
			var part = self.body[x];
			cost += self.costs[party];
		}
		return cost;
	};
	return self;
}