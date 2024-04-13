// Event Listener
// syntax: element.addEventListener(event, function, useCapture);

// useCapture is optional, if true, the event handler is executed in the capturing phase, if false, in the bubbling phase.

// function doSomething() {
//   alert("Doing something...");
// }

// h2.addEventListener("click", doSomething);
// h2.removeEventListener("click", doSomething);

// // using anonymous function
// h2.addEventListener("click", function (event) {
//   console.log(event.target);
//   event.target.style.color = "red";
//   event.target.textContent = "Clicked";
// });

// readystatechange is fired when the document is ready State changes meaning the document is loaded and ready to be interacted with.
document.addEventListener("readystatechange", function (event) {
  if (event.target.readyState === "complete") {
    console.log("readyState: Complete");
    initApp2();
  }
});

// event bubbling is the process where the event is first captured and handled by the innermost element and then propagated to outer elements.

function initApp() {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener("click", function (event) {
    // view.style.backgroundColor = "lightblue";

    // === classList, add , remove, toggle ====
    // view.classList.add("purple");
    // view.classList.remove("darkblue");

    view.classList.toggle("purple");
    view.classList.toggle("darkblue");

    // event.target.style.backgroundColor = "red";

    // if instead of elements we use event.target, it will change the color of the element that was clicked ,also in our case wherever i click event bubbling happens and the color of outermost element is shown.
  });

  div.addEventListener("click", function (event) {
    // div.style.backgroundColor = "lightgreen";

    div.classList.toggle("blue");
    div.classList.toggle("black");


    // event.target.style.backgroundColor = "lightgreen";

  });
  h2.addEventListener("click", function (event) {


    const mytext = event.target.textContent;
    mytext === "My 2nd View" ? event.target.textContent = "Clicked" : event.target.textContent = "My 2nd View";

    // event.stopPropagation() method stops the bubbling or capturing of an event to parent elements/ child elements, preventing any parent event handlers from being executed.
    // event.stopPropagation();

    h2.style.backgroundColor = "lightcoral";
    // event.target.style.backgroundColor = "darkblue";
  });


  // by using true as third argument, we can use event capturing.

  // event capturing is the process where the event is first captured and handled by the most outermostelement and then propagated to inner elements.

//   view.addEventListener("click", function (event) {
//     view.style.backgroundColor = "lightblue";
//   }, true);

//   div.addEventListener("click", function (event) {
//     div.style.backgroundColor = "lightgreen";
//   },true);
//   h2.addEventListener("click", function (event) {
//     h2.style.backgroundColor = "lightcoral";
//   },true);
  

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", function (event) {
    event.target.classList.add("height100");
  });

    nav.addEventListener("mouseout", function (event) {
        event.target.classList.remove("height100");
    });
}


function initApp2(){
    // const view = document.querySelector("#view3");
    const Form = document.querySelector("#myForm");
    Form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("Form submitted");
    });
}