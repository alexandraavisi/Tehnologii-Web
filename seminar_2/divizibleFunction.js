function checkDivizible(n, divizor) {
    if( n % divizor ) {
        return false
    } else {
        return true
    }
}

console.log(checkDivizible(10, 2))
console.log(checkDivizible(10, 4))
