//Basic example
function getFirstNumber() {
  let x = 100;
  function addNumber(y) {
    return x + y;
  }
  return addNumber;
}

let x = 1000;
let firstNumber = getFirstNumber();
let secondNumber = getFirstNumber();
console.log("x: ", x);
console.log(firstNumber(100));
console.log(secondNumber(200));
//end

//counter example using closure
function increamentAndDecrement() {
  let privateCounter = 0;

  function changeValueBy(value) {
    privateCounter += value;
  }

  return {
    increment: function () {
      changeValueBy(1);
    },
    decrement: function () {
      changeValueBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
}

let counter = increamentAndDecrement();

console.log(counter.value());
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());

counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.value());
//end
