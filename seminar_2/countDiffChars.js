function noDiffChars(str1, str2) {
    if (str1.length !== str2.length) {
        return -1
    } else {
        let count = 0;
        for (let i = 0; i < str1.length; i++){
            if (str1[i] !== str2[i]) {
                count++
            }
        }
        return count;
    }
}

console.log(noDiffChars("mami", "tati"))  // => 2
console.log(noDiffChars("ioana", "mara")) // => -1
console.log(noDiffChars("cici", "cici"))  // => 0