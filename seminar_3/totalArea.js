//metoda 1

// const getTotalArea = (squareDimensions) =>{
//     return squareDimensions.map((side) => {
//         return side * side;
//     }).reduce((prev, current) => {
//         return prev + current;
//     }, 0)
// }


//metoda 2
const getTotalArea = (squareDimensions) => 
    squareDimensions
        .map((side) => side * side)
        .reduce((prev, current) => prev + current, 0);

const squareDimensions = [3, 5, 12, 3, 5, 3];

const result = getTotalArea(squareDimensions);
console.log("result: ", result);