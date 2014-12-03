var Creator = require('Creator');
module.exports = function() {
	var self = Creator();
	self.role = 'builder';
	self.body = [Game.MOVE, Game.CARRY, Game.MOVE, Game.WORK];

	self.process = function(creep) {
		if(creep.energy == 0) {
			creep.moveTo(Game.spawns.Spawn1);
			Game.spawns.Spawn1.transferEnergy(creep);
		}
		else {
			var targets = creep.room.find(Game.CONSTRUCTION_SITES);
			if(targets.length) {
				creep.moveTo(targets[0]);
				creep.build(targets[0]);
			}
		}
	}
	return self;
};
