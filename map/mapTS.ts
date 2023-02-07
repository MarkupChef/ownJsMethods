
interface Array<T> {
  myMap: <U>(
    callback: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ) => U[];
}

Array.prototype.myMap = function (callback, thisArg) {

  const context = thisArg || this;
  const array = this;
  const length = array.length;
  const newArray = [];

  for (let i = 0; i < length; i++) {
    newArray.push(callback.call(context, array[i], i, array));
  }

  return newArray;
};

const someArray = [1, 2, 4, 5, 3];

const result = someArray.myMap((item, i, arr) => {
  return item * 2;
})

console.log('result is: ', result);
