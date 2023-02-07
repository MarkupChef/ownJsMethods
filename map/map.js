Array.prototype.myMap = function (callback, thisArg) {

  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  if (!Array.isArray(this)) {
    throw new Error(`TypeError: ${this}.forEach is not a function`)
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  const context = thisArg || this;
  const array = Object(this)
  const length = array.length;
  const newArray = [];

  for (let i = 0; i < length; i++) {

    if (array[i] === undefined) {
      newArray.push(array[i]);
    } else {
      newArray.push(callback.call(context, array[i], i, array));
    }
  }

  return newArray;
};

const someArray = [1, 2, , , 3];

const result = someArray.myMap((item, i, arr) => {
  return item * 2;
})

console.log('result is: ', result);

