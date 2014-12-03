var Creator = require('Creator');
module.exports = function() {
	var self = Creator();
	self.role = 'guard';
	self.body = [Game.MOVE, Game.ATTACK, Game.MOVE, Game.ATTACK];

	self.process = function (creep) {
		var targets = creep.room.find(Game.HOSTILE_CREEPS);
		if (targets.length) {
		    creep.moveTo(targets[0]);
		    creep.attack(targets[0]);
		} else {
		    creep.moveTo(creep.room.find(Game.MY_SPAWNS)[0]);
		}
	}
	return self;
};