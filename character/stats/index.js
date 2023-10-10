const Levels = require('../levels/')


class Stats {
    constructor() {
        this.combatLevel = new Levels(3);
        this.health = new Levels(10);
        this.mana = new Levels(10);
        this.stamina = new Levels(10);
        this.attack = new Levels(1);
        this.defense = new Levels(1);
        this.magic = new Levels(1);
        this.range = new Levels(1);
        this.fishing = new Levels(1);
        this.cooking = new Levels(1);
    }
}


module.exports = Stats
