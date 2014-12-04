module.exports = function () {
    var self = {};
    self.role = '';
    self.body = [];
    self.name = '';
    self.creep = null;
    self.count = 0;

    self.costs = {
        move: 50,
        work: 20,
        carry: 50,
        attack: 100,
        ranged_attack: 150,
        heal: 200,
        tough: 5
    };

    self.tick = function (creep, count) {
        self.creep = creep;
        self.count = count;
        self.process();
    };

    self.process = function () { console.log(self.role + "process() not abstracted!"); };

    self.getBuildCost = function () {
        var cost = 0;
        for (var x = 0; x < self.body.length; x++) {
            var part = self.body[x];
            cost += self.costs[part];
        }
        return cost;
    };

    self.nearestSpawn = function() {
        return self.creep.pos.findNearest(Game.MY_SPAWNS);
    };

    self.nearestFlag = function() {
        return self.creep.pos.findNearest(Game.FLAGS);
    };

    self.getDistanceTo = function(object) {
        var x1 = self.creep.pos.x;
        var y1 = self.creep.pos.y;
        var x2 = object.pos.x;
        var y2 = object.pos.y;
        return Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));
    }

    self.getSpawnsByDistance = function() {
        if (Game.spawns.length == 1) return Game.spawns;
        var spawns = [];
        _.forEach(Game.spawns, function(s) {
            spawns.push({ spawn: s, distance: self.getDistanceTo(s) });
        });
    };

    return self;
}