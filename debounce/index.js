let counter = 0;

const getData = () => {
  console.log("fetching data: ", counter++);
};

const getAnotherData = () => {
  console.log("fetching another data: ", counter++);
};

const debounce = function (fn, delay = 500) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(context, args);
    }, delay);
  };
};

const waitBeforeMakingApiCall = debounce(getData);

const anotherCall = debounce(getAnotherData);
