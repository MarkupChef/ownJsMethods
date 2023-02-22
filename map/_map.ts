
type myMap = <T>(
  callback: (value: T, index: number, array: T[]) => T,
  thisArg?: any
) => T[];

interface Array<T> {
  myMap: myMap;
  myMapByReduce: myMap
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

Array.prototype.myMapByReduce = function (callback, thisArg) {
  const context = thisArg || this;
  const array = this;

  return array.reduce((acc, item, i, arr) => {
    acc[i] = callback.call(context, item, i, arr);
    return acc;
  }, [])
}

const someArray = [1, 2, 4, 5, 3];

const result1 = someArray.myMap((item:number, i, arr) => {
  return item * 2;
})

console.log('result1 is: ', result1);

const result2 = someArray.myMapByReduce( (item:number, i, arr) => {
  return item * 2;
})

console.log('result2 is: ', result2);





