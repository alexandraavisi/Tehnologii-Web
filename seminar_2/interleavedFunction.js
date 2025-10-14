function interleavedFunction(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return -1;
    } else {
        let resultArr = [];
        for (i = 0; i < arr1.length; i++) {
            resultArr.push(arr1[i]);
            resultArr.push(arr2[i]);
        }
        return resultArr;
    }
}

let a = [1, 2, 3];
let b = ['a', 'b', 'c'];
console.log(interleavedFunction(a, b));