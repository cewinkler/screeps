var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var _ = require('lodash');
var Seik = require('Seik'); // Seik singleton
var Creator = require('HarvesterCreator'); // Defining creep creation strategies

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