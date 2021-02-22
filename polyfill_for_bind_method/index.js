let fullName = {
  firstName: "Bibash",
  lastName: "Ghimire",
};

let printName = function (test, test1, test2, test3) {
  console.log(this.firstName + " " + this.lastName + " " + test);
};

// let printMyName = printName.bind(fullName);
// printMyName();

Function.__proto__.mybind = function (...args) {
  let obj = this;
  parmas = args.slice(1);
  return function (...args1) {
    obj.call(args[0], [...parmas, ...args1]);
  };
};

let printMyName2 = printName.mybind(fullName, "Test", "test1", "Test2");
printMyName2("Test3");
