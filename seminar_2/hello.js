let sayHello = (name) =>  `Hello, ${name}!`;

console.log(sayHello(process.argv[0]));
console.log(sayHello(process.argv[1]));
console.log(sayHello(process.argv[2]));

//proces.argv[0] => calea catre interpretor
//proces.argv[1] => calea catre scriptul nostru
//proces.argv[2] => argumentele incep cu indexul 2 (abia acum apeleaza argumentul din linia de comanda)
