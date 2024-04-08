class Pizaa {

    crust = "original"; // public property
    #sauce = "traditional"; // private property
    #size;

    // private and public fields are now available in JavaScript classes. A private field is declared using the # symbol before the field name. A public field is declared without the # symbol.  
    // these fields must be declared at the top of the class
    
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
  

  
    // ================== Getter and Setter ==================
  
    getPizzaCrust() {
      return this.crust;
    }
    setPizzaCrust(crustType) {
      this.crust = crustType;
    }

    hereYouGo(){
        console.log(`Here is your ${this.crust} pizza with ${this.#sauce} sauce ${this.#size}.`);
    }
  }
  

  

const myPizza = new Pizaa("large");
myPizza.hereYouGo();
console.log(myPizza.getPizzaCrust());
myPizza.setPizzaCrust("thick");
console.log(myPizza.getPizzaCrust());
// console.log(myPizza.#size); since #size is a private property, it cannot be accessed outside the class