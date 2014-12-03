var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var _ = require('lodash');
var Seik = require('Seik'); // Seik singleton
var HarvesterCreator = require('HarvesterCreator'); // Defining creep creation strategies

var maximumCreeps = [
	{role:"harvester",max: 1}
];

_.forEach(maximumCreeps, function(creep) {
	if (creep.role == "harvester" && countRole(creep.role) < creep.max) {
		var obj = new HarvesterCreator();
		console.log("Attempting to instantiate " + obj.role);
		Seik.createCreep(obj);
	}
});

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
	var count = _.where(Game.creeps, { memory: { role: role } }).length;
	return count;
}