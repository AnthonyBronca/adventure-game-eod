const Account = require('../account');

//add default gear to character!!
class Character {
    constructor(name, classType){
        this.name = name;
        this.classType = classType || null
        this.health = 10;
        this.stamina = 10;
        this.mana = 10;
        this.skills = [];
        this.abilities = [];
    }

    updateStat(stat){
        if(this[`${stat}`]){
            this[`${stat}`]++
        } else{
            console.log("That is not a valid stat!")
        }
    };

    addSkills(newSkill){
        this.skills.push(newSkill)
    };
};
