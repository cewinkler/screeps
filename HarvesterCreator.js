var creator = require('Creator');
module.exports = function() {
	self = creator();
	self.role = 'harvester';
	self.body = [Game.WORK, Game.CARRY, Game.MOVE];
	self.tick = function() {
		if(creep.energy < creep.energyCapacity) {
			var sources = creep.room.find(Game.SOURCES);
			creep.moveTo(sources[0]);
			creep.harvest(sources[0]);
		}
		else {
			creep.moveTo(Game.spawns.Spawn1);
			creep.transferEnergy(Game.spawns.Spawn1)
		}
	}
};