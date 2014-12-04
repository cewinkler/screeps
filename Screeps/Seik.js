var _ = require('lodash');
var Harvester = require('HarvesterCreator');
var Guard = require('GuardCreator');
var Builder = require('BuilderCreator');
var Tank = require('TankCreator');
var Medic = require('MedicCreator');

module.exports = new function () {
    var self = this;
    self.roleTracker = {};

    self.createCreep = function (creep) {
        if (creep == null) return;
        var name = self.getUniqueName(creep.role);
        var result = self.createCreep(creep.body, name, creep.role);
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

    self.trackRole = function(role) {
        if (self.roleTracker[role] == null) self.roleTracker[role] = 0;
        else self.roleTracker[role]++;
        return self.roleTracker[role];
    }

    self.tick = function (creep) {
        var count = self.trackRole(creep.memory.role);
        var instance = self.getInstance(creep);
        if (instance != null)
            instance.tick(creep, count);
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

