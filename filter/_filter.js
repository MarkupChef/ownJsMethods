Array.prototype.myFilter = function (callback, thisArg) {
    var context = thisArg || this;
    var array = this;
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== undefined && callback.call(context, array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
var someArray = [
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
var result = someArray.myFilter(function (item, i, arr) { return item && item.age <= 25; });
console.log('result is: ', result);
