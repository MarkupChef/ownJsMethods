Array.prototype.myFilter = function (callback, thisArg) {

  if (this == null) {
    throw new Error("Cant iterate over undefined or null");
  }

  if (!Array.isArray(this)) {
    throw new Error(`TypeError: ${this}.filter is not a function`)
  }

  if (typeof callback !== "function") {
    throw new Error("Callback is not a function");
  }

  const context = thisArg || this;
  const array = Object(this)
  const length = array.length;
  const newArray = [];

  for (let i = 0; i < length; i++) {

    if (array[i] !== undefined && callback.call(context, array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
};

const someArray = [
  {
    name: 'Ruslan',
    age: 30
  },
  {
    name: 'Viktoria',
    age: 25
  },
  {
    name: 'Anna',
    age: 24
  },
  {
    name: 'Max',
    age: 29
  }
];

const result = someArray.myFilter((item, i, arr) => item.age > 25)

console.log('result is: ', result);
