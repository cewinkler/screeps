var spawn = Game.spawns.Spawn1;
var _ = require('lodash');
var Seik = require('Seik'); // Seik singleton

var maximumCreeps = [
	{role:"harvester",max: 4},
	{ role: "guard", max: 3 },
    { role: "harvester", max: 5 },
    { role: "guard", max: 6 },
    { role: "builder", max: 1 },
    { role: "guard", max: 10 },
];

_.forEach(Game.creeps, function (creep) {
    Seik.tick(creep);
});

var stahp = false;

_.forEach(maximumCreeps, function(creep) {
	if (spawn.spawning != null || stahp) return;
	if (Seik.countCreepRole(creep.role) < creep.max) {
	    var obj = Seik.getInstance(creep.role);
	    if (obj == null) return;
	    var cost = obj.getBuildCost();
        if (cost > spawn.energy) return;
        console.log("Attempting to instantiate " + obj.role + " for $" + cost);
	    stahp = true;
		Seik.createCreep(obj);
	}
});

