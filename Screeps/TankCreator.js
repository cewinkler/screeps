var Creator = require('Creator');
module.exports = function() {
    var self = Creator();
    self.role = 'tank';
    self.body = [Game.MOVE, Game.MOVE, Game.TOUGH, Game.TOUGH];

    self.process = function () {
        var target = self.creep.pos.findNearest(Game.HOSTILE_CREEPS);
        if (target) {
            self.creep.moveTo(target);
            self.creep.attack(target);
        } else {
            var flag = self.nearestFlag();
            self.creep.moveTo(flag == null ? self.nearestSpawn() : flag);
        }
    }
    return self;
}