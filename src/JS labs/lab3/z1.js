function processArray(arr) {
    const originalSum = arr.reduce((sum, num) => sum + num, 0);

    const modifiedArr = arr.map((num, index) => {
        if (num % 2 === 0) {
            return num + index;
        } else {
            return num - index;
        }
    });

    const modifiedSum = modifiedArr.reduce((sum, num) => sum + num, 0);

    console.log("Исходный массив:", arr);
    console.log("Новый массив:", modifiedArr);
    console.log("Сумма исходного массива:", originalSum);
    console.log("Сумма нового массива:", modifiedSum);
}

processArray([5, 15, 23, 56, 35]);
processArray([-5, 11, 3, 0, 2]);
