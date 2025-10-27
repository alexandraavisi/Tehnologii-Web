function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item))
    }

    const clone = {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key])
        }
    }
    return clone
}

// --- Testare ---
const original = {
    name: "John",
    age: 30,
    skills: ["JS", "Python"],
    address: {
        city: "Bucharest",
        zip: 12345
    }
}

const copy = deepClone(original)
copy.name = "Jane"
copy.skills.push("C++")
copy.address.city = "Cluj"

console.log("Original:", original)
console.log("Copy:", copy)