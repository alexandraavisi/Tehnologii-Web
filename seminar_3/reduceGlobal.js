const reduce = (values, callback, initialValue) => {
    let result = initialValue;

    for(const value of values) {
        result = callback(result, value);
    }

    return result;
}

const sampleArray = [1, 2, 3, 4, 5]
function callback(no1, no2)  {return no1 * no2 ; }

console.log(reduce(sampleArray, callback, 1))