var _ = require('lodash');
module.exports = new function () {
		this.createCreep = function(creep) {
			if (creep == null) {
				console.log("no creator provided");
				return;
			}
			console.log("trying to create a creep of role " + creep.role);
			var likeCreeps = _.filter(Game.creeps, { memory: {role: creep.role } });
			var name = creep.role + (likeCreeps.length+1);
			var result = Game.spawns.Spawn1.createCreep(creep.body, name);
			console.log("Result of creating [" + creep.role + ":"+name+"]: " + result);
			if (result < 0) {
				console.log("Failed to create creep, Error " + result);
				return;
			}
			if (Game.creeps[name] == null) {
				console.log("Something is wrong -- creep '" + name + "' is null");
				return;
			}
			Game.creeps[name].memory.role = creep.role;
			console.log("Successfully created creep '" + name + "' ??");
		};
	};