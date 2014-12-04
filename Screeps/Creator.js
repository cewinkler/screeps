module.exports = function () {
    var self = {};
    self.role = '';
    self.body = [];
    self.name = '';
    self.costs = {
        move: 50,
        work: 20,
        carry: 50,
        attack: 100,
        ranged_attack: 150,
        heal: 200,
        tough: 5
    };

    self.tick = function (creep) {
        self.process(creep);
    };

    self.process = function (creep) { console.log(self.role + "process() not abstracted!"); };

    self.getBuildCost = function () {
        var cost = 0;
        for (var x = 0; x < self.body.length; x++) {
            var part = self.body[x];
            cost += self.costs[part];
        }
        return cost;
    };

    self.nearestSpawn = function(creep) {
        return creep.pos.findNearest(Game.MY_SPAWNS);
    };
    return self;
}