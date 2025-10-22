const censorWord = (word) => {
  if (word.length <= 2) return word[0] + '*'.repeat(word.length - 1);
  return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
};

const censorText = (text, dictionary) => {
    return text.split(' ').map(word => {
        if(dictionary.includes(word)) {
            return word.replace(word, censorWord(word));
        }
        return word
    })
    .join(' ');
}

const text = "javascript este minunat";
const dictionary = ['este'];

const censored = censorText(text, dictionary);
console.log(censored);