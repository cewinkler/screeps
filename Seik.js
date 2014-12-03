function () {
	return {
		createCreep: function(creep) {
			var likeCreeps = _.filter(Game.creeps, { memory: {role: creep.role } });
			var name = role + likeCreeps.length;
			var result = Game.spawns.Spawn1.createCreep(creep.body, name);
			if (result < 0) {
				console.log("Failed to create creep, Error " + result);
			}
			Game.creeps[name].memory.role = creep.role;
			console.log("Successfully created creep '" + name + "'");
		}
	};
});