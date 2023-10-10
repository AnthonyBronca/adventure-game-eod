const anthonyRandom = require('getrandomjs');
const fireWorks = require('ascii-fireworks')

class Archer {
    constructor(name){
        this.name = name;
        this.level = 1;
        this.subClass = null;
        this.accuracy = 1 //1 out of 100
        this.attributes = [];
        this.health = 100;
        this.equipment = {head: "null", body: "leather body", legs: "chaps", mainHand: null, offHand: null}
    }


    levelUp(){
        this.level
        this.level++;
        this.accuracy+= 10;
        fireWorks(`${this.level}`);
    }


    attackName(attack){
        console.log("We are using: ", attack.name)

        if(this.health <= 0){
            console.log("target's health is now: ", this.health)
            Jacob.levelUp()
            return;
        } else{
            // console.log(`Target's health: ${this.health}, damage dealt: ${attack.damage}`)
            return setTimeout(() => {
                if(attack.damage === 0){
                    console.log("Swingin a miss!!")

                } else {
                    this.health -= attack.damage;
                    console.log(`Target's health: ${this.health}, damage dealt: ${attack.damage}`)
                }
                attack.damage = anthonyRandom(25, 50)
                return this.attackName(attack)
            },2_000)
        }

    }

    fight(person, attack){
        console.log("Fighting: ", person.name)

        const attackPerson = this.attackName.bind(person, attack);
        attackPerson();
    }
}



const punch = {
        name: "punch",
        damage: anthonyRandom(25, 50),
        description: "Bare knuckles"

}

const Jacob = new Archer('Jacob');
const DangerZone = new Archer("Danger Zone");


// Jacob.levelUp()

Jacob.fight(DangerZone, punch);

// console.log(Jacob)
