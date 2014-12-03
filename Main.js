var _ = require('lodash');
var Seik = require('Seik'); // Seik singleton
var HarvesterCreator = require('HarvesterCreator'); // Defining creep creation strategies

var maximumCreeps = [
	{role:"harvester",max: 2}
];

var activeCreeps = [];

_.forEach(maximumCreeps, function(creep) {
	if (creep.role == "harvester" && Seik.countCreepRole(creep.role) < creep.max) {
		var obj = new HarvesterCreator();
		console.log("Attempting to instantiate " + obj.role);
		var result = Seik.createCreep(obj);
		if (result != null) activeCreeps.push(result);
	}
});

// defining tick behaviour
_.forEach(activeCreeps, function(creep) {
	creep.tick();
});