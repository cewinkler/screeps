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
		}
	};
	
	