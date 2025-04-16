function binaryToDecimal(binaryStr) {
    if (!/^[01]{8}$/.test(binaryStr)) {
        console.log('Ошибка! Введите пожалуйста корректное 8-битное двоичное число');
        return;
    }
    const decimal = parseInt(binaryStr, 2); // Преобразование из двоичной строки в десятичное число
    console.log(decimal);
}

binaryToDecimal("00001001"); // 9
binaryToDecimal("11110000"); // 240
binaryToDecimal("00000000"); //  0
binaryToDecimal("1020002");    // Ошибка