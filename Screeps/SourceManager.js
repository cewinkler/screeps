var _ = require('lodash');
var Manager = require('Manager');

module.exports = new function () {
    var self = Manager();
    self.spawn = Game.spawns[0];
    self.sources = Game.sources;
    


}