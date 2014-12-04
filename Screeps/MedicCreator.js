var Creator = require('Creator');
var _ = require('lodash');

module.exports = function() {
    var self = Creator();
    self.role = 'medic';
    self.body = [Game.MOVE, Game.MOVE, Game.HEAL];
    self.stahp = false;

    self.process = function() {
        var guards = _.where(Game.creeps, { memory: { role: 'guard' } });
        var medics = _.where(Game.creeps, { memory: { role: 'medic' } });

        self.healTargets(guards);
        self.healTargets(medics);

        if (!self.stahp) {
            var target = self.creep.pos.findNearest(Game.HOSTILE_CREEPS);
            if (!target) self.creep.moveTo(self.nearestFlag());
            else {
                if (guards == null) return;
                self.creep.moveTo(guards[0]);
            }
        }
    };

    self.healTargets = function(creeps) {
        _.forEach(creeps, function (friend) {
            if (friend.hits < friend.hitsMax && !self.stahp) {
                self.creep.moveTo(friend);
                self.creep.heal(friend);
                self.stahp = true;
                return;
            }
        });
    };

    return self;
}