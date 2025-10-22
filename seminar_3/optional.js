const numbers = [12, 4, 8, 6, 9, 5]

const average = (numbers) => {
  if (numbers.length === 0) return 0; 
  const sum = numbers.reduce((prev, current) => prev + current, 0);
  return sum / numbers.length;
};

console.log(average(numbers))