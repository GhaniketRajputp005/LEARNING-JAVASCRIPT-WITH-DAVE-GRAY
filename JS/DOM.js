
// DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of nodes, where each node represents a part of the document (e.g., an element, text, or attribute).

// The DOM provides methods and properties to interact with the document, allowing you to create, modify, and delete elements, as well as handle events and styles.

// DOM selectors are methods that allow you to fetch elements from the document based on various criteria, such as ID, class, tag name, or CSS selector.
// eg. getElementById(), getElementsByClassName(), querySelector(), querySelectorAll()

// ======= 1. getElementById() =========
// fetch the element by id

const view1 = document.getElementById('view1');
console.log(view1);

// ======= 2. getElementsByClassName() =========
// fetch the element by class name returns a HTMLCollection

const view2 = document.getElementsByClassName('view1');
console.log(view2);

// ======= 3. querySelector() =========
// fetch the element by css selector

const view3 = document.querySelector('#view2');
console.log(view3);
const view4 = document.querySelector('.view1');
console.log(view4);

// ======= 4. querySelectorAll() =========
// fetch all elements by css selector returns a NodeList

const view5 = document.querySelectorAll('.view1');
console.log(view5);

// ======= NodeList vs HTMLCollection =========

// A NodeList is a collection of nodes returned by methods like querySelectorAll()
// It is a static collection, meaning it is not live and does not update automatically
// It can be iterated using forEach() or for...of loop

// A HTMLCollection is a collection of elements returned by methods like getElementsByClassName()
// It is a live collection, meaning it is updated automatically when the DOM changes
// It can be iterated using for loop or converted to an array using Array.from()


// ======= querySelector() vs querySelectorAll() =========

// Here's a summary of the differences:

// Selection: querySelector returns the first matching element, while querySelectorAll returns all matching elements.

// Return Value: querySelector returns either a single element or null, while querySelectorAll returns a NodeList (which is an array-like object) containing all matching elements.

// Efficiency: querySelector is generally more efficient when you only need to select one element, while querySelectorAll is more efficient when you need to select multiple elements.
// Live vs Static: querySelector returns a live reference to the element (changes to the DOM will affect the result), while querySelectorAll returns a static NodeList (changes to the DOM won't affect the result).


// ======= Searching within the results of a previous selector =========
// searching by tag name

const divs = view1.querySelectorAll('div');
console.log(divs);

const sameDIvs = view1.getElementsByTagName('div');
console.log(sameDIvs); // returns HTMLCollection

// More specific DOM selectors

// ========= 1.nth-of-type() =========
// Selects elements based on their position within a parent element
// Syntax: element:nth-of-type(n)

const evenDivs = view1.querySelectorAll('div:nth-of-type(even)');
console.log(evenDivs);

for(let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = 'red';
  evenDivs[i].style.width = '106px';
  evenDivs[i].style.height = '105px';
 
}


// In JavaScript, when accessing CSS properties of an element through the DOM using the style property, you need to use camelCase notation instead of hyphenated notation as used in CSS.
// For example, background-color in CSS becomes backgroundColor in JavaScript.

const navText = document.querySelector("nav h1");
console.log(navText);
navText.style.backgroundColor = 'blue';
navText.textContent = 'Hello World';

const navbar = document.querySelector("nav");
// innderHTML is used to set the content of an element as HTML, it insertrs the HTML content as a string
navbar.innerHTML = '<h1>Hello SHan</h1> <p>How are you?</p>';
console.log(navbar);
navbar.style.justifyContent = 'flex-end';

// ======= Traversing the DOM ================


console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());

console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstElementChild);

console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);

console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

view1.style.display = 'none';
view3.style.display = 'flex';
view3.style.flexDirection = 'row';
view3.style.flexWrap = 'wrap';
view3.style.margin = '10px';

while(view3.lastChild){ // remove all children of view3
    view3.lastChild.remove();
}

// ======= Creating and Appending Elements =========

function createDivs(parent, iter){

    const newDiv = document.createElement('div');

    newDiv.textContent = iter;
    newDiv.style.backgroundColor = 'black';
    newDiv.style.width = '100px';
    newDiv.style.height = '100px';
    newDiv.style.margin = '10px';
    
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'center';
    newDiv.style.alignItems = 'center';
    parent.append(newDiv);
}

// createDivs(view3, 1);

for(let i = 1; i <= 12; i++){
    createDivs(view3, i);
}


