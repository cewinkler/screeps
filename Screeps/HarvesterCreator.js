var Creator = require('Creator');
module.exports = function() {
	var self = Creator();
	self.role = 'harvester';
	self.body = [Game.WORK, Game.CARRY, Game.MOVE, Game.MOVE];

    self.process = function() {
        if (self.creep.energy < self.creep.energyCapacity) {
            var source = self.creep.pos.findNearest(Game.SOURCES);
            self.creep.moveTo(source);
            self.creep.harvest(source);
        } else {
            self.creep.moveTo(self.nearestSpawn());
            self.creep.transferEnergy(self.nearestSpawn());
        }
    };
	return self;
};