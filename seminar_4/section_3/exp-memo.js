function powerGen() {
    const cache = {}

    const power = (base, exp) => {
        const key = `${base},${exp}`

        if(key in cache) {
            console.log(`found ${key}`)
            return cache[key]
        }

        console.log(`calculated ${key}`)

        if (exp === 0) {
            cache[key] = 1
        } else if (exp === 1) {
            cache[key] = base
        } else {
            cache[key] = base * power(base, exp -1)
        }
        return cache[key]
    }
    return power
}

const pow = powerGen()

console.log(pow(2, 0))
console.log(pow(2, 5))
console.log(pow(2, 3))
console.log(pow(2, 4))
console.log(pow(2, 5))