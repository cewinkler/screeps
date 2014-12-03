var _ = require('lodash');
var Harvester = require('HarvesterCreator');
var Guard = require('GuardCreator');
var Builder = require('BuilderCreator');

module.exports = new function () {
	var self = this;
	this.createCreep = function(creep) {
		if (creep == null) {
			console.log("no creator provided");
			return;
		}
		console.log("trying to create a creep of role " + creep.role);
		var likeCreeps = _.filter(Game.creeps, { memory: {role: creep.role } });
		var name = creep.role + (likeCreeps.length+1);
		var result = Game.spawns.Spawn1.createCreep(creep.body, name, {role: creep.role });
		console.log("Result of creating [" + creep.role + ":"+name+"]: " + result);
		if (result < 0) {
			console.log("Failed to create creep, Error " + result);
			return;
		}
		console.log("Successfully created creep '" + name + "' ??");
	};
	
	this.countCreepRole = function(role) {
	    return _.where(Game.creeps, { memory: { role: role }}).length;
	};

	this.tick = function(creep) {
		var instance = self.getInstance(creep);
		if (instance != null)
			instance.tick();
	};

	// If parameter is a Game.creep object, return class based on role. Else return class based on creep parameter.
	this.getInstance = function(creep) {
		var instance = Game.creeps[creep];
		if (instance != null) creep = instance.memory.role;
		switch (creep) {
			case 'harvester':
				return Harvester();
			case 'guard':
				return Guard();
			case 'builder':
				return Builder();
			default:
				return null;
		}
	};
};

