var Creator = require('Creator');
module.exports = function() {
	var self = Creator();
	self.role = 'guard';
	self.body = [Game.MOVE, Game.RANGED_ATTACK, Game.MOVE, Game.RANGED_ATTACK, Game.TOUGH];

	self.process = function () {
	    var target = self.creep.pos.findNearest(Game.HOSTILE_CREEPS);
		if (target) {
		    if (!self.creep.pos.inRangeTo(target, 3))
		        self.creep.moveTo(target);
		    else self.creep.rangedAttack(target);
		} else {
		    var flag = self.nearestFlag();
		    self.creep.moveTo(flag == null?self.nearestSpawn():flag);
		}
	}
	return self;
};