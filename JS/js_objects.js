// Objects
// key- value pairs in curly braces

const myObj = {name: "Dave"};

//   const objectName = { property: value};

const anotherObj = {
    alive: true,
    answer: 43,
    hobbies: ["coding", "reading", "running"],

    beverage: {  // nested object
        type: "coffee",
        temp: "hot"
    },

    // method
    sayHello: function() { //anonnymous function
        return "Hello";
    },

    
    AskTea: function() { //anonnymous function
        //======= THIS OPERATOR refers to the object, then we can pull values out of object =========
        return `Would you like some ${this.beverage.type}?`;
    }
}


console.log(anotherObj);
console.log(anotherObj.alive);
console.log(anotherObj.answer);
console.log(anotherObj.hobbies);
console.log(anotherObj.beverage);
console.log(myObj.name);
console.log(anotherObj.beverage.type);

console.log(anotherObj["alive"]);
console.log(anotherObj.sayHello());
console.log(anotherObj.AskTea());
console.log(anotherObj["sayHello"]());



const vehicle ={
    wheels: 4,
    engine: function(){
        return  "Vroom";
    }
};


// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object. This means that car inherits all the properties and methods of the vehicle object. prototypal inheritance
const car = Object.create(vehicle);
car.doors = 4;

console.log(car);
console.log(car.wheels); // Inheritance
console.log(car.engine());

const truck = Object.create(vehicle);
truck.doors = 2;
truck.engine = function(){
    return "Vroom Vroom";
}
console.log(truck.engine()); // Overriding the inherited method

const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
    } ;

console.log(Object.keys(band)); // returns an array of keys
console.log(Object.values(band)); // returns an array of values

//======= for in loop =========

for (let key in band){
    console.log(key);
    console.log(band[key]);
    // don't use dot notation in for in loop e.g band.key
     console.log(`${key}: ${band[key]}`);
}

//======= Deleting a property =========
delete band.drums;
console.log(band.hasOwnProperty("drums")); // false

//======= DESTRUCTURING OBJECTS =========

const{guitar : myVarible} = band;
console.log(myVarible);
// we are pulling out the value of guitar and storing it in myVariable

const{guitar : myVar, bass: myBass} = band;
console.log(myVar);
console.log(myBass);

const{vocals, guitar, bass, drums} = band;
// we are pulling out the value of vocals, guitar, bass, drums and storing them in the variables as in the object
console.log(vocals);
console.log(guitar);
console.log(bass);
console.log(drums);

// if you want to use custom variable names to destructure object then you must explicitly define the variable name, 
// otherwise use the same name of variables as the object property

function sings({ vocals, guitar}){
    return `${vocals} sings and ${guitar} plays guitar`;
    // the function expects an object with vocals and guitar properties, and directly uses these properties in the function body.
}

console.log(sings(band));

// ======================Destructuring in JavaScript provides several advantages:================================

// Improved readability: Destructuring makes the code more readable and cleaner. It allows you to unpack values from arrays, or properties from objects, into distinct variables.

// Less verbosity: Without destructuring, you would have to access object properties with fully qualified paths. Destructuring saves you from this verbosity.

// Ability to extract multiple properties: You can extract multiple properties in one statement, making it more convenient to work with objects.

// Default values: Destructuring allows you to assign default values to variables if the property doesn't exist in the object.

// Nested object destructuring: You can destructure nested objects, which can be very handy when working with complex objects or JSON data.

// Function parameter definitions: In function parameters, destructuring can be used to work directly with object properties, improving the semantics and purpose of the function.

// In the provided code, destructuring is used in the function parameter definition. This makes it clear that the function expects an object with vocals and guitar properties, and directly uses these properties in the function body.