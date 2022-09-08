

let myMap = function (array, cb) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        let num = array[i];
        let res = cb(num, i, array);
        newArray.push(res)
    }

    return newArray
}

let result = myMap([4, 5, 6,78, 9], function (n) {
    return 2 * n
}) 

console.log(result);


