var Creator = require('Creator');
module.exports = function() {
	var self = Creator();
	self.role = 'builder';
	self.body = [Game.MOVE, Game.CARRY, Game.MOVE, Game.WORK];

	self.process = function() {
	    if (self.creep.energy == 0) {
	        self.creep.moveTo(Game.spawns.Spawn1);
	        Game.spawns.Spawn1.transferEnergy(self.creep);
		}
		else {
	        var targets = self.creep.room.find(Game.CONSTRUCTION_SITES);
			if(targets.length) {
			    self.creep.moveTo(targets[0]);
			    self.creep.build(targets[0]);
			}
		}
	}
	return self;
};
