const nums = [1, 2, 15, 3, 9, 22, 202, 31, 30, 42, 3, 19, 18, 32];
const param = 3;

const totalDivisible = (nums, param) =>
    nums.filter((num) => num % param === 0)
    .reduce((prev, current) => prev + current, 0);

const result = totalDivisible(nums, param);
console.log("result: " , result);