//Ex 1
function occurences1(text, character) {
    let count = 0;
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === character) { //functia charAt(i) => acceseaza caracterul de pe pozitia i din string
            count++;
        }
    }
    return count;
}

console.log(occurences1("ana are foarte multe caiete", "a"))

//Ex 2
function occurences2(text, character){
    return text.split(character).length-1; //text.split(character) => sparge textul in bucati unde gaseste respectivul caracter, 
                                          // rezultatul va fi un array. length va numara componentele noului array.
}

console.log(occurences2("mihai iubeste integramele", "i"))

//Ex 3
let occurences3 = (text, character) => text.split(character).length-1;

console.log(occurences3("multe merdenele", "e"))
