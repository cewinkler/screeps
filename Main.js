var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var _ = require('lodash');
var Seik = require('Seik'); // Seik singleton
var Creator = require('Creator'); // Defining creep creation strategies

var maximumCreeps = [
	{role:"harvester",max: 1}
];

for (var creep in maximumCreeps) {
	if (creep.role == "harvester" && countRole(creep.role) < creep.max)
		Seik.createCreep(new Creator.Harvester());
}

// defining tick behaviour
for(var name in Game.creeps) {
	var creep = Game.creeps[name];

	if(creep.memory.role == 'harvester') {
		harvester(creep);
	}

	if(creep.memory.role == 'builder') {
		builder(creep);
	}
	
	if(creep.memory.role == 'guard') {
    	guard(creep);
    }
}

function countRole(role) {
	return _.where(Game.creeps, { memory: { role: role } }).length;
}