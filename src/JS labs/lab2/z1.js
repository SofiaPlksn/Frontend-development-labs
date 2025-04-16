function sumDigits(number) {
    return Math.abs(number)
        .toString()
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}


console.log(sumDigits(245678));   // 32
console.log(sumDigits(97561));   //  28
console.log(sumDigits(543));    // 12