class Player extends GameObject{
    constructor(){
        super();
        this.attempts = 0;
        this.energy = 0;

    }

//Getter & Setter
    //attempts
    getAttempts(){
        return this.attempts;
    }
    setAttempts(attempts){
        this.attempts = attempts;
    }

    //energy
    getEnergy(){
        return this.energy;
    }
    setEnergy(energy){
        this.energy = energy;        
    }

}