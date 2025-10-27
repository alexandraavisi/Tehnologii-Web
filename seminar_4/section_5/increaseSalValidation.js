function increaseSalary(salaries, percent) {
    if(!Array.isArray(salaries)) {
        throw new Error('First parameter must be an array')
    }

    if(typeof percent !== 'number') {
        throw new Error('Second parameter must be a number')
    }

    return salaries.map(salary => {
        if(typeof salary !== 'number') {
            throw new Error('Array must contain only numbers')
        }
        return salary + (salary * percent / 100)
    })
}

try {
    const updated = increaseSalary([2000, 3000, 4000], 10)
    console.log('Updated salries: ', updated)
    increaseSalary('not an array', 10)
} catch (error) {
    console.log(error)
}