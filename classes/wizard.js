const {Account} = require('../account')
const Power = require('../abilities/wizardAbilities')

class Wizard {
    constructor(name, powers = []){
        this.name = name;
        this.wand = "";
        this.powers = powers;
        this.robe = "";
    }

    castPower(powerName){
        powerName = powerName[0].toUpperCase() + powerName.slice(1)
        for(let power of this.powers){
            if (power.name === powerName){
                power.activatePower();
                return;
            }
        }
    }



}

const vanish = new Power("Vanish","Disappearing")

const LoganWizard = new Wizard("Logan", [vanish])


const anthony = new Account("Anthony", "Password");

anthony.addCharacters(LoganWizard)


LoganWizard.castPower('vanish')

// vanish.activatePower()


// LoganWizard.castPower()
