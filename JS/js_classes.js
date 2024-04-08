class Pizaa{
    // constructor(){
    //     this.size = "small";
    //     this.crust = "thin";

    // }
    constructor(pizzaType, pizzaSize){
        this.size = pizzaSize;
        this.crust = "thin";
        this.type = pizzaType;
        this.toppings = [];

    }
  

    bake(){
        console.log(`Baking a ${this.size} pizza with a ${this.crust} crust.`);
    }

    // ================== Getter and Setter ==================
    get pizzaCrust(){ // writen as a method but used as a property
        return this.crust;
    }
    set pizzaCrust(crustType){// writen as a method but used as a property
        this.crust = crustType;
    }

    // also can be used as functions

    // getPizzaCrust(){
//         return this.crust;
//     }
//     setPizzaCrust(crustType){
//         this.crust = crustType;
// }

    getToppings(){
        return this.toppings;
    }

    setToppings(topping){
        this.toppings.push(topping);
    }


    
}

const myPizza = new Pizaa("pepperoni", "large");
myPizza.bake();
console.log(myPizza.size);

myPizza.type = "veggie"; // directly changes the type of pizza
console.log(myPizza.type);

myPizza.pizzaCrust = "thick"; // changes the crust of pizza using setter
console.log(myPizza.pizzaCrust); // 
myPizza.bake();

// myPizza.setPizzaCrust("thick");  
// console.log(myPizza.getPizzaCrust()); 

myPizza.setToppings("mushrooms");
myPizza.setToppings("onions");
myPizza.setToppings("peppers");
console.log(myPizza.getToppings());

