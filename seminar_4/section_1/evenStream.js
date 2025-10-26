class EvenStream {
    #value;

    constructor(initialValue) {
        this.#value = initialValue % 2 === 0 ? initialValue : initialValue + 1;
    }

    next() {
        this.#value += 2;
        return this.#value;
    }
}

const evenStream = new EvenStream(5);

for (let i = 0; i < 10; i++) {
    console.log(`even[${i}] = ${evenStream.next()}`);
}