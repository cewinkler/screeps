var _ = require('lodash');

module.exports = function() {
    var self = {};
    self.spawns = Game.spawns;
    self.sources = Game.sources;

    self.getDistanceTo = function(from, to) {
        var x1 = from.pos.x;
        var y1 = from.pos.y;
        var x2 = to.pos.x;
        var y2 = to.pos.y;
        return Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    };
}