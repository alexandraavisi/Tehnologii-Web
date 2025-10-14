const getLetterFreq = (text) => {
    const letters = text.replace(/\s+/g, '').toLowerCase().split('') // /\s+/g, '' => elimina spatiile si toate caracterele de spatiu alb din tot textul
    const result = {}

    for (let letter of letters) {
        if(letter in result) {
            result[letter]++
        } else {
            result[letter] = 1
        }
    }

    const total = letters.length
    for (let letter in result) {
        result[letter] /= total
    }

    return result
}   

const sampleString = 'the quick brown fox jumps over the lazy dog'
console.log(getLetterFreq(sampleString))