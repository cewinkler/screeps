var Creator = require('Creator');
module.exports = function() {
	var self = Creator();
	self.role = 'harvester';
	self.body = [Game.WORK, Game.CARRY, Game.MOVE, Game.MOVE];

    self.process = function(creep) {
        if (creep.energy < creep.energyCapacity) {
            var source = creep.pos.findNearest(Game.SOURCES);
            creep.moveTo(source);
            creep.harvest(source);
        } else {
            creep.moveTo(self.nearestSpawn(creep));
            creep.transferEnergy(self.nearestSpawn(creep));
        }
    };
	return self;
};