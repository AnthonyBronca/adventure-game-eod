const defaultGear = {
    head: null,
    torso: 'shirt',
    legs: 'pants',
    mainHand: null,
    offHand: null,
    twohanded: false
}

class DefaultGear {
    constructor(head, torso, legs, mainHand, offHand, twohanded) {
        this.head = head || null,
            this.torso = torso || 'red shirt',
            this.legs = legs || 'black pants',
            this.mainHand = mainHand || null,
            this.offHand = offHand || null,
            this.twohanded = twohanded || false
    }
}



const npcAGear = new DefaultGear();
const guardGear = new DefaultGear('Steel Helmet', 'Steel Torso', 'Steel Leggings', 'Steel GreatSword', null, true)


module.exports = { defaultGear, DefaultGear };
