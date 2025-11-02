export const vocale = ['a', 'e', 'i', 'o', 'u'];

export function countVocale(text) {
    if(typeof text!=='string'){
        throw new Error('Trebuie sa furnizezi un text');
    }

    let count = 0;

    for (const char of text.toLowerCase()) {
        if (vocale.includes(char)) {
            count++;
        }
    }

    return count;
}