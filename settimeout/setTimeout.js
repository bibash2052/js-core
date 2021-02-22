// function test() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// test();
//test() will output 6 6 6 6 6 6 because of var i
// When i is initialized using var, function will reference to same i variable.

// function test2() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// test2();
//test2() will output 0 1 2 3 4 5 6 because of let i;
//When i is initailized using let, every time the loop runs function will create new reference of i so,
// it prints 0 1 2 3 4 5 6

function test3() {
  for (var i = 1; i <= 5; i++) {
    console.log("Value of i: ", i);
    function a(counter) {
      setTimeout(function () {
        console.log(counter);
      }, counter * 1000);
    }
    a(i);
  }
}
test3();
// test3() will also output 0 1 2 3 4 5 6 but using var.
