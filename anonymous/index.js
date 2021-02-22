//Function statement or function declaration
function a() {
  console.log("inside a");
}

//Function expression
var b = function () {
  console.log("b called");
};
a();
b();

//Anonymous function: Function with no name

//Named function Expression
var c = function named() {
  console.log("c called");
};

//first class function - Ability to be used like values,
//  passed inside another function as arguments or returned as value from inside a function.
