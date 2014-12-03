var spawn = Game.spawns.Spawn1;
var _ = require('lodash');
var Seik = require('Seik'); // Seik singleton

var maximumCreeps = [
	{role:"harvester",max: 1}
	//{role:"guard",max: 4}
];

_.forEach(Game.creeps, function (creep) {
    Seik.tick(creep);
});

_.forEach(maximumCreeps, function(creep) {
	if (spawn.spawning != null) return;
	if (Seik.countCreepRole(creep.role) < creep.max) {
	    var obj = Seik.getInstance(creep.role);
	    if (obj == null) return;
        if (obj.getBuildCost() > spawn.energy) return;
		console.log("Attempting to instantiate " + obj.role);
		Seik.createCreep(obj);
	}
});

