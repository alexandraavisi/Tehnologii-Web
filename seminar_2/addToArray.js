function addToArray(array, ...args) {
    for (let i = 0; i < args.length; i++) {
        array.push(args[i]);
    }
    return array;
}

let arr = [];
let newArr = addToArray(arr, 1, 2, 3, 4, 5, 6);
console.log(newArr);