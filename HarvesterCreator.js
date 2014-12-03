module.exports = new function() {
	var self = this;
	self.role = 'harvester';
	self.body = [Game.WORK, Game.CARRY, Game.MOVE];
	console.log("Harvester Creator called");
};