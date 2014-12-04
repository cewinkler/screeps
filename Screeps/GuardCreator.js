var Creator = require('Creator');
module.exports = function() {
	var self = Creator();
	self.role = 'guard';
	self.body = [Game.MOVE, Game.RANGED_ATTACK, Game.MOVE, Game.RANGED_ATTACK, Game.TOUGH, Game.TOUGH];

	self.process = function (creep) {
		var target = creep.pos.findNearest(Game.HOSTILE_CREEPS);
		if (target) {
		    if (!creep.pos.inRangeTo(target, 3))
		        creep.moveTo(target);
            else creep.rangedAttack(target);
		} else {
		    creep.moveTo(self.nearestSpawn(creep));
		}
	}
	return self;
};