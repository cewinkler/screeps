var _ = require('lodash');
var Manager = require('Manager');

module.exports = new function () {
    var self = Manager();
    self.harvesterCounter = 0;
    _.forEach(self.sources, function(s) {
        s.distance = self.getDistanceTo(s, self.spawns[0]);
    });
    self.sources = _.sortBy(self.sources, function (s) { return s.distance; });

    self.getSource = function () {
        self.harvesterCounter++;
        var index = Math.abs(self.harvesterCounter / 4);
        return self.sources[index];
    };
}