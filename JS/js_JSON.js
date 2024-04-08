// JAVASCRIPT OBJECT NOTATION

// JSON is a syntax for sending and receiving data.

// JSON is text, written with JavaScript object notation.

// JSON is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate.

// JSON is language independent.

// While the programming languages used on the client and server sides may vary, both sides can typically handle JSON data through built-in functions, libraries, or third-party packages/modules. This allows for seamless communication between the client and server, as JSON can be easily serialized (converted to a string) and deserialized (parsed back into objects) in most programming languages.

const myObj = {
  name: "Dave",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj); // object


//============== STRINGIFY (static method) ===============

const sendJSON = JSON.stringify(myObj); // object -> string
console.log(sendJSON);  
// JSON.stringify() method converts a JavaScript object or value to a JSON string. function in object is not included in JSON string .
console.log(typeof sendJSON); // string
console.log(sendJSON.name); // undefined as not an object anymore


//============== PARSE (static method) ===============

const recieveJSON = JSON.parse(sendJSON); // string -> object
console.log(recieveJSON);
console.log(recieveJSON.name);
console.log(typeof recieveJSON); // object again

// the function originally declared in the object is not included in the JSON string and is not available in the parsed object.


// stringify and parse are used to send and receive data between a client and a server.

// =========== client side (browser) -> stringify -> send -> parse -> server side (server) -> stringify -> send -> parse -> client side (browser) ================================================================

It seems like you're describing a typical data flow between a client-side (browser) and a server-side (server) communication in a web application. Here's a breakdown of each step:

Client Side (Browser):

The client-side JavaScript code prepares some data, likely in the form of objects or arrays.
This data is then stringified using the JSON.stringify() method. This converts the JavaScript object into a JSON string.
Send Data:

The stringified data is then sent to the server, usually through an HTTP request. This could be done using various methods like XMLHttpRequest, Fetch API, or through a form submission.
Server Side (Server):

The server receives the JSON string data from the client-side.
The server-side code then parses the JSON string back into a JavaScript object using the appropriate method for the programming language or framework being used. For example, in JavaScript, this could be JSON.parse().
Server-Side Processing:

The server-side code processes the received data as required. This might involve database operations, business logic processing, or other tasks.
Send Response:

After processing, the server-side code may prepare a response.
This response data is then stringified into a JSON format using JSON.stringify().
Client Side (Browser):

The server's response is sent back to the client-side, which receives it.
The client-side code then parses the JSON string back into a JavaScript object using JSON.parse().
Client-Side Processing:

The client-side code processes the received data as needed. This could involve updating the UI, handling user interactions, or other tasks.
This cycle of stringify, send, parse, and process repeats as necessary for the communication between the client-side and server-side of the web application. JSON (JavaScript Object Notation) is commonly used for its simplicity and compatibility with both JavaScript and many server-side programming languages.