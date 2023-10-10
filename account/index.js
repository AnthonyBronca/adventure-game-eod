
class Account {
    //keeps track of count of people who made an account to play our game
    static playerCount = 0;
    constructor(name, password){
        if(name.length > 3){
            this.name = name; //name of the account for sign in
        } else {
            throw new Error("Account is too short, dummy!");
        }
        if(password.length > 3){
            this.password = password; // name of the account for
        } else{
            throw new Error("Account Password must be more than 3 characters long");
        }
        this.characters = []; //keeps track of all instances of characters this user makes
        Account.playerCount++
        console.log("User Sign Up Successful!: ", this);

    }


    addCharacters(char){
        this.characters.push(char);
    };

    removeCharacter(char){
        let idx = this.characters.indexOf(char);
        if(idx){
            this.characters.splice(idx, 1);
        } else{
            throw new Error("No characters matching that description were passed");
        }
    };

}


module.exports = {Account};
