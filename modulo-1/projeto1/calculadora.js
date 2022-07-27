function  sum(a, b) {
    const num1 = parseInt(a)
    const num2 = parseInt(b)

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        throw  new Error('Please chech your number')
        
    }
    return num1+num2 
}
module.exports = sum