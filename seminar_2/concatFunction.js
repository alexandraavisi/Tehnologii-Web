let concatWords = (words) => words.join("");

let args = process.argv.slice(2); //ia argumentele din linia de comanda dupa numele fisierului

console.log(concatWords(args));
