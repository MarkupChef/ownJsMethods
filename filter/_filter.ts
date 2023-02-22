interface Array<T> {
  myFilter: (
    callback: (value: T, i: number, array: T[]) => unknown,
    thisArg?: any
  ) => T[]
}

Array.prototype.myFilter = function (callback, thisArg) {
  const context = thisArg || this;
  const array = this;
  const newArray = [];

  for (let i = 0; i < array.length; i++) {

    if (array[i] !== undefined && callback.call(context, array[i], i, array)) {
      newArray.push(array[i])
    }
  }

  return newArray;
}

interface SomeArray {
  name: string;
  age: number;
}


const someArray: (SomeArray | undefined)[] = [
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

const result = someArray.myFilter((item, i, arr) => item && item.age <= 25)

console.log('result is: ', result);

