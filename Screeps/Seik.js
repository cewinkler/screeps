var _ = require('lodash');
var Harvester = require('HarvesterCreator');
var Guard = require('GuardCreator');
var Builder = require('BuilderCreator');
var Tank = require('TankCreator');
var Medic = require('MedicCreator');

module.exports = new function () {
    var self = this;
    self.createCreep = function (creep) {
        if (creep == null) {
            console.log("Creep == null");
            return;
        }
        var name = self.getUniqueName(creep.role);
        var result = Game.spawns.Spawn1.createCreep(creep.body, name, { role: creep.role });
        if (result < 0) {
            console.log("Failed to create creep: " + result);
            return;
        }
        return;
    };

    self.countCreepRole = function (role) {
        return _.where(Game.creeps, { memory: { role: role } }).length;
    };

    // If parameter is a Game.creep object, return class based on role. Else return class based on creep parameter.
    self.getInstance = function (creep) {
        if (typeof creep !== 'string') 
            creep = creep.memory.role;
        switch (creep) {
            case 'harvester':
                return Harvester();
            case 'guard':
                return Guard();
            case 'builder':
                return Builder();
            case 'tank':
                return Tank();
            case 'medic':
                return Medic();
            default:
                return null;
        }
    };

    self.tick = function (creep) {
        var instance = self.getInstance(creep);
        if (instance != null)
            instance.tick(creep);
    };

    self.getUniqueName = function (role) {
        var count = 1;
        var name = role + count;
        while (Game.creeps[name] != null) {
            count++;
            name = role + count;
        }
        return name;
    }
};

