const levels = {
    1: 100,
    2: 200,
    3: 400,
    4: 800,
    5: 1_600,
    6: 3_200,
    7: 4_000,
    8: 4_800,
    9: 5_600,
    10: 6_400,
    11: 7_200,
    12: 8_000,
    13: 8_800,
    14: 9_600,
    15: 10_400,
    16: 11_200,
    17: 12_000,
    18: 12_800,
    19: 13_600,
    20: 14_400
}

class Level {
    constructor(level = 1, xp = 0) {
        this.level = level;
        this.xp = xp;

        if (this.xp >= this.level + 1) {
            this.level++;
            this.levelUp();
        }
        if (this.level > 1) {
            let currLevel = this.level
            let newXp = levels[currLevel]
            this.xp = newXp
        }
    }

    levelUp() {
        return {
            newLevel: this.level,
            currentXp: this.xp
        }
    }

}



module.exports = Level
