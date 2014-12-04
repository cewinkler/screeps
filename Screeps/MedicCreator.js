var Creator = require('Creator');
var _ = require('lodash');

module.exports = function() {
    var self = Creator();
    self.role = 'medic';
    self.body = [Game.MOVE, Game.MOVE, Game.HEAL];

    self.process = function() {
        var friends = _.where(Game.creeps, { memory: { role: 'guard' } });
        var stahp = false;
        _.forEach(friends, function(friend) {
            if (friend.hits < friend.hitsMax && !stahp) {
                self.creep.moveTo(friend);
                self.creep.heal(friend);
                stahp = true;
                return;
            } else self.creep.moveTo(self.nearestFlag());
        });
    };

    return self;
}