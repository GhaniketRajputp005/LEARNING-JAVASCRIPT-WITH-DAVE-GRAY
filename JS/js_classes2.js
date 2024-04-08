class Pizaa {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "thin";
  }

//   constructor(pizzaSize) {

   // In JavaScript, there is no concept of private properties, but it is a common practice to use _ to indicate that a property should be treated as private.

//     this._size = pizzaSize; // _size is a private property
//     this._crust = "thin"; // _crust is a private property
//   }

  // ================== Getter and Setter ==================

  getPizzaCrust() {
    return this.crust;
  }
  setPizzaCrust(crustType) {
    this.crust = crustType;
  }
}

class SpecialPizza extends Pizaa{  

    // SpecialPizza is a subclass of Pizza

    constructor(pizzaSize){
        super(pizzaSize);
        this.type = "The Works";
    }

    slice(){
        console.log(`Slicing the ${this.size} ${this.type} pizza.`);
    }
}

const myPizza = new SpecialPizza("large");
myPizza.slice();
myPizza.setPizzaCrust("thick");
console.log(myPizza.getPizzaCrust());