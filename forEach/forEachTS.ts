
interface Array<T> {
  myForEach: (
    callback: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ) => void;
}

Array.prototype.myForEach = function (callback, thisArg ) {

  const context = thisArg || this;
  const array = this;
  const length = array.length;

  for (let i = 0; i < length; i++) {

    if (i in array) {
      callback.call(context, array[i], i, array);
    }    
  }
}

const arr = [1,4,5,7];

arr.myForEach((item, i, arr) => {
  console.log(`Item ${item} has ${i} position in array ${arr}`);
})




