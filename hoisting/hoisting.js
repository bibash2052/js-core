const foo = () => {
  // let a = 10;
  // let b = 11;
  const a = 100;
  var b = 200;
  //   let b = 100;
  console.log(a, b);
  return b;
};

let value = foo();

{
  // This is the temporal dead zone for the age variable!
  // This is the temporal dead zone for the age variable!
  // This is the temporal dead zone for the age variable!
  // This is the temporal dead zone for the age variable!
  let age = 25; // Whew, we got there! No more TDZ
  console.log(age);
}

function x() {
  let a = 100;
  function y() {
    console.log(a);
  }
  a = 1;
  return y;
}

let z = x();
console.log(z);
z();


