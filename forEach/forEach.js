Array.prototype.myForEach = function (callback, thisContext) {

  if (this == null) {
    throw new Error('Can\'t iterable over undefined or null');
  }

  if (!Array.isArray(this)) {
    throw new Error(`TypeError: ${this}.forEach is not a function`)
  }

  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }

  const context = thisContext || this;
  const array = Object(this);
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

