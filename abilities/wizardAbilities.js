

class Power {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.isActive = false;
    }

    activatePower(){
        if(!this.isActive){
            console.log("Power is activating!")
            this.isActive = true;
            this.activatePower()
        } else{
            setTimeout(()=> {
                this.isActive = false;
                console.log("Power is Deactivating")
            }, 10_000)
        }
    }

}



module.exports = Power
