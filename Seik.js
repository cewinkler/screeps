function () {
	return {
		createCreep: function(role, creep) {
			var likeCreeps = _.filter(Game.creeps, { memory: {role: role } });
			var name = role + likeCreeps.length;
			var result = Game.spawns.Spawn1.createCreep(creep.body, name);
			if (result < 0) {
				console.log("Failed to create creep, Error " + result);
			}
			Game.creeps[name].memory.role = role;
			console.log("Successfully created creep '" + name + "'");
		}
	};
});