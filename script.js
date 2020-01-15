function Traveler (name){
    this.name = name;
    this.food = 1;
    this.ishealthy = true;
}

function Wagon (capacity){
    this.capacity = capacity;
    this.passengers = [];
}

Traveler.prototype = {
    
    constructor: Traveler,
    
    hunt: function (){
        this.food += 2;
    },

    eat: function(){
        if(this.food === 0){
            this.ishealthy = false
        } else{
            this.food -=1;
        }

    },



}

Wagon.prototype = {
    
    constructor: Wagon,
    
    getAvailableSeatCount: function (){
        let count = this.capacity - this.passengers.length;
        return count;

    },

    join: function(traveler){
        if(this.passengers.length >= this.capacity){
            
        }else
            this.passengers.push(traveler);
    },

    shouldQuarantine: function (){
        for(i = 0; i < this.passengers.length; i++){
            if(this.passengers[i].ishealthy === false){
                return true;
            }
                
        }return false;
    },

    totalFood: function(){
        let eats = 0 
        for(i = 0; i < this.passengers.length; i++){
            eats = this.passengers[i].food + eats
        } return eats
    },
}

// Create a wagon that can hold 2 people
let wagon = new Wagon(2);
// Create three travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
wagon.join(juan);
wagon.join(maude); // There isn't room for her!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
henrietta.hunt(); // get more food
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
