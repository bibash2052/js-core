let firstNameObject = {
  firstName: "Bibash",
  lastName: "Ghimire",
};

let secondNameObject = {
  firstName: "Bibash1",
  lastName: "qwerty",
};

let printFullName = function (age, salary) {
  console.log(this.firstName + " " + this.lastName + " " + age + " " + salary);
};
//call: first parameter must be an object and latter arguments are arguments to function
printFullName.call(firstNameObject, 20, 30000);
printFullName.call(secondNameObject, 22, 50000);

//apply method: same as call but only difference is the way of passing the function arguments
printFullName.apply(firstNameObject, [23, 200000]);

//bind method: it will create a copy of function and return them for later use
let returnedMethod = printFullName.bind(firstNameObject, 25, 500000);
console.log(returnedMethod);
returnedMethod();
