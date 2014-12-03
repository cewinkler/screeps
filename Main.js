var _ = require('lodash');
var Seik = require('Seik'); // Seik singleton

var maximumCreeps = [
	{role:"harvester",max: 2}
];

_.forEach(maximumCreeps, function(creep) {
	if (Seik.countCreepRole(creep.role) < creep.max) {
		var obj = Seik.getInstance(creep.role);
		console.log("Attempting to instantiate " + obj.role);
		Seik.createCreep(obj);
	}
});

// defining tick behaviour
_.forEach(Game.creeps, function(creep) {
	Seik.tick(creep);
});