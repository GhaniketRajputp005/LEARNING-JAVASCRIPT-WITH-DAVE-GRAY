// factory function is a function that returns an object

// without using the new keyword or constructor function and solves the private property issue. As scope of variables of a function is limited to the function, we can create private properties using factory function.


function pizzaFactory(pizzaSize){
    const size = pizzaSize;
    let crust = "thin";
    return {
        getPizzaCrust(){
            return crust;
        },
        setPizzaCrust(crustType){
            crust = crustType;
        },
        bake: function(){
            console.log(`Baking the ${size} pizza.`);
        }
    }
}

const myPizza = pizzaFactory("large");
// The pizzaFactory function returns an object that contains two methods
console.log(myPizza.getPizzaCrust());
myPizza.setPizzaCrust("thick");
console.log(myPizza.getPizzaCrust());
myPizza.bake();

// Factory functions in JavaScript are commonly used in the following scenarios:

// Creating Multiple Similar Objects
// Encapsulation of Private Properties