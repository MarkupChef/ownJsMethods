Array.prototype.myMap = function (callback, thisArg) {
    var context = thisArg || this;
    var array = this;
    var length = array.length;
    var newArray = [];
    for (var i = 0; i < length; i++) {
        newArray.push(callback.call(context, array[i], i, array));
    }
    return newArray;
};
Array.prototype.myMapByReduce = function (callback, thisArg) {
    var context = thisArg || this;
    var array = this;
    return array.reduce(function (acc, item, i, arr) {
        acc[i] = callback.call(context, item, i, arr);
        return acc;
    }, []);
};
var someArray = [1, 2, 4, 5, 3];
var result1 = someArray.myMap(function (item, i, arr) {
    return item * 2;
});
console.log('result1 is: ', result1);
var result2 = someArray.myMapByReduce(function (item, i, arr) {
    return item * 2;
});
console.log('result2 is: ', result2);
