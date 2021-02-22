// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }

// x(function y() {
//   console.log("y");
// });

// let counter = 0;
// document
//   .getElementById("clickMe")
//   .addEventListener("click", function clicked() {
//     function counterClosure() {
//       console.log("Counter: ", ++counter);
//     }
//     counterClosure();
//   });
const MutationObserver =
  window.MutationObserver ||
  window.WebKitMutationObserver ||
  window.MozMutationObserver;
// target
const list = document.querySelector(`ol`);
// options
const config = {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
};
// instance
const observer = new MutationObserver(function (mutations) {
  console.log(`mutations =`, mutations); // MutationRecord
  mutations.forEach(function (mutation) {
    console.log("mutation =", mutation);
    if (mutation.type === "characterData") {
      // target & object === typeof(mutation.target)
      // console.log("A child node has been added OR removed.", mutation.target, typeof(mutation.target));
      // console.log("[...mutation.addedNodes].length", [...mutation.addedNodes].length);
      // console.log("[...mutation.removedNodes].length", [...mutation.removedNodes].length);
      // if (mutation.target && [...mutation.addedNodes].length) {
      //     // [...mutation.addedNodes].length
      //     console.log(`A child node ${mutation.target} has been added!`, mutation.target);
      // }
      // if (mutation.target && [...mutation.removedNodes].length) {
      //     // [...mutation.removedNodes].length
      //     console.log(`A child node ${mutation.target} has been removed!`, mutation.target);
      // }
    }
    if (mutation.type === "childList") {
      if (mutation.target && [...mutation.addedNodes].length) {
        console.log(
          `A child node ${mutation.target} has been added!`,
          mutation.target
        );
      }
      if (mutation.target && [...mutation.removedNodes].length) {
        console.log(
          `A child node ${mutation.target} has been removed!`,
          mutation.target
        );
      }
      // do somwthings
      let list_values = [];
      list_values = [].slice
        .call(list.children)
        .map(function (node) {
          return node.innerHTML;
        })
        .filter(function (str) {
          if (str === "<br>") {
            return false;
          } else {
            return true;
          }
        });
      console.log(list_values);
    }
    if (mutation.type === "attributes") {
      console.log("mutation =", mutation);
      console.log(`The \`${mutation.attributeName}\` attribute was modified.`);
      // console.log("list style =", list.style);
      let { width, height } = list.style;
      let style = {
        width,
        height,
      };
      console.log("style =\n", JSON.stringify(style, null, 4));
    }
  });
});
observer.observe(list, config);
// Later, you can stop observing
// setTimeout(() => {
//     observer.disconnect();
// }, 1000 * 100);
// bug ??? after disconnect
// list.attributes;
// list.setAttribute(`style`, `height: 212px; width: 213px;`);
// list.setAttribute(`data-test`, `666`);
// list.removeAttribute(`data-test`);
// list.children;
// list.childElementCount;
// list.childNodes;
// list.hasChildNodes();
// list.firstElementChild;
// list.firstChild;
// list.removeChild(li);
// list.removeChild(list.firstElementChild);
// list.replaceChild(li, li);
// list.replaceChild(list.firstElementChild, list.lastElementChild);
