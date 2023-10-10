const { mainHand } = require("./default_gear");




class Wizard_Gear {
    constructor(name, description, bodySlot, levelRequirement, damage, tradeable = true) {
        this.name = name;
        this.description = description;
        this.bodySlot = bodySlot;
        this.levelRequirement = levelRequirement;
        this.damage = damage;
        this.tradeable = tradeable;
    }
}

class Wizard_Weapon extends Wizard_Gear {
    constructor(name, description, bodySlot, levelRequirement, damage, tradeable = true, spells = []) {
        super(name, description, bodySlot, levelRequirement, damage, tradeable);

    }
}


const dark_wizard_hat = new Wizard_Gear('Dark Wizard Hat', 'Pointy and dark! Perfect for the dark wizard!', 'head', 3, 0, true);
const light_wizard_hat = new Wizard_Gear('Light Wizard Hat', 'Pointy and light! Perfect for the light wizard!', 'head', 3, 0, true);
const dark_wizard_robe = new Wizard_Gear('Dark Wizard Robe', 'A robe fit for the dark wizards', 'torso', 3, 0, true);
const light_wizard_robe = new Wizard_Gear('Light Wizard Robe', 'A robe fit for the light wizards', 'torso', 3, 0, true);
const dark_wizard_pants = new Wizard_Gear('Dark Wizard Pants', 'The pants to complete any dark wizard set', 'legs', 3, 0, true);
const light_wizard_pants = new Wizard_Gear('Light Wizard Pants', 'The pants to complete any light wizard set', 'legs', 3, 0, true);
const evil_book = new Wizard_Weapon('Evil Spell Book', "Off-hand book containing evil spells", 'offHand', 5, 0, true, ['fireball', 'heat-wave', 'raise-dead']);
const light_book = new Wizard_Weapon('Light Spell Book', "Off-hand book containing good spells", 'offHand', 5, 0, true, ['waterblast', 'water-wave', 'light-healing']);
const dark_staff = new Wizard_Weapon('Dark Staff', 'A staff of dark magic', 'mainhand', 4, 0.05, true, ['firebolt', 'sap-life', 'hide-self']);
const light_staff = new Wizard_Weapon('Light Staff', 'A staff of light magic', 'mainhand', 4, 0.05, true, ['waterbolt', 'heal-ally', 'lightning strike']);
const wizard_blade = new Wizard_Weapon('Wizard Blade', 'A small dagger used by Wizards when the battle gets close and personal', mainHand, 3, 0.8, true);


const wizardGear = {
    dark_staff,
    dark_wizard_hat,
    dark_wizard_pants,
    dark_wizard_robe,
    light_book,
    light_wizard_hat,
    light_wizard_pants,
    light_wizard_robe,
    light_staff,
    wizard_blade,
    evil_book
}

module.exports = { wizardGear, Wizard_Weapon, Wizard_Gear };
