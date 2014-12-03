module.exports = function() {
	var self = {};
	self.role = '';
	self.body = [];
	self.name = '';
	self.tick = function() { 
		if (self.exists()) self.process();
	};

	self.process = function() {};
	
	self.exists = function() {
		return (self.name.length > 0 && Game.creeps[self.name] != null);
	};
}